import { NextResponse } from 'next/server'
import { listPaymentProviders } from '@/lib/payments/providers'

export async function GET() {
  return NextResponse.json({ providers: listPaymentProviders() })
}
