import type { ContentCta, ContentSeo } from "./content";

/** Stable service identifiers — add new slugs here as services launch. */
export const SERVICE_SLUGS = [
  "concrete-formwork",
  "crane-rigging",
  "reinforcing",
  "project-management",
  "property-development",
  "equipment-rental",
  "training",
] as const;

export type ServiceSlug = (typeof SERVICE_SLUGS)[number];

export type ServiceIconName =
  | "layers"
  | "crane"
  | "rebar"
  | "clipboard"
  | "building"
  | "truck"
  | "graduation-cap";

export type ServiceStatus = "active" | "coming-soon";

export interface ServiceListItem {
  title: string;
  description: string;
}

/**
 * Canonical service page document.
 */
export interface ServicePageContent {
  slug: ServiceSlug;
  title: string;
  summary: string;
  icon: ServiceIconName;
  status?: ServiceStatus;
  order?: number;

  hero: {
    eyebrow?: string;
    headline: string;
    description: string;
    primaryCta?: ContentCta;
    secondaryCta?: ContentCta;
  };

  overview: {
    title: string;
    body: string;
    highlights?: string[];
  };

  capabilities: {
    title: string;
    description?: string;
    items: ServiceListItem[];
  };

  technology: {
    title: string;
    description?: string;
    items: ServiceListItem[];
  };

  benefits: {
    title: string;
    description?: string;
    items: ServiceListItem[];
  };

  relatedProjectIds: string[];

  cta: {
    eyebrow?: string;
    headline: string;
    description?: string;
    cta: ContentCta;
  };

  seo?: Partial<ContentSeo>;
  relatedServices?: ServiceSlug[];
  extensions?: Record<string, unknown>;
}
