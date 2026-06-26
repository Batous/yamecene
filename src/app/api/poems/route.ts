import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

// ─── GET /api/poems ───────────────────────────────────────────

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const causeId = searchParams.get('causeId');
    const page = parseInt(searchParams.get('page') ?? '1', 10);
    const limit = parseInt(searchParams.get('limit') ?? '20', 10);
    const skip = (page - 1) * limit;

    const where = {
      published: true,
      ...(causeId ? { don: { causeId } } : {}),
    };

    const [poems, total] = await Promise.all([
      db.poem.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
        include: {
          don: {
            select: {
              amount: true,
              displayName: true,
              createdAt: true,
              cause: {
                select: {
                  id: true,
                  title: true,
                  slug: true,
                  porteur: {
                    select: { name: true },
                  },
                },
              },
              mecene: {
                select: {
                  id: true,
                  name: true,
                  city: true,
                  country: true,
                },
              },
            },
          },
        },
      }),
      db.poem.count({ where }),
    ]);

    return NextResponse.json({
      poems,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('Error fetching poems:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des poèmes' },
      { status: 500 }
    );
  }
}