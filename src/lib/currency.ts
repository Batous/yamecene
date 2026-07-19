export const SUPPORTED_CURRENCIES = [
  { code: 'CDF', label: 'Franc congolais (CDF)' },
  { code: 'EUR', label: 'Euro (EUR)' },
  { code: 'USD', label: 'Dollar américain (USD)' },
  { code: 'XAF', label: 'Franc CFA BEAC (XAF)' },
  { code: 'XOF', label: 'Franc CFA BCEAO (XOF)' },
] as const

export type SupportedCurrency = (typeof SUPPORTED_CURRENCIES)[number]['code']

const FALLBACK_CURRENCY = 'CDF'

export function normalizeCurrency(currency?: string | null): SupportedCurrency {
  const code = currency?.toUpperCase()
  return SUPPORTED_CURRENCIES.some((item) => item.code === code)
    ? (code as SupportedCurrency)
    : FALLBACK_CURRENCY
}

export function formatMoney(amount: number, currency?: string | null): string {
  const normalized = normalizeCurrency(currency)
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: normalized,
    maximumFractionDigits: ['CDF', 'XAF', 'XOF'].includes(normalized) ? 0 : 2,
  }).format(amount)
}
