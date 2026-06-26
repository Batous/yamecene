import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { z } from 'zod';
import { Prisma } from '@prisma/client';

// ─── Zod Schemas ───────────────────────────────────────────────

const createCauseSchema = z.object({
  title: z.string().min(3, 'Le titre doit contenir au moins 3 caractères'),
  summary: z.string().optional(),
  description: z.string().min(10, 'La description doit contenir au moins 10 caractères'),
  type: z.string().optional(),
  city: z.string().optional(),
  country: z.string().optional(),
  reference: z.string().optional(),
  goalAmount: z.number().positive('Le montant objectif doit être positif').optional(),
  porteurId: z.string().min(1, "L'identifiant du porteur est requis"),
  accessCode: z.string().min(1, "Le code d'accès est requis"),
  milestones: z
    .array(
      z.object({
        label: z.string().min(1, 'Le label du jalon est requis'),
        target: z.number().positive('La cible doit être positive'),
      })
    )
    .optional(),
});

// ─── Helpers ───────────────────────────────────────────────────

function generateSlug(title: string): string {
  const base = title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // remove accents
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
        status: { in: ['active', 'pending'] },
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

    // Calculate donation totals per cause (only confirmed)
    const causesWithTotals = await Promise.all(
      causes.map(async (cause) => {
        const totals = await db.don.aggregate({
          where: {
            causeId: cause.id,
            status: 'confirmed',
          },
          _sum: {
            amount: true,
            commission: true,
            netPorteur: true,
          },
          _count: true,
        });

        return {
          ...cause,
          donationTotal: totals._sum.amount ?? 0,
          donationCount: totals._count,
          commissionTotal: totals._sum.commission ?? 0,
          netPorteurTotal: totals._sum.netPorteur ?? 0,
          progressPercent: cause.goalAmount
            ? Math.min(
                100,
                Math.round(
                  ((totals._sum.amount ?? 0) / cause.goalAmount) * 100
                )
              )
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

    // Validate access code is available
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
        { error: "Ce code d'accès n'est plus disponible", codeStatus: accessCode.status },
        { status: 400 }
      );
    }

    // Verify porteur exists
    const porteur = await db.user.findUnique({
      where: { id: data.porteurId },
    });

    if (!porteur) {
      return NextResponse.json(
        { error: 'Porteur introuvable' },
        { status: 404 }
      );
    }

    // Generate unique slug
    let slug = generateSlug(data.title);
    const existingSlug = await db.cause.findUnique({ where: { slug } });
    if (existingSlug) {
      slug = generateSlug(data.title); // regenerate with new suffix
    }

    // Create cause and mark access code as used in a transaction
    const cause = await db.$transaction(async (tx) => {
      // Mark access code as used
      await tx.accessCode.update({
        where: { code: data.accessCode },
        data: {
          status: 'used',
          usedBy: data.porteurId,
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
          city: data.city,
          country: data.country,
          reference: data.reference,
          goalAmount: data.goalAmount,
          porteurId: data.porteurId,
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
          porteur: {
            select: {
              id: true,
              name: true,
              city: true,
              country: true,
            },
          },
          milestones: true,
        },
      });

      return newCause;
    });

    return NextResponse.json({ cause }, { status: 201 });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        return NextResponse.json(
          { error: 'Une cause avec ce slug existe déjà' },
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