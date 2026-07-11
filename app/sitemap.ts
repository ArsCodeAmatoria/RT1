import type { MetadataRoute } from "next";

import { routes } from "@/lib/constants/routes";
import { SITE_URL } from "@/lib/constants/site";
import { getAllServiceSlugs, getServicePath } from "@/lib/content";

/**
 * Public marketing routes + every service detail page.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const core = [
    { path: routes.home, priority: 1, changeFrequency: "weekly" as const },
    { path: routes.services, priority: 0.9, changeFrequency: "weekly" as const },
    { path: routes.projects, priority: 0.85, changeFrequency: "monthly" as const },
    { path: routes.team, priority: 0.8, changeFrequency: "monthly" as const },
    { path: routes.reinforcing, priority: 0.8, changeFrequency: "monthly" as const },
    { path: routes.equipment, priority: 0.8, changeFrequency: "monthly" as const },
    { path: routes.careers, priority: 0.7, changeFrequency: "monthly" as const },
    { path: routes.contact, priority: 0.85, changeFrequency: "yearly" as const },
  ];

  const entries: MetadataRoute.Sitemap = core.map((item) => ({
    url: new URL(item.path, SITE_URL).toString(),
    lastModified,
    changeFrequency: item.changeFrequency,
    priority: item.priority,
  }));

  for (const slug of getAllServiceSlugs()) {
    entries.push({
      url: new URL(getServicePath(slug), SITE_URL).toString(),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.75,
    });
  }

  return entries;
}
