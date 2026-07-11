import { servicePath } from "@/lib/constants/routes";
import { getProjectsByIds } from "@/lib/content/get-projects";
import {
  serviceList,
  servicesRegistry,
} from "@/lib/content/source/local";
import {
  SERVICE_SLUGS,
  type ServiceCardItem,
  type ServicePageContent,
  type ServiceSlug,
} from "@/types";

export { SERVICE_SLUGS, serviceList, servicesRegistry };

export function isServiceSlug(value: string): value is ServiceSlug {
  return (SERVICE_SLUGS as readonly string[]).includes(value);
}

export function getServiceBySlug(slug: string): ServicePageContent | undefined {
  if (!isServiceSlug(slug)) return undefined;
  return servicesRegistry[slug];
}

export function getAllServiceSlugs(): ServiceSlug[] {
  return [...SERVICE_SLUGS];
}

export function getServicePath(slug: ServiceSlug) {
  return servicePath(slug);
}

/** Card-friendly projections for grids and navigation. */
export function getServiceCards(): ServiceCardItem[] {
  return serviceList.map((service) => ({
    title: service.title,
    description: service.summary,
    icon: service.icon,
    href: servicePath(service.slug),
    comingSoon: service.status === "coming-soon",
  }));
}

export function getRelatedServices(slug: ServiceSlug): ServicePageContent[] {
  const current = servicesRegistry[slug];
  return (current.relatedServices ?? [])
    .map((related) => servicesRegistry[related])
    .filter(Boolean);
}

export function getServiceRelatedProjects(slug: ServiceSlug) {
  const current = servicesRegistry[slug];
  return getProjectsByIds(current.relatedProjectIds ?? []);
}
