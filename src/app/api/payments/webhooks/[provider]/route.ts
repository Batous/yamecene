import { NextRequest, NextResponse } from 'next/server'
import { getPaymentProvider } from '@/lib/payments/providers'
import { markPaymentFromWebhook } from '@/lib/payments/service'
import type { PaymentProviderKey } from '@/lib/payments/types'

const allowed = new Set<PaymentProviderKey>(['maxicash', 'cinetpay', 'flutterwave', 'pawapay'])

export async function POST(request: NextRequest, { params }: { params: Promise<{ provider: string }> }) {
  const { provider } = await params
  if (!allowed.has(provider as PaymentProviderKey)) return NextResponse.json({ error: 'Unknown provider' }, { status: 404 })
  const key = provider as PaymentProviderKey
  try {
    const payload = await request.json()
    const event = await getPaymentProvider(key).verifyWebhook(payload, request.headers.get('x-payment-signature'))
    const result = await markPaymentFromWebhook(key, event)
    return NextResponse.json({ received: true, duplicate: result.duplicate })
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Invalid webhook' }, { status: 400 })
  }
}
