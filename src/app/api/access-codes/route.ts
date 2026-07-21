import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { z } from 'zod';

// ─── Zod Schema ───────────────────────────────────────────────

const generateCodesSchema = z.object({
  count: z
    .number()
    .int()
    .min(1, 'Au moins 1 code est requis')
    .max(100, 'Maximum 100 codes par demande'),
  type: z.enum(['direct', 'lot']).default('direct'),
  issuedBy: z.string().optional(),
});

// ─── GET /api/access-codes ────────────────────────────────────

export async function GET(_request: NextRequest) {
  try {
    const codes = await db.accessCode.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        causes: {
          select: {
            id: true,
            title: true,
            slug: true,
          },
        },
      },
    });

    const stats = await db.accessCode.groupBy({
      by: ['status'],
      _count: true,
    });

    const statusCounts = stats.reduce(
      (acc, s) => {
        acc[s.status] = s._count;
        return acc;
      },
      {} as Record<string, number>
    );

    return NextResponse.json({
      codes,
      stats: {
        total: codes.length,
        available: statusCounts['available'] ?? 0,
        used: statusCounts['used'] ?? 0,
        suspended: statusCounts['suspended'] ?? 0,
      },
    });
  } catch (error) {
    console.error('Error fetching access codes:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des codes' },
      { status: 500 }
    );
  }
}

// ─── POST /api/access-codes ───────────────────────────────────

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = generateCodesSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Données invalides', details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { count, type, issuedBy } = parsed.data;

    const codes = await db.accessCode.createMany({
      data: Array.from({ length: count }, () => ({
        type,
        issuedBy: issuedBy ?? null,
        status: 'available' as const,
      })),
    });

    // Fetch the newly created codes to return them
    const newCodes = await db.accessCode.findMany({
      where: {
        createdAt: { gte: new Date(Date.now() - 5000) }, // within last 5s
        status: 'available',
        type,
      },
      take: count,
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(
      {
        message: `${codes.count} code(s) généré(s) avec succès`,
        count: codes.count,
        codes: newCodes,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error generating access codes:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la génération des codes' },
      { status: 500 }
    );
  }
}
