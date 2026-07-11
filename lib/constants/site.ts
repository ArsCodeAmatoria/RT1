export const SITE_NAME = "Ridgetechone";
export const SITE_LEGAL_NAME = "Ridgetechone Construction and Development Corp.";
export const SITE_SHORT_NAME = "RT1";
export const SITE_TAGLINE = "Empowering development, building a better future.";
export const SITE_DESCRIPTION =
  "Ridgetechone delivers concrete formwork, crane operations, rigging, rebar installation, project management, property development, equipment rental, and field training across Metro Vancouver.";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://ridgetechone.com";

export const SITE_LOCALE = "en_CA";

export const CONTACT_EMAIL = "info@ridgetechone.com";
export const CAREERS_EMAIL = "careers@ridgetechone.com";
export const CONTACT_PHONE = "(604) 335-9216";
export const CONTACT_PHONE_HREF = "tel:+16043359216";
export const EQUIPMENT_CONTACT_EMAIL = "chris@ridgetechone.com";
export const EQUIPMENT_CONTACT_PHONE = "(236) 877-1263";
export const EQUIPMENT_CONTACT_PHONE_HREF = "tel:+12368771263";

export const SITE_ADDRESS = {
  line1: "#505 - 4211 Kingsway",
  line2: "Burnaby, BC V5H 1Z6",
  country: "Canada",
};

export const SOCIAL_LINKS = {
  linkedin:
    "https://www.linkedin.com/company/ridgetechone-construction-and-development/",
  instagram: "https://www.instagram.com/ridgetechoneconstruction/",
} as const;
