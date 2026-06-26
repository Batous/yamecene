# YaMécènes — Worklog

---
Task ID: 1
Agent: Main
Task: Project setup, Prisma schema, seed data

Work Log:
- Analyzed existing Next.js 16 project structure
- Created comprehensive Prisma schema with 7 tables: User, AccessCode, Cause, Milestone, Don, Ceinture, Poem
- Pushed schema to SQLite database
- Created seed script with realistic Senegalese fundraising data
- Seeded 2 porteurs, 2 mécènes, 1 admin, 10 access codes, 3 active causes, 4 donations, 4 poems, 2 ceintures

Stage Summary:
- Database is fully set up and seeded with demo data
- Prisma client generated
- Ready for API routes and frontend development

---
Task ID: 5
Agent: Theme Agent
Task: Update layout and CSS theme

Work Log:
- Updated layout.tsx metadata: title set to "YaMécènes — La Ruche des Mécènes", description set to French fundraising tagline
- Removed Z.ai-specific metadata (keywords, authors, icons, openGraph, twitter)
- Changed html lang from "en" to "fr"
- Preserved Geist fonts, Toaster import, and body class structure
- Added @layer utilities block to globals.css with 6 custom classes:
  - .honey-gradient: amber-600 → amber-500 → orange-400 gradient background
  - .honey-text: same gradient applied as text via background-clip
  - .honeycomb-bg: subtle repeating hexagon SVG pattern in amber at 6% opacity
  - .card-hover: hover transition with translateY(-2px), scale(1.01), amber-tinted shadow
  - .fade-in: 0.5s opacity animation
  - .slide-up: 0.5s opacity + translateY(16px→0) animation
- All existing shadcn theme variables (:root, .dark) left untouched

Stage Summary:
- Layout is now branded for YaMécènes with French locale
- 6 reusable utility classes available for honey/amber theming across components
- No breaking changes to existing theme or component styling

---
Task ID: 3
Agent: API Routes Agent
Task: Create all API routes

Work Log:
- Created 9 API route files covering the full YaMécènes backend
- `/api/causes/route.ts`: GET all causes (active/pending) with porteur info, donation totals, milestones, progress %; POST new cause with zod validation, access code validation (must be 'available'), slug generation (lowercase, accents stripped, random suffix), transactional code marking
- `/api/causes/[slug]/route.ts`: GET single cause by slug with full details including porteur, milestones with dynamic reached status, confirmed donations, and poem data
- `/api/validate-code/route.ts`: POST validates access code availability, returns code type and status
- `/api/access-codes/route.ts`: GET lists all codes with cause association and status stats; POST generates up to 100 codes in bulk
- `/api/don/route.ts`: POST creates donation with 5% commission calculation, creates poem placeholder, transactionally checks and updates milestones when total reaches target thresholds
- `/api/admin/causes/route.ts`: GET all causes with full admin details (porteur, milestones, access codes, donation totals); PATCH updates cause status
- `/api/admin/stats/route.ts`: GET comprehensive dashboard stats (causes by status, confirmed/all donations with totals/commission/average, users by role, access codes, poems by status, ceintures, top 5 causes, recent 10 donations)
- `/api/poems/route.ts`: GET published poems with pagination, optional causeId filter, includes donation and mécène details
- `/api/ceintures/route.ts`: GET ceinture level definitions (7 levels: blanche→or), mécène rankings sorted by total donated, theoretical vs awarded ceinture comparison, distribution counts

Stage Summary:
- All 9 API routes created and lint-clean
- All POST routes use zod validation
- All routes use try/catch with proper error handling and French error messages
- Donation flow handles commission (5%), poem creation, and milestone updates atomically via transactions
- Access code validation and cause creation use transactions for data integrity
- Ceintures endpoint includes both static level definitions and dynamic mécène rankings
