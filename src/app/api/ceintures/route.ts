import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

// Ceinture level definitions (ordered by rank)
const CEINTURE_LEVELS = [
  { level: 'blanche', label: 'Ceinture Blanche', description: 'Premier pas dans la générosité', minDonations: 1, icon: '🤍' },
  { level: 'jaune', label: 'Ceinture Jaune', description: 'Engagement naissant', minDonations: 3, icon: '💛' },
  { level: 'verte', label: 'Ceinture Verte', description: 'Générosité en croissance', minDonations: 5, icon: '💚' },
  { level: 'bleue', label: 'Ceinture Bleue', description: 'Solidarité affirmée', minDonations: 10, icon: '💙' },
  { level: 'rouge', label: 'Ceinture Rouge', description: 'Cœur généreux', minDonations: 15, icon: '❤️' },
  { level: 'noire', label: 'Ceinture Noire', description: 'Mécène accompli', minDonations: 25, icon: '🖤' },
  { level: 'or', label: 'Ceinture d\'Or', description: 'Grand Mécène d\'honneur', minDonations: 50, icon: '🥇' },
] as const;

// ─── GET /api/ceintures ──────────────────────────────────────

export async function GET() {
  try {
    // Get all mécènes with their donation counts and totals
    const mecenes = await db.user.findMany({
      where: { role: 'mecene' },
      select: {
        id: true,
        name: true,
        city: true,
        country: true,
        createdAt: true,
        donsMade: {
          where: { status: 'confirmed' },
          select: {
            amount: true,
            createdAt: true,
          },
        },
        ceintures: {
          select: {
            level: true,
            awardedAt: true,
            note: true,
          },
          orderBy: { awardedAt: 'desc' },
        },
      },
    });

    // Build mécène rankings with calculated ceinture levels
    const meceneRankings = mecenes
      .map((m) => {
        const donationCount = m.donsMade.length;
        const totalDonated = m.donsMade.reduce((sum, d) => sum + d.amount, 0);
        const currentCeinture = m.ceintures[0] ?? null;

        // Determine theoretical ceinture level based on donation count
        let theoreticalLevel = CEINTURE_LEVELS[0];
        for (const cl of CEINTURE_LEVELS) {
          if (donationCount >= cl.minDonations) {
            theoreticalLevel = cl;
          }
        }

        return {
          id: m.id,
          name: m.name,
          city: m.city,
          country: m.country,
          memberSince: m.createdAt,
          donationCount,
          totalDonated: Math.round(totalDonated * 100) / 100,
          currentCeinture,
          theoreticalLevel,
          hasCeinture: m.ceintures.length > 0,
        };
      })
      .sort((a, b) => b.totalDonated - a.totalDonated);

    // Count ceintures per level
    const ceintureDistribution: Record<string, number> = {};
    for (const level of CEINTURE_LEVELS) {
      ceintureDistribution[level.level] = mecenes.filter(
        (m) =>
          m.ceintures.length > 0 && m.ceintures[0].level === level.level
      ).length;
    }

    return NextResponse.json({
      levels: CEINTURE_LEVELS,
      rankings: meceneRankings,
      distribution: ceintureDistribution,
    });
  } catch (error) {
    console.error('Error fetching ceintures:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des ceintures' },
      { status: 500 }
    );
  }
}