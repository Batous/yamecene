import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET() {
  try {
    const [activeCauses, totalConfirmed, mecenes] = await Promise.all([
      db.cause.count({ where: { status: 'active' } }),
      db.don.count({ where: { status: 'confirmed' } }),
      db.user.count({ where: { role: 'mecene' } }),
    ])

    return NextResponse.json({
      causes: { active: activeCauses },
      donations: { totalConfirmed },
      users: { mecenes },
    })
  } catch (error) {
    console.error('Error fetching public stats:', error)
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des statistiques' },
      { status: 500 }
    )
  }
}
