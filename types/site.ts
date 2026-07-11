export type SiteConfig = {
  name: string;
  legalName: string;
  shortName: string;
  tagline: string;
  description: string;
  url: string;
  locale: string;
  address: {
    line1: string;
    line2: string;
    country: string;
  };
  phone: string;
  phoneHref: string;
  links: {
    linkedin?: string;
    instagram?: string;
    email: string;
  };
};

export type SeoConfig = {
  title: string;
  description: string;
  keywords: string[];
};
