import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

// ─── GET /api/admin/stats ────────────────────────────────────

export async function GET() {
  try {
    // Total causes
    const totalCauses = await db.cause.count();
    const activeCauses = await db.cause.count({ where: { status: 'active' } });
    const pendingCauses = await db.cause.count({ where: { status: 'pending' } });
    const closedCauses = await db.cause.count({ where: { status: 'closed' } });
    const rejectedCauses = await db.cause.count({ where: { status: 'rejected' } });

    // Donation stats (confirmed only)
    const donStats = await db.don.aggregate({
      where: { status: 'confirmed' },
      _sum: {
        amount: true,
        commission: true,
        netPorteur: true,
      },
      _count: true,
    });

    // All donations (including pending)
    const allDonStats = await db.don.aggregate({
      _count: true,
    });

    // User stats
    const totalUsers = await db.user.count();
    const porteurs = await db.user.count({ where: { role: 'porteur' } });
    const mecenes = await db.user.count({ where: { role: 'mecene' } });

    // Access code stats
    const availableCodes = await db.accessCode.count({
      where: { status: 'available' },
    });
    const usedCodes = await db.accessCode.count({
      where: { status: 'used' },
    });

    // Poem stats
    const totalPoems = await db.poem.count();
    const publishedPoems = await db.poem.count({ where: { published: true } });
    const validatedPoems = await db.poem.count({ where: { validated: true } });
    const pendingPoems = await db.poem.count({
      where: { validated: false, published: false },
    });

    // Ceinture stats
    const ceinturesAwarded = await db.ceinture.count();

    // Top causes by donations
    const topCauses = await db.cause.findMany({
      where: { status: 'active' },
      take: 5,
      include: {
        _count: { select: { dons: true } },
        porteur: { select: { name: true } },
      },
      orderBy: {
        dons: { _count: 'desc' },
      },
    });

    // Enrich top causes with donation totals
    const topCausesWithTotals = await Promise.all(
      topCauses.map(async (cause) => {
        const totals = await db.don.aggregate({
          where: { causeId: cause.id, status: 'confirmed' },
          _sum: { amount: true },
        });
        return {
          id: cause.id,
          title: cause.title,
          slug: cause.slug,
          porteurName: cause.porteur.name,
          donationTotal: totals._sum.amount ?? 0,
          donationCount: cause._count.dons,
          progressPercent: cause.goalAmount
            ? Math.min(
                100,
                Math.round(((totals._sum.amount ?? 0) / cause.goalAmount) * 100)
              )
            : 0,
        };
      })
    );

    // Recent donations (last 10)
    const recentDons = await db.don.findMany({
      take: 10,
      where: { status: 'confirmed' },
      orderBy: { createdAt: 'desc' },
      include: {
        cause: { select: { title: true, slug: true } },
        mecene: { select: { name: true } },
      },
    });

    return NextResponse.json({
      causes: {
        total: totalCauses,
        active: activeCauses,
        pending: pendingCauses,
        closed: closedCauses,
        rejected: rejectedCauses,
      },
      donations: {
        totalConfirmed: donStats._count,
        totalAll: allDonStats._count,
        totalAmount: donStats._sum.amount ?? 0,
        totalCommission: donStats._sum.commission ?? 0,
        totalNetPorteur: donStats._sum.netPorteur ?? 0,
        averageAmount:
          donStats._count > 0
            ? Math.round(((donStats._sum.amount ?? 0) / donStats._count) * 100) /
              100
            : 0,
      },
      users: {
        total: totalUsers,
        porteurs,
        mecenes,
      },
      accessCodes: {
        available: availableCodes,
        used: usedCodes,
      },
      poems: {
        total: totalPoems,
        published: publishedPoems,
        validated: validatedPoems,
        pending: pendingPoems,
      },
      ceintures: {
        awarded: ceinturesAwarded,
      },
      topCauses: topCausesWithTotals,
      recentDons,
    });
  } catch (error) {
    console.error('Error fetching admin stats:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des statistiques' },
      { status: 500 }
    );
  }
}