import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { db } from '@/lib/db'
import { normalizeCurrency } from '@/lib/currency'

const schema = z.object({ causeId: z.string().min(1), amount: z.number().positive(), provider: z.enum(['maxicash', 'cinetpay', 'flutterwave', 'pawapay']) })

function isAuthorized(request: NextRequest) {
  const secret = process.env.ADMIN_API_KEY
  return Boolean(secret && request.headers.get('x-admin-key') === secret)
}

export async function POST(request: NextRequest) {
  if (!isAuthorized(request)) return NextResponse.json({ error: 'Administrator authorization is required' }, { status: 401 })
  const parsed = schema.safeParse(await request.json())
  if (!parsed.success) return NextResponse.json({ error: 'Invalid payout request' }, { status: 400 })
  const cause = await db.cause.findUnique({ where: { id: parsed.data.causeId }, include: { milestones: true, signatories: true } })
  if (!cause) return NextResponse.json({ error: 'Project not found' }, { status: 404 })
  if (!cause.milestones.some((milestone) => milestone.reached)) return NextResponse.json({ error: 'No reached milestone authorizes a payout yet' }, { status: 409 })
  if (cause.payoutModel === 'multisig' && cause.signatories.length < Math.max(3, cause.approvalThreshold)) {
    return NextResponse.json({ error: 'Multisig payout needs enough designated signatories' }, { status: 409 })
  }
  const payout = await db.payoutRequest.create({
    data: {
      causeId: cause.id,
      amount: parsed.data.amount,
      currency: normalizeCurrency(cause.currency),
      provider: parsed.data.provider,
      payoutModel: cause.payoutModel,
      approvalThreshold: cause.payoutModel === 'multisig' ? Math.max(3, cause.approvalThreshold) : 0,
      status: cause.payoutModel === 'multisig' ? 'pending' : 'approved',
    },
  })
  return NextResponse.json({ payout }, { status: 201 })
}
