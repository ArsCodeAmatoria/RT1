import type { ContentCta, ContentSeo, ContentSectionHeader } from "./content";
import type { ServiceIconName } from "./services";

export type IndustryIconName =
  | "landmark"
  | "hard-hat"
  | "building-2"
  | "factory"
  | "zap"
  | "mountain";

export type StatItem = {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
};

export type IndustryItem = {
  title: string;
  description: string;
  icon: IndustryIconName;
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export type ServiceCardItem = {
  title: string;
  description: string;
  icon: ServiceIconName;
  href?: string;
  comingSoon?: boolean;
};

export type HomeHeroContent = {
  eyebrow?: string;
  headline: string;
  description: string;
  primaryCta?: ContentCta;
  secondaryCta?: ContentCta;
};

export type HomeCtaContent = {
  eyebrow?: string;
  headline: string;
  description?: string;
  cta: ContentCta;
};

/**
 * Canonical homepage document.
 * Section lists that belong to other collections use id refs
 * (`projectIds`) so a CMS can resolve relationships later.
 */
export type HomePageDocument = {
  seo: ContentSeo;
  hero: HomeHeroContent;
  services: {
    header: ContentSectionHeader;
  };
  stats: {
    header: ContentSectionHeader;
    items: StatItem[];
  };
  projects: {
    header: ContentSectionHeader;
    /** References `ProjectDocument.id` entries. */
    projectIds: string[];
  };
  industries: {
    header: ContentSectionHeader;
    items: IndustryItem[];
  };
  process: {
    header: ContentSectionHeader;
    steps: ProcessStep[];
  };
  cta: HomeCtaContent;
};

/** Resolved homepage view model for templates (refs expanded). */
export type HomePageContent = Omit<HomePageDocument, "projects" | "services"> & {
  services: {
    header: ContentSectionHeader;
    items: ServiceCardItem[];
  };
  projects: {
    header: ContentSectionHeader;
    items: import("./projects").ProjectDocument[];
  };
};
