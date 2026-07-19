# YaMecenes activity report

## Day one: foundation and deployment

- Inspected the supplied YaMecenes workspace and found a Next.js, Tailwind, shadcn, Prisma application with a donation prototype.
- Confirmed GitHub CLI was installed but not authenticated, so repository creation could not be completed from this machine.
- Reframed the original Senegal/honey and exclusively Christian presentation for Congolese solidarity. The early version kept Christian community projects as a valid category while retaining multi-currency support.
- Added CDF, EUR, USD, XAF and XOF handling, with each project collecting in a single declared currency.
- Switched the Prisma datasource from local SQLite assumptions to Neon PostgreSQL.
- Pushed the original schema to Neon, seeded the database, and verified the production API and homepage on Vercel.

## Uplift: 19 July 2026

### Product and interface

- Adopted the consolidated brief: the product-facing system word is `Projet / Project`; an individual story is shown by its title and category, not by a generic label.
- Replaced the global positioning with `La solidarite congolaise, sans frontiere.` / `Congolese solidarity, open to all.`
- Added a lightweight FR/EN switch for the central navigation, landing page, project language, and trust messaging.
- Rebuilt the landing page with a quieter, more credible operational visual system: project cards, category signals, totals, verification language, and payment expectations.
- Updated the submission flow with inclusive categories: Education, Health, Family, Research & Innovation, Art & Creation, Entrepreneurship, and Community & Faith.
- Added a payout-model choice during project submission: fund manager, direct beneficiary, or multi-signature.
- Removed external Google font downloads from the app shell so a production build does not require a font-network request.

### Payments and payouts

- Replaced browser-confirmed donations with server-created payment intents. Contributions begin as `pending` and are only marked `confirmed` after a verified provider webhook.
- Added a provider abstraction with MaxiCash, CinetPay, Flutterwave, and PawaPay. Provider selection is server-side and currency-aware; MaxiCash remains the preferred RDC option where eligible.
- Added provider listing, payment intent, and provider webhook routes.
- Added webhook event persistence and a unique `(provider, eventId)` guard so delayed or duplicate delivery cannot credit a contribution twice.
- Added payment, webhook event, signatory, payout request, and payout approval data models.
- Added payout request and approval APIs. Fund-manager and direct models can move to approval after a reached milestone; multi-signature requires at least three designated signatories and the configured threshold.
- Protected payout management with `ADMIN_API_KEY`; there is no end-user authentication layer yet, so public-browser payout controls would be unsafe.
- Added environment variable documentation and a full sandbox and payout test procedure in `docs/PAYMENTS.md`.

## Verification

- Prisma client generation: passed.
- TypeScript `tsc --noEmit`: passed.
- Next.js production build with Webpack: passed. Routes include all payment, webhook, payout, and approval endpoints.
- Local visual server was not started because the shared workspace policy blocks background processes. The build itself passed.

## Required before live money activation

1. Provide sandbox credentials and webhook-signature details for MaxiCash first, then CinetPay, Flutterwave, and PawaPay as desired.
2. Replace each safe sandbox adapter with the provider's official API request and signature contract; do not use `PAYMENT_ALLOW_UNVERIFIED_WEBHOOKS` in production.
3. Set `ADMIN_API_KEY` and all payment secrets in Vercel, then run `prisma db push` against Neon and deploy the uplift.
4. Complete the MaxiCash live KYC dossier: legal registration/NGO documents, tax details, logo, director ID, proof of address, Equity or wallet settlement details, and an operational public website.
5. Add real authentication before delegating payout approvals to external signatories.
