import {
  organizationJsonLd,
  websiteJsonLd,
} from "@/lib/seo";
import { JsonLd } from "./json-ld";

/**
 * Global Organization + WebSite schema for the root layout.
 */
export function SiteJsonLd() {
  return <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />;
}

export { JsonLd };
