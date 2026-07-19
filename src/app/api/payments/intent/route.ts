import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { createPaymentIntent } from '@/lib/payments/service'

const schema = z.object({
  causeId: z.string().min(1),
  amount: z.number().positive(),
  currency: z.string().optional(),
  displayName: z.string().max(80).optional(),
  method: z.enum(['mobile_money', 'card', 'bank_transfer', 'maxicash_wallet']).default('mobile_money'),
  provider: z.enum(['maxicash', 'cinetpay', 'flutterwave', 'pawapay']).optional(),
})

export async function POST(request: NextRequest) {
  const parsed = schema.safeParse(await request.json())
  if (!parsed.success) return NextResponse.json({ error: 'Invalid payment details', details: parsed.error.flatten() }, { status: 400 })
  try {
    const origin = request.headers.get('origin') ?? new URL(request.url).origin
    const payment = await createPaymentIntent({ ...parsed.data, origin })
    return NextResponse.json({ payment }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Unable to create payment' }, { status: 400 })
  }
}
