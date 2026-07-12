import type { Metadata, Viewport } from "next";

import {
  SITE_DESCRIPTION,
  SITE_LOCALE,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
} from "@/lib/constants/site";

type BuildMetadataOptions = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  /** When true, title is used as-is (home brand titles). Otherwise uses `%s · Site` template. */
  absoluteTitle?: boolean;
  noIndex?: boolean;
  keywords?: string[];
};

const defaultOgImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: `${SITE_NAME} — ${SITE_TAGLINE}`,
};

const defaultTitle = {
  default: `${SITE_NAME} — ${SITE_TAGLINE}`,
  template: `%s · ${SITE_NAME}`,
};

const isProduction = process.env.VERCEL_ENV
  ? process.env.VERCEL_ENV === "production"
  : process.env.NODE_ENV === "production";

/**
 * Root metadata for the application shell.
 */
export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: defaultTitle,
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  keywords: [
    "Ridgetechone",
    "construction",
    "concrete formwork",
    "crane operations",
    "rigging",
    "rebar",
    "reinforcing",
    "project management",
    "property development",
    "equipment rental",
    "tower crane",
    "Burnaby",
    "Metro Vancouver",
    "training",
  ],
  category: "technology",
  referrer: "origin-when-cross-origin",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: SITE_LOCALE,
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    images: [defaultOgImage.url],
  },
  robots: isProduction
    ? {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-image-preview": "large",
          "max-snippet": -1,
          "max-video-preview": -1,
        },
      }
    : {
        index: false,
        follow: false,
        nocache: true,
      },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const rootViewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#090909" },
    { media: "(prefers-color-scheme: dark)", color: "#090909" },
  ],
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

/**
 * Build page-level metadata while inheriting site defaults.
 * Always sets canonical, Open Graph, and Twitter Card fields.
 */
export function buildMetadata({
  title,
  description = SITE_DESCRIPTION,
  path = "/",
  image = "/opengraph-image",
  absoluteTitle = false,
  noIndex = false,
  keywords,
}: BuildMetadataOptions = {}): Metadata {
  const url = new URL(path, SITE_URL).toString();
  const resolvedTitle =
    title ?? `${SITE_NAME} — ${SITE_TAGLINE}`;
  const ogImage = {
    url: image,
    width: 1200,
    height: 630,
    alt: resolvedTitle,
  };

  const shouldNoIndex = noIndex || !isProduction;

  return {
    title: title
      ? absoluteTitle
        ? { absolute: title }
        : title
      : undefined,
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      locale: SITE_LOCALE,
      siteName: SITE_NAME,
      title: resolvedTitle,
      description,
      url,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description,
      images: [image],
    },
    robots: shouldNoIndex
      ? {
          index: false,
          follow: false,
          nocache: true,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
  };
}
