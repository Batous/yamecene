import { db } from '@/lib/db'
import { Prisma } from '@/generated/prisma'
import { normalizeCurrency } from '@/lib/currency'
import { choosePaymentProvider, getPaymentProvider } from './providers'
import type { PaymentProviderKey, VerifiedWebhook } from './types'

export async function markPaymentFromWebhook(provider: PaymentProviderKey, event: VerifiedWebhook) {
  if (!event.providerRef) throw new Error('Provider reference is missing from webhook')

  return db.$transaction(async (tx) => {
    const payment = await tx.payment.findFirst({
      where: { provider, providerRef: event.providerRef },
      include: { don: { include: { cause: { include: { milestones: true } } } } },
    })
    if (!payment) throw new Error('Payment reference was not found')

    const duplicate = await tx.webhookEvent.findUnique({ where: { provider_eventId: { provider, eventId: event.eventId } } })
    if (duplicate) return { duplicate: true, payment }

    await tx.webhookEvent.create({
      data: { provider, eventId: event.eventId, eventType: event.eventType, paymentId: payment.id, payload: event.raw as Prisma.InputJsonValue, processedAt: new Date() },
    })

    await tx.payment.update({ where: { id: payment.id }, data: { status: event.status, providerPayload: event.raw as Prisma.InputJsonValue } })
    if (event.status !== 'confirmed' || payment.don.status === 'confirmed') return { duplicate: false, payment }

    const don = await tx.don.update({ where: { id: payment.donId }, data: { status: 'confirmed' } })
    const totals = await tx.don.aggregate({ where: { causeId: don.causeId, status: 'confirmed' }, _sum: { amount: true } })
    const totalAmount = totals._sum.amount ?? 0
    const reached = payment.don.cause.milestones.filter((milestone) => !milestone.reached && totalAmount >= milestone.target)
    if (reached.length) {
      await tx.milestone.updateMany({ where: { id: { in: reached.map((milestone) => milestone.id) } }, data: { reached: true, reachedAt: new Date() } })
    }
    return { duplicate: false, payment, donationConfirmed: true, reached: reached.map(({ id, label }) => ({ id, label })) }
  })
}

export async function createPaymentIntent(input: {
  causeId: string
  amount: number
  currency?: string
  displayName?: string
  method?: string
  provider?: PaymentProviderKey
  origin: string
}) {
  const cause = await db.cause.findUnique({ where: { id: input.causeId } })
  if (!cause || cause.status !== 'active') throw new Error('This project is not accepting contributions')
  const currency = normalizeCurrency(input.currency ?? cause.currency)
  if (currency !== normalizeCurrency(cause.currency)) throw new Error(`This project collects in ${normalizeCurrency(cause.currency)}`)

  const commission = Math.round(input.amount * 5) / 100
  const netPorteur = Math.round((input.amount - commission) * 100) / 100
  const providerKey = choosePaymentProvider(currency, input.provider)
  const created = await db.$transaction(async (tx) => {
    const don = await tx.don.create({
      data: { causeId: cause.id, amount: input.amount, currency, commission, netPorteur, method: input.method ?? 'mobile_money', status: 'pending', displayName: input.displayName ?? null },
    })
    const payment = await tx.payment.create({ data: { donId: don.id, provider: providerKey, status: 'created' } })
    return { don, payment }
  })

  const provider = getPaymentProvider(providerKey)
  const intent = await provider.createIntent({
    paymentId: created.payment.id,
    amount: input.amount,
    currency,
    method: input.method,
    description: `YaMecenes: ${cause.title}`,
    returnUrl: `${input.origin}/?payment_status=return`,
  })
  await db.payment.update({ where: { id: created.payment.id }, data: { providerRef: intent.providerRef, status: intent.status, checkoutUrl: intent.checkoutUrl, providerPayload: intent.raw as Prisma.InputJsonValue } })
  return { paymentId: created.payment.id, provider: providerKey, checkoutUrl: intent.checkoutUrl, status: intent.status }
}
