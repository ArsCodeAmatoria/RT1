/**
 * Services feature module.
 *
 * Architecture
 * - Content registry: `content/services/registry.ts`
 * - Content API: `@/lib/content`
 * - Template: `components/services/service-page.tsx`
 * - Routes: `app/(marketing)/services` + `app/(marketing)/services/[slug]`
 *
 * To add a service: append a slug to `SERVICE_SLUGS` and an entry in the registry.
 * No new route files are required.
 */

export { ServicePage } from "./service-page";
export type { ServicePageProps } from "./service-page";
export { FeatureGrid } from "./feature-grid";
export type { FeatureGridProps } from "./feature-grid";
