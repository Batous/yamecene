import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { z } from 'zod';

// ─── Zod Schema ───────────────────────────────────────────────

const validateCodeSchema = z.object({
  code: z.string().min(1, "Le code est requis"),
});

// ─── POST /api/validate-code ──────────────────────────────────

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = validateCodeSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Données invalides', details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const accessCode = await db.accessCode.findUnique({
      where: { code: parsed.data.code },
    });

    if (!accessCode) {
      return NextResponse.json({
        valid: false,
        error: "Code d'accès introuvable",
      });
    }

    if (accessCode.status === 'used') {
      return NextResponse.json({
        valid: false,
        error: "Ce code a déjà été utilisé",
        codeStatus: 'used',
      });
    }

    if (accessCode.status === 'suspended') {
      return NextResponse.json({
        valid: false,
        error: "Ce code a été suspendu",
        codeStatus: 'suspended',
      });
    }

    return NextResponse.json({
      valid: true,
      codeType: accessCode.type,
      issuedBy: accessCode.issuedBy,
      codeStatus: accessCode.status,
    });
  } catch (error) {
    console.error('Error validating access code:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la validation du code' },
      { status: 500 }
    );
  }
}