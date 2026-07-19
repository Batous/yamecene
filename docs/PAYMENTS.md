# Payment and payout operating guide

YaMecenes records a contribution as `pending`. Only a signed provider webhook can confirm it and advance milestones. The browser cannot mark a contribution as confirmed.

## Provider layer

| Provider | Default use | Currencies currently eligible | Local methods | Sandbox | Activation input |
| --- | --- | --- | --- | --- | --- |
| MaxiCash | Preferred RDC option for USD/ZAR | USD, ZAR | Mobile Money, card, MaxiCash wallet | Yes | API key and webhook secret |
| CinetPay | Francophone fallback, including CDF | CDF, XAF, XOF, USD, EUR | Mobile Money, card | Yes | API key and webhook secret |
| Flutterwave | Pan-African and diaspora fallback | CDF, USD, EUR, XAF, XOF | Mobile Money, card, bank transfer | Yes | API key and webhook secret |
| PawaPay | Mobile-money focused option | CDF, USD, EUR, XAF, XOF | Mobile Money | Yes | API key and webhook secret |

The adapters currently run in a safe sandbox placeholder mode until real provider credentials and each provider's webhook contract are supplied. They never claim a sandbox placeholder is a paid donation.

## Webhooks

`POST /api/payments/webhooks/{maxicash|cinetpay|flutterwave|pawapay}` receives provider events. Set the matching `PAYMENT_<PROVIDER>_WEBHOOK_SECRET`; events are stored with a unique `(provider, eventId)` pair, so retries and duplicate delivery are harmless.

Use the provider's actual signature header by mapping it to `x-payment-signature` in the provider adapter. Do not set `PAYMENT_ALLOW_UNVERIFIED_WEBHOOKS=true` outside local simulation.

## Payout tests

1. Create a pending contribution, then deliver success, failure, timeout, duplicate, and delayed webhook payloads. Verify only the success event changes the donation and milestones.
2. Request a payout after a reached milestone using `POST /api/payouts` with `x-admin-key`. Fund-manager and direct requests become `approved`; payment/settlement remains a provider-side operation.
3. For `multisig`, assign at least three `Signatory` records and set a threshold. Call `POST /api/payouts/{id}/approve` once per signer. It remains `partial_approval` until the threshold, then changes to `approved`.

Every payout-management endpoint requires `ADMIN_API_KEY`. The application does not yet have end-user sign-in, so this server-to-server gate intentionally keeps payout controls out of the public browser.
