import type { SiteConfig } from "@/types";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_HREF,
  SITE_ADDRESS,
  SITE_DESCRIPTION,
  SITE_LEGAL_NAME,
  SITE_LOCALE,
  SITE_NAME,
  SITE_SHORT_NAME,
  SITE_TAGLINE,
  SITE_URL,
  SOCIAL_LINKS,
} from "@/lib/constants/site";

export const siteConfig: SiteConfig = {
  name: SITE_NAME,
  legalName: SITE_LEGAL_NAME,
  shortName: SITE_SHORT_NAME,
  tagline: SITE_TAGLINE,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  locale: SITE_LOCALE,
  address: SITE_ADDRESS,
  phone: CONTACT_PHONE,
  phoneHref: CONTACT_PHONE_HREF,
  links: {
    linkedin: SOCIAL_LINKS.linkedin,
    instagram: SOCIAL_LINKS.instagram,
    email: CONTACT_EMAIL,
  },
};
