import type {
  ContentBreadcrumb,
  ContentCta,
  ContentSectionHeader,
  ContentSeo,
} from "./content";

/**
 * Interior / index page documents.
 * Add new page docs here as routes come online (about, contact, …).
 */

export type ServicesIndexPageDocument = {
  seo: ContentSeo;
  header: ContentSectionHeader & {
    primaryCta?: ContentCta;
    secondaryCta?: ContentCta;
    breadcrumbs?: ContentBreadcrumb[];
  };
};

/** Union of known marketing page documents (extensible). */
export type PageDocument = ServicesIndexPageDocument;
