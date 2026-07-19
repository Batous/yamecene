import crypto from 'node:crypto'
import type { PaymentIntentInput, PaymentIntentResult, PaymentProvider, PaymentProviderKey, VerifiedWebhook } from './types'

type ProviderDefinition = Omit<PaymentProvider, 'createIntent' | 'verifyWebhook'>

const definitions: Record<PaymentProviderKey, ProviderDefinition> = {
  maxicash: {
    key: 'maxicash',
    label: 'MaxiCash',
    supportedCurrencies: ['USD', 'ZAR'],
    supportedMethods: ['mobile_money', 'card', 'maxicash_wallet'],
  },
  cinetpay: {
    key: 'cinetpay',
    label: 'CinetPay',
    supportedCurrencies: ['CDF', 'XAF', 'XOF', 'USD', 'EUR'],
    supportedMethods: ['mobile_money', 'card'],
  },
  flutterwave: {
    key: 'flutterwave',
    label: 'Flutterwave',
    supportedCurrencies: ['CDF', 'USD', 'EUR', 'XAF', 'XOF'],
    supportedMethods: ['mobile_money', 'card', 'bank_transfer'],
  },
  pawapay: {
    key: 'pawapay',
    label: 'PawaPay',
    supportedCurrencies: ['CDF', 'USD', 'EUR', 'XAF', 'XOF'],
    supportedMethods: ['mobile_money'],
  },
}

function getSecret(provider: PaymentProviderKey) {
  return process.env[`PAYMENT_${provider.toUpperCase()}_WEBHOOK_SECRET`]
}

function verifyHmac(payload: unknown, signature: string | null | undefined, secret: string | undefined) {
  if (!secret) return process.env.PAYMENT_ALLOW_UNVERIFIED_WEBHOOKS === 'true'
  if (!signature) return false
  const expected = crypto.createHmac('sha256', secret).update(JSON.stringify(payload)).digest('hex')
  return crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(signature))
}

function mockProvider(definition: ProviderDefinition): PaymentProvider {
  return {
    ...definition,
    async createIntent(input: PaymentIntentInput): Promise<PaymentIntentResult> {
      const providerRef = `sandbox_${definition.key}_${input.paymentId}`
      return {
        providerRef,
        status: 'pending',
        checkoutUrl: `${input.returnUrl}${input.returnUrl.includes('?') ? '&' : '?'}payment=${encodeURIComponent(providerRef)}`,
        raw: { mode: 'sandbox-placeholder', provider: definition.key, amount: input.amount, currency: input.currency },
      }
    },
    async verifyWebhook(payload: unknown, signature?: string | null): Promise<VerifiedWebhook> {
      if (!verifyHmac(payload, signature, getSecret(definition.key))) {
        throw new Error('Webhook signature is invalid or no webhook secret is configured')
      }
      const event = payload as Record<string, unknown>
      const status = event.status === 'successful' || event.status === 'confirmed' ? 'confirmed' : event.status === 'failed' ? 'failed' : event.status === 'expired' ? 'expired' : 'pending'
      return {
        eventId: String(event.eventId ?? event.id ?? crypto.createHash('sha256').update(JSON.stringify(payload)).digest('hex')),
        eventType: typeof event.eventType === 'string' ? event.eventType : undefined,
        providerRef: String(event.providerRef ?? event.transactionId ?? event.reference ?? ''),
        status,
        raw: event,
      }
    },
  }
}

export function getPaymentProvider(key: PaymentProviderKey): PaymentProvider {
  // Each adapter has one interface. Sandbox placeholders deliberately do not collect money;
  // replace createIntent/verifyWebhook with the provider's audited API calls once credentials arrive.
  return mockProvider(definitions[key])
}

export function listPaymentProviders() {
  return Object.values(definitions).map(({ key, label, supportedCurrencies, supportedMethods }) => ({
    key,
    label,
    supportedCurrencies,
    supportedMethods,
    configured: Boolean(process.env[`PAYMENT_${key.toUpperCase()}_API_KEY`]),
  }))
}

export function choosePaymentProvider(currency: string, requested?: PaymentProviderKey): PaymentProviderKey {
  if (requested && definitions[requested]?.supportedCurrencies.includes(currency)) return requested
  if (definitions.maxicash.supportedCurrencies.includes(currency)) return 'maxicash'
  if (definitions.cinetpay.supportedCurrencies.includes(currency)) return 'cinetpay'
  return 'flutterwave'
}
