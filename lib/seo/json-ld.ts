import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  SITE_ADDRESS,
  SITE_DESCRIPTION,
  SITE_LEGAL_NAME,
  SITE_NAME,
  SITE_URL,
} from "@/lib/constants/site";
import { getSiteConfig } from "@/lib/content";
import type { ContentBreadcrumb } from "@/types";

type JsonLdPrimitive = string | number | boolean | null;
type JsonLdValue = JsonLdPrimitive | JsonLdObject | JsonLdValue[];
type JsonLdObject = { [key: string]: JsonLdValue };

function absoluteUrl(pathOrUrl: string) {
  if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://")) {
    return pathOrUrl;
  }
  return new URL(pathOrUrl, SITE_URL).toString();
}

export function organizationJsonLd(logoPath = "/icon"): JsonLdObject {
  const site = getSiteConfig();
  const sameAs = [site.links.linkedin, site.links.instagram].filter(
    (value): value is string => Boolean(value),
  );

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_LEGAL_NAME,
    alternateName: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    email: CONTACT_EMAIL,
    telephone: CONTACT_PHONE,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_ADDRESS.line1,
      addressLocality: "Burnaby",
      addressRegion: "BC",
      postalCode: "V5H 1Z6",
      addressCountry: "CA",
    },
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl(logoPath),
      width: 512,
      height: 512,
    },
    image: absoluteUrl(logoPath),
    sameAs,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: CONTACT_PHONE,
        email: CONTACT_EMAIL,
        contactType: "customer service",
        areaServed: "CA",
        availableLanguage: ["English"],
      },
    ],
  };
}

export function websiteJsonLd(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    inLanguage: "en-CA",
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
  };
}

export function webPageJsonLd({
  title,
  description,
  path,
  type = "WebPage",
}: {
  title: string;
  description: string;
  path: string;
  type?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";
}): JsonLdObject {
  const url = absoluteUrl(path);

  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${url}#webpage`,
    url,
    name: title,
    description,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-CA",
  };
}

export function breadcrumbJsonLd(
  items: ContentBreadcrumb[],
): JsonLdObject | null {
  const list = items.filter((item) => item.label);
  if (list.length === 0) return null;

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: list.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: absoluteUrl(item.href) } : {}),
    })),
  };
}

export function serviceJsonLd({
  name,
  description,
  path,
  serviceType,
}: {
  name: string;
  description: string;
  path: string;
  serviceType?: string;
}): JsonLdObject {
  const url = absoluteUrl(path);

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name,
    description,
    url,
    serviceType: serviceType ?? name,
    provider: {
      "@id": `${SITE_URL}/#organization`,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Metro Vancouver",
    },
  };
}

export function offerCatalogJsonLd({
  name,
  description,
  path,
  services,
}: {
  name: string;
  description: string;
  path: string;
  services: Array<{ name: string; description: string; path: string }>;
}): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    "@id": `${absoluteUrl(path)}#catalog`,
    name,
    description,
    url: absoluteUrl(path),
    itemListElement: services.map((service, index) => ({
      "@type": "Offer",
      position: index + 1,
      itemOffered: {
        "@type": "Service",
        name: service.name,
        description: service.description,
        url: absoluteUrl(service.path),
        provider: { "@id": `${SITE_URL}/#organization` },
      },
    })),
  };
}

export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
