/**
 * Content architecture
 * ====================
 *
 * Separation of concerns:
 *
 *   types/       → CMS-agnostic document contracts
 *   content/     → Local seed data (this folder) — swap for CMS later
 *   lib/content/ → Adapter API consumed by app + components
 *   components/  → Prop-driven UI (no marketing copy)
 *   app/         → Routes compose sections; metadata from content API
 *
 * Document map
 * ------------
 *   site.ts                 → SiteConfig
 *   navigation.ts           → main / footer / platform nav
 *   home.ts                 → HomePageDocument
 *   projects.ts             → ProjectDocument[]
 *   pages/services-index.ts → ServicesIndexPageDocument
 *   services/registry.ts    → ServicePageContent map
 *
 * To integrate Sanity or Payload
 * ------------------------------
 * 1. Keep `types/*` as the schema contract
 * 2. Replace adapters under `lib/content/source/` to fetch from the CMS
 * 3. Optionally keep this folder as seed/fixtures for local/dev
 * 4. Leave templates and components unchanged
 *
 * Do not import seed modules from components — use `@/lib/content`.
 */
