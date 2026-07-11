import type { ReactNode } from "react";

import type { ContentBreadcrumb, ContentCta } from "@/types/content";
import type { NavItem, NavSection } from "@/types/navigation";

/** @deprecated Prefer `NavItem` from `@/types`. */
export type LibraryLink = NavItem;

/** Call-to-action pair — aliased from content contracts for UI props. */
export type LibraryCta = ContentCta;

/** @deprecated Prefer `NavSection` from `@/types`. */
export type LibraryNavSection = NavSection;

export interface LibraryGalleryItem {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
}

/** @deprecated Prefer `ContentBreadcrumb` from `@/types`. */
export type LibraryBreadcrumbItem = ContentBreadcrumb;

export interface LibraryAccordionItem {
  id: string;
  title: string;
  content: ReactNode;
}
