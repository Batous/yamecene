import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { z } from 'zod';

// ─── Zod Schema ───────────────────────────────────────────────

const updateCauseStatusSchema = z.object({
  status: z.enum(['pending', 'active', 'closed', 'rejected']),
});

function isAuthorized(request: NextRequest) {
  const secret = process.env.ADMIN_API_KEY;
  return Boolean(secret && request.headers.get('x-admin-key') === secret);
}

// ─── GET /api/admin/causes ────────────────────────────────────

export async function GET(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json(
      { error: 'Administrator authorization is required' },
      { status: 401 }
    );
  }

  try {
    const causes = await db.cause.findMany({
      include: {
        porteur: {
          select: {
            id: true,
            name: true,
            email: true,
            phone: true,
            city: true,
            country: true,
          },
        },
        milestones: {
          orderBy: { target: 'asc' },
        },
        accessCodeRel: {
          select: {
            code: true,
            type: true,
            status: true,
          },
        },
        _count: {
          select: { dons: true },
        },
      },
      orderBy: { createdAt: 'desc' },
    });

    // Enrich with donation totals
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
    console.error('Error fetching admin causes:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des causes' },
      { status: 500 }
    );
  }
}

// ─── PATCH /api/admin/causes ──────────────────────────────────

export async function PATCH(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json(
      { error: 'Administrator authorization is required' },
      { status: 401 }
    );
  }

  try {
    const body = await request.json();
    const parsed = updateCauseStatusSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Données invalides', details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { causeId, status } = body as { causeId: string; status: string };

    if (!causeId) {
      return NextResponse.json(
        { error: "L'identifiant de la cause est requis" },
        { status: 400 }
      );
    }

    const cause = await db.cause.findUnique({
      where: { id: causeId },
    });

    if (!cause) {
      return NextResponse.json(
        { error: 'Cause introuvable' },
        { status: 404 }
      );
    }

    const updated = await db.cause.update({
      where: { id: causeId },
      data: { status: parsed.data.status },
      include: {
        porteur: {
          select: { id: true, name: true },
        },
        milestones: true,
      },
    });

    return NextResponse.json({ cause: updated });
  } catch (error) {
    console.error('Error updating cause status:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la mise à jour de la cause' },
      { status: 500 }
    );
  }
}
