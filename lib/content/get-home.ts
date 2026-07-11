import { homePage } from "@/lib/content/source/local";
import { getProjectsByIds } from "@/lib/content/get-projects";
import { getServiceCards } from "@/lib/content/get-services";
import type { HomePageContent, HomePageDocument } from "@/types";

/** Raw homepage document (refs unresolved). */
export function getHomePageDocument(): HomePageDocument {
  return homePage;
}

/**
 * Resolved homepage view model for templates.
 * Expands service cards and project id refs.
 */
export function getHomePage(): HomePageContent {
  return {
    seo: homePage.seo,
    hero: homePage.hero,
    services: {
      header: homePage.services.header,
      items: getServiceCards(),
    },
    stats: homePage.stats,
    projects: {
      header: homePage.projects.header,
      items: getProjectsByIds(homePage.projects.projectIds),
    },
    industries: homePage.industries,
    process: homePage.process,
    cta: homePage.cta,
  };
}
