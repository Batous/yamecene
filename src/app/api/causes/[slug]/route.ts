import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

// ─── GET /api/causes/[slug] ───────────────────────────────────

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;

    const cause = await db.cause.findUnique({
      where: { slug },
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
        dons: {
          where: { status: 'confirmed' },
          orderBy: { createdAt: 'desc' },
          include: {
            mecene: {
              select: {
                id: true,
                name: true,
                city: true,
              },
            },
            poem: {
              select: {
                id: true,
                content: true,
                generated: true,
                validated: true,
                published: true,
              },
            },
          },
        },
      },
    });

    if (!cause) {
      return NextResponse.json(
        { error: 'Cause introuvable' },
        { status: 404 }
      );
    }

    // Calculate donation totals
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

    // Determine reached milestones based on total donations
    const totalAmount = totals._sum.amount ?? 0;
    const milestonesWithStatus = cause.milestones.map((m) => ({
      ...m,
      reached: totalAmount >= m.target,
      progressPercent:
        cause.goalAmount && cause.goalAmount > 0
          ? Math.min(100, Math.round((totalAmount / m.target) * 100))
          : 0,
    }));

    return NextResponse.json({
      cause: {
        ...cause,
        milestones: milestonesWithStatus,
        donationTotal: totalAmount,
        donationCount: totals._count,
        commissionTotal: totals._sum.commission ?? 0,
        netPorteurTotal: totals._sum.netPorteur ?? 0,
        progressPercent: cause.goalAmount
          ? Math.min(
              100,
              Math.round((totalAmount / cause.goalAmount) * 100)
            )
          : 0,
      },
    });
  } catch (error) {
    console.error('Error fetching cause:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la récupération de la cause' },
      { status: 500 }
    );
  }
}