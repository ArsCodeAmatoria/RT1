import { siteConfig } from "@/lib/content/source/local";
import type { SiteConfig } from "@/types";

/** Global site settings document. */
export function getSiteConfig(): SiteConfig {
  return siteConfig;
}
