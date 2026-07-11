import type { ServiceSlug } from "./services";

/**
 * Shared project / case-study document.
 * Referenced by the homepage and (later) service related-project fields.
 */
export type ProjectDocument = {
  id: string;
  title: string;
  summary: string;
  category: string;
  image: string;
  href: string;
  imageAlt?: string;
  featured?: boolean;
  /** Optional links back to related services. */
  serviceSlugs?: ServiceSlug[];
};
