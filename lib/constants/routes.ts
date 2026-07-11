/**
 * Canonical application routes.
 */

import { SERVICE_SLUGS, type ServiceSlug } from "@/types/services";

export { SERVICE_SLUGS };
export type { ServiceSlug };

/** Build a service detail path. Adding services does not require route file changes. */
export function servicePath(slug: ServiceSlug | string) {
  return `/services/${slug}` as const;
}

export const routes = {
  home: "/",
  projects: "/projects",
  team: "/team",
  reinforcing: "/reinforcing",
  equipment: "/equipment",
  services: "/services",
  careers: "/careers",
  contact: "/contact",
  training: "/services/training",
  platform: {
    root: "/training",
    courses: "/training/courses",
    dashboard: "/training/dashboard",
  },
  service: {
    formwork: servicePath("concrete-formwork"),
    craneRigging: servicePath("crane-rigging"),
    reinforcing: servicePath("reinforcing"),
    projectManagement: servicePath("project-management"),
    propertyDevelopment: servicePath("property-development"),
    equipmentRental: servicePath("equipment-rental"),
    training: servicePath("training"),
  },
} as const;

export type AppRoute =
  | (typeof routes)[Exclude<keyof typeof routes, "platform" | "service">]
  | (typeof routes.platform)[keyof typeof routes.platform]
  | (typeof routes.service)[keyof typeof routes.service]
  | ReturnType<typeof servicePath>;
