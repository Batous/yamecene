import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { z } from 'zod';

// ─── Zod Schema ───────────────────────────────────────────────

const createDonSchema = z.object({
  causeId: z.string().min(1, "L'identifiant de la cause est requis"),
  meceneId: z.string().optional(),
  amount: z.number().positive('Le montant doit être positif'),
  method: z
    .enum(['mobile_money', 'paypal', 'autre'])
    .default('mobile_money'),
  displayName: z.string().optional(),
  status: z
    .enum(['pending', 'confirmed', 'failed'])
    .default('confirmed'),
});

// ─── POST /api/don ────────────────────────────────────────────

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = createDonSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Données invalides', details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const data = parsed.data;

    // Verify the cause exists and is active
    const cause = await db.cause.findUnique({
      where: { id: data.causeId },
      include: { milestones: true },
    });

    if (!cause) {
      return NextResponse.json(
        { error: 'Cause introuvable' },
        { status: 404 }
      );
    }

    if (cause.status !== 'active') {
      return NextResponse.json(
        { error: 'Les dons ne sont pas acceptés pour cette cause' },
        { status: 400 }
      );
    }

    // Calculate commission (5%) and net amount
    const commission = Math.round(data.amount * 0.05 * 100) / 100;
    const netPorteur = Math.round((data.amount - commission) * 100) / 100;

    // If meceneId is provided, verify the user exists
    if (data.meceneId) {
      const mecene = await db.user.findUnique({
        where: { id: data.meceneId },
      });
      if (!mecene) {
        return NextResponse.json(
          { error: 'Mécène introuvable' },
          { status: 404 }
        );
      }
    }

    // Create donation, poem placeholder, and update milestones in a transaction
    const result = await db.$transaction(async (tx) => {
      // Create the donation
      const don = await tx.don.create({
        data: {
          causeId: data.causeId,
          meceneId: data.meceneId ?? null,
          amount: data.amount,
          commission,
          netPorteur,
          method: data.method,
          displayName: data.displayName ?? null,
          status: data.status,
        },
        include: {
          cause: {
            select: { title: true, porteurId: true },
          },
          mecene: {
            select: { id: true, name: true },
          },
        },
      });

      // Create poem placeholder
      const poem = await tx.poem.create({
        data: {
          donId: don.id,
          content: '',
          generated: false,
          validated: false,
          published: false,
        },
      });

      // If donation is confirmed, check milestones
      if (data.status === 'confirmed') {
        // Get total confirmed donations for this cause (including the new one)
        const totals = await tx.don.aggregate({
          where: {
            causeId: data.causeId,
            status: 'confirmed',
          },
          _sum: { amount: true },
        });

        const totalAmount = totals._sum.amount ?? 0;

        // Find milestones that are now reached but weren't before
        const newlyReachedMilestones = cause.milestones.filter(
          (m) => !m.reached && totalAmount >= m.target
        );

        // Update those milestones
        if (newlyReachedMilestones.length > 0) {
          await tx.milestone.updateMany({
            where: {
              id: { in: newlyReachedMilestones.map((m) => m.id) },
            },
            data: {
              reached: true,
              reachedAt: new Date(),
            },
          });
        }

        return {
          don,
          poem,
          newlyReachedMilestones: newlyReachedMilestones.map((m) => ({
            id: m.id,
            label: m.label,
            target: m.target,
          })),
        };
      }

      return { don, poem, newlyReachedMilestones: [] };
    });

    return NextResponse.json(
      {
        don: result.don,
        poem: result.poem,
        newlyReachedMilestones: result.newlyReachedMilestones,
        message:
          result.newlyReachedMilestones.length > 0
            ? `Don enregistré ! ${result.newlyReachedMilestones.length} jalon(s) atteint(s) !`
            : 'Don enregistré avec succès',
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating donation:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la création du don' },
      { status: 500 }
    );
  }
}