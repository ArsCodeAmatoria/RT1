/**
 * CMS-agnostic content primitives.
 * These shapes should map 1:1 to Sanity/Payload field types later.
 */

/** Call-to-action pair used across pages and sections. */
export type ContentCta = {
  label: string;
  href: string;
};

/** Per-document SEO fields. */
export type ContentSeo = {
  title: string;
  description: string;
  keywords?: string[];
};

/** Reusable section intro block. */
export type ContentSectionHeader = {
  eyebrow?: string;
  title: string;
  description?: string;
};

/** Media asset reference — keep URLs/ids CMS-friendly. */
export type ContentMedia = {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
};

/** Breadcrumb crumb for interior pages. */
export type ContentBreadcrumb = {
  label: string;
  href?: string;
};
