export const PAYMENT_PROVIDERS = ['maxicash', 'cinetpay', 'flutterwave', 'pawapay'] as const

export type PaymentProviderKey = (typeof PAYMENT_PROVIDERS)[number]
export type PaymentStatus = 'created' | 'pending' | 'confirmed' | 'failed' | 'expired'

export interface PaymentIntentInput {
  paymentId: string
  amount: number
  currency: string
  description: string
  returnUrl: string
  customerName?: string
  customerEmail?: string
  customerPhone?: string
  method?: string
}

export interface PaymentIntentResult {
  providerRef: string
  status: Extract<PaymentStatus, 'pending' | 'created'>
  checkoutUrl?: string
  raw: Record<string, unknown>
}

export interface VerifiedWebhook {
  eventId: string
  eventType?: string
  providerRef: string
  status: Extract<PaymentStatus, 'confirmed' | 'failed' | 'expired' | 'pending'>
  raw: Record<string, unknown>
}

export interface PaymentProvider {
  key: PaymentProviderKey
  label: string
  supportedCurrencies: string[]
  supportedMethods: string[]
  createIntent(input: PaymentIntentInput): Promise<PaymentIntentResult>
  verifyWebhook(payload: unknown, signature?: string | null): Promise<VerifiedWebhook>
}
