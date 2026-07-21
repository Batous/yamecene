import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { z } from 'zod';
import { Prisma } from '@prisma/client';
import { normalizeCurrency } from '@/lib/currency';

// ─── Zod Schemas ───────────────────────────────────────────────

const createCauseSchema = z.object({
  title: z.string().min(3, 'Le titre doit contenir au moins 3 caractères'),
  summary: z.string().min(10, 'Le résumé doit contenir au moins 10 caractères'),
  description: z.string().min(20, 'La description doit contenir au moins 20 caractères'),
  type: z.string().optional(),
  projectFamily: z.enum(['emergency', 'development']).default('development'),
  impactStatement: z.string().min(20).optional(),
  autonomyPlan: z.string().min(20).optional(),
  evidenceNotes: z.string().max(2000).optional(),
  evidenceUrls: z.array(z.string().url()).max(8).default([]),
  city: z.string().optional(),
  country: z.string().optional(),
  reference: z.string().optional(),
  goalAmount: z.number().positive('Le montant objectif doit être positif').optional(),
  currency: z.string().optional(),
  paymentMode: z.enum(['direct', 'aggregator', 'mixed']).default('mixed'),
  directPaymentDetails: z.record(z.string(), z.string()).optional(),
  payoutModel: z.enum(['fund_manager', 'direct', 'multisig']).default('fund_manager'),
  approvalThreshold: z.number().int().min(3).max(10).optional(),
  accessCode: z.string().min(1, "Le code d'accès est requis"),
  milestones: z
    .array(
      z.object({
        label: z.string().min(1, 'Le label du jalon est requis'),
        target: z.number().positive('La cible doit être positive'),
      })
    )
    .optional(),
  // Porteur info (auto-create user)
  porteurName: z.string().min(2, 'Le nom du porteur est requis'),
  porteurEmail: z.string().email('Email invalide'),
  porteurPhone: z.string().optional(),
  porteurCity: z.string().optional(),
  porteurCountry: z.string().optional(),
  porteurMobileOperator: z.string().optional(),
  porteurMobileNumber: z.string().optional(),
}).superRefine((data, context) => {
  if (data.projectFamily !== 'emergency') return
  const hasEvidenceNotes = Boolean(data.evidenceNotes?.trim())
  if (!hasEvidenceNotes && data.evidenceUrls.length === 0) {
    context.addIssue({
      code: z.ZodIssueCode.custom,
      path: ['evidenceNotes'],
      message: 'Emergency projects require supporting evidence or verification notes',
    })
  }
});

// ─── Helpers ───────────────────────────────────────────────────

function generateSlug(title: string): string {
  const base = title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
  const suffix = Math.random().toString(36).substring(2, 8);
  return `${base}-${suffix}`;
}

// ─── GET /api/causes ──────────────────────────────────────────

export async function GET() {
  try {
    const causes = await db.cause.findMany({
      where: {
        status: 'active',
      },
      include: {
        porteur: {
          select: {
            id: true,
            name: true,
            city: true,
            country: true,
          },
        },
        milestones: {
          select: {
            id: true,
            label: true,
            target: true,
            reached: true,
            reachedAt: true,
          },
        },
        _count: {
          select: { dons: true },
        },
      },
      orderBy: { createdAt: 'desc' },
    });

    const causesWithTotals = await Promise.all(
      causes.map(async (cause) => {
        const totals = await db.don.aggregate({
          where: { causeId: cause.id, status: 'confirmed' },
          _sum: { amount: true, commission: true, netPorteur: true },
          _count: true,
        });

        return {
          ...cause,
          donationTotal: totals._sum.amount ?? 0,
          donationCount: totals._count,
          commissionTotal: totals._sum.commission ?? 0,
          netPorteurTotal: totals._sum.netPorteur ?? 0,
          progressPercent: cause.goalAmount
            ? Math.min(100, Math.round(((totals._sum.amount ?? 0) / cause.goalAmount) * 100))
            : 0,
        };
      })
    );

    return NextResponse.json({ causes: causesWithTotals });
  } catch (error) {
    console.error('Error fetching causes:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des causes' },
      { status: 500 }
    );
  }
}

// ─── POST /api/causes ─────────────────────────────────────────

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = createCauseSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Données invalides', details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const data = parsed.data;

    // Validate access code
    const accessCode = await db.accessCode.findUnique({
      where: { code: data.accessCode },
    });

    if (!accessCode) {
      return NextResponse.json(
        { error: "Code d'accès introuvable" },
        { status: 404 }
      );
    }

    if (accessCode.status !== 'available') {
      return NextResponse.json(
        { error: "Ce code d'accès n'est plus disponible" },
        { status: 400 }
      );
    }
    if (data.paymentMode === 'direct' && !data.directPaymentDetails) {
      return NextResponse.json(
        { error: 'Un moyen de paiement direct est requis pour ce mode' },
        { status: 400 }
      );
    }

    // Build mobile money config
    const mobileMoneyConfig = data.porteurMobileOperator && data.porteurMobileNumber
      ? JSON.stringify({ operator: data.porteurMobileOperator, number: data.porteurMobileNumber })
      : null;

    // Generate unique slug
    let slug = generateSlug(data.title);

    // Create porteur, cause, mark code in a transaction
    const cause = await db.$transaction(async (tx) => {
      // Find or create porteur
      let porteur = await tx.user.findUnique({
        where: { email: data.porteurEmail },
      });

      if (!porteur) {
        porteur = await tx.user.create({
          data: {
            email: data.porteurEmail,
            name: data.porteurName,
            phone: data.porteurPhone ?? null,
            city: data.porteurCity ?? null,
            country: data.porteurCountry ?? null,
            role: 'porteur',
            mobileMoneyConfig,
          },
        });
      }

      // Mark access code as used
      await tx.accessCode.update({
        where: { code: data.accessCode },
        data: {
          status: 'used',
          usedBy: porteur.id,
          usedAt: new Date(),
        },
      });

      // Create the cause
      const newCause = await tx.cause.create({
        data: {
          slug,
          title: data.title,
          summary: data.summary,
          description: data.description,
          type: data.type,
          projectFamily: data.projectFamily,
          impactStatement: data.impactStatement ?? null,
          autonomyPlan: data.autonomyPlan ?? null,
          evidenceStatus: data.projectFamily === 'emergency' || data.evidenceUrls.length ? 'pending' : 'not_required',
          evidenceNotes: data.evidenceNotes ?? null,
          evidenceUrls: data.evidenceUrls,
          city: data.city,
          country: data.country,
          reference: data.reference,
          goalAmount: data.goalAmount,
          currency: normalizeCurrency(data.currency),
          paymentMode: data.paymentMode,
          directPaymentDetails: data.directPaymentDetails ?? undefined,
          payoutModel: data.payoutModel,
          approvalThreshold: data.payoutModel === 'multisig' ? (data.approvalThreshold ?? 3) : 0,
          porteurId: porteur.id,
          accessCode: data.accessCode,
          status: 'pending',
          milestones: data.milestones
            ? {
                create: data.milestones.map((m) => ({
                  label: m.label,
                  target: m.target,
                })),
              }
            : undefined,
        },
        include: {
          porteur: { select: { id: true, name: true, city: true, country: true } },
          milestones: true,
        },
      });

      return newCause;
    });

    return NextResponse.json({ slug: cause.slug }, { status: 201 });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        return NextResponse.json(
          { error: 'Une erreur est survenue (conflit). Veuillez réessayer.' },
          { status: 409 }
        );
      }
    }
    console.error('Error creating cause:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la création de la cause' },
      { status: 500 }
    );
  }
}
