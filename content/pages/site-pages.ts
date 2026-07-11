import { CAREERS_EMAIL, CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/constants/site";
import { routes } from "@/lib/constants/routes";
import type { ContentSeo, ContentSectionHeader } from "@/types/content";
import type { ServicesIndexPageDocument } from "@/types/pages";

export type TeamMember = {
  name: string;
  role: string;
  email?: string;
  phone?: string;
  bio?: string;
};

export type ProjectsPageDocument = {
  seo: ContentSeo;
  header: ContentSectionHeader & {
    primaryCta?: { label: string; href: string };
    secondaryCta?: { label: string; href: string };
  };
  featured: ContentSectionHeader;
  portfolio: ContentSectionHeader;
  groups: Array<{
    title: string;
    description?: string;
    names: string[];
  }>;
  note?: string;
  cta: {
    eyebrow?: string;
    headline: string;
    description?: string;
    cta: { label: string; href: string };
  };
};

export type TeamPageDocument = {
  seo: ContentSeo;
  header: ContentSectionHeader;
  members: TeamMember[];
  departments: TeamMember[];
};

export type SimplePageDocument = {
  seo: ContentSeo;
  header: ContentSectionHeader & {
    primaryCta?: { label: string; href: string };
    secondaryCta?: { label: string; href: string };
  };
  body: string[];
  bullets?: Array<{ title: string; description: string }>;
  contactNote?: string;
};

export const servicesIndexPage: ServicesIndexPageDocument = {
  seo: {
    title: "Services",
    description:
      "Concrete formwork, crane operations and rigging, reinforcing, project management, property development, equipment rental, and training from Ridgetechone.",
  },
  header: {
    eyebrow: "Capabilities",
    title: "Services for every phase of the build.",
    description:
      "A focused set of construction disciplines — from formwork and crane operations to reinforcing, development, equipment rental, and upcoming training.",
    breadcrumbs: [
      { label: "Home", href: routes.home },
      { label: "Services" },
    ],
    primaryCta: { label: "Contact us", href: routes.contact },
  },
};

export const projectsPage: ProjectsPageDocument = {
  seo: {
    title: "Projects",
    description:
      "Current, upcoming, and completed Ridgetechone projects across cranes & rigging and formwork in Metro Vancouver.",
  },
  header: {
    eyebrow: "Portfolio",
    title: "Built across Metro Vancouver.",
    description:
      "A working portfolio of crane, rigging, and formwork programs — from healthcare and institutional sites to high-rise residential.",
    primaryCta: { label: "Discuss a project", href: routes.contact },
    secondaryCta: { label: "Our services", href: routes.services },
  },
  featured: {
    eyebrow: "Featured",
    title: "Selected work.",
    description:
      "A snapshot of programs that show the range of Ridgetechone delivery.",
  },
  portfolio: {
    eyebrow: "Directory",
    title: "Full project list.",
    description:
      "Current, upcoming, and completed work across our core disciplines.",
  },
  groups: [
    {
      title: "Cranes & Rigging",
      description: "Tower crane operations, lifts, and site support.",
      names: [
        "110 West 4th",
        "177 West Pender",
        "Abcellera",
        "Alt-C",
        "Arbutus",
        "Ascent",
        "Austin West",
        "CC4",
        "Century",
        "Claridge",
        "Eclipse",
        "Elmwood",
        "Emery",
        "Executive",
        "First United",
        "Flamingo",
        "Harlo",
        "Hawksley",
        "Kaslo",
        "Lark",
        "Lennox",
        "Moody Yards",
        "Oakridge",
        "Perla",
        "Renfrew South",
        "Renfrew North",
        "River District Parcel 26",
        "Riviera",
        "Robinsons Parkside Collection",
        "St. Paul’s Hospital",
        "Slate",
        "Smith & Farrow",
        "Soco",
        "SOL",
        "Standard",
        "UBC Carey College",
        "UBC Conservatory",
        "UBC Lelem",
      ],
    },
    {
      title: "Formwork",
      description: "Concrete formwork on multi-residential and mixed-use builds.",
      names: [
        "1780 Fir",
        "550 Drake",
        "Foster Martin Tower 3",
        "KGC",
        "Solo 4",
      ],
    },
  ],
  note: "Featured photography represents sample categories from this portfolio.",
  cta: {
    eyebrow: "Next build",
    headline: "Have a site that needs crane or formwork support?",
    description:
      "Tell us about schedule, access, and scope — we’ll help you plan the right crew and equipment.",
    cta: { label: "Contact us", href: routes.contact },
  },
};

export const teamPage: TeamPageDocument = {
  seo: {
    title: "Our Team",
    description:
      "Meet the Ridgetechone leadership and support team — construction, crane, and operations experts.",
  },
  header: {
    eyebrow: "People",
    title: "Our team.",
    description:
      "Experienced leaders in construction, crane operations, and project delivery.",
  },
  members: [
    {
      name: "Chris",
      role: "Owner / Chief Executive Officer",
      email: "chris@ridgetechone.com",
      phone: "(604) 335-9216",
      bio: "Chris has been in the construction industry for 15+ years, honing his expertise through many large-scale commercial and multi-dwelling residential projects prior to founding Ridgetechone. He specializes in project management and crane services.",
    },
    {
      name: "Jade",
      role: "Chief Operating Officer",
      email: "jade@ridgetechone.com",
      phone: "(604) 335-9216",
      bio: "Prior to joining Ridgetechone, Jade worked in the legal field for 13 years where she played a pivotal role at a law firm, honing her skills in process improvement. As part of the operations management team, she spearheaded initiatives to streamline workflows, enhance productivity and reduce costs.",
    },
    {
      name: "Tyler",
      role: "Crane Manager / Senior Supervisor",
      email: "tyler@ridgetechone.com",
      phone: "(250) 589-9216",
      bio: "Tyler is a highly experienced Red Seal Tower Crane Operator with approximately 25 years of expertise. As Crane Supervisor, he ensures operators are thoroughly trained and well-supported — promoting safety, efficiency, and excellence in all crane operations.",
    },
    {
      name: "Andrew",
      role: "Construction Manager",
      email: "andrew@ridgetechone.com",
      phone: "(604) 551-5327",
      bio: "Andrew has over 20 years of experience in construction, spanning superintendent roles, project management, estimating, and site logistics. His leadership ensures projects are delivered with precision, efficiency, and lasting value.",
    },
  ],
  departments: [
    {
      name: "Payroll",
      role: "Operations",
      email: "payroll@ridgetechone.com",
      phone: CONTACT_PHONE,
    },
    {
      name: "Accounting",
      role: "Operations",
      email: "accounting@ridgetechone.com",
      phone: CONTACT_PHONE,
    },
    {
      name: "Safety",
      role: "Operations",
      email: "safety@ridgetechone.com",
      phone: CONTACT_PHONE,
    },
  ],
};

export const careersPage: SimplePageDocument = {
  seo: {
    title: "Careers",
    description:
      "Interested in joining Ridgetechone? Email your resume to careers@ridgetechone.com.",
  },
  header: {
    eyebrow: "Careers",
    title: "Careers.",
    description: "Interested in joining our team?",
    primaryCta: {
      label: "Email your resume",
      href: `mailto:${CAREERS_EMAIL}`,
    },
  },
  body: [
    `Please e-mail your resume to ${CAREERS_EMAIL}.`,
    "We’re always interested in meeting skilled operators, ironworkers, and construction professionals who share our commitment to safety and craft.",
  ],
};

export const contactPage: SimplePageDocument = {
  seo: {
    title: "Contact",
    description:
      "Contact Ridgetechone Construction and Development Corp. — Burnaby, BC. info@ridgetechone.com · (604) 335-9216.",
  },
  header: {
    eyebrow: "Contact",
    title: "Contact us.",
    description:
      "To help us best serve your inquiry, please leave a detailed message and how you wish to be contacted. You may also e-mail or call us.",
    primaryCta: { label: "Email us", href: `mailto:${CONTACT_EMAIL}` },
    secondaryCta: { label: "Call (604) 335-9216", href: "tel:+16043359216" },
  },
  body: [
    "Our general response time is 1–2 business days.",
    `${CONTACT_EMAIL} · ${CONTACT_PHONE}`,
    "#505 - 4211 Kingsway, Burnaby, BC V5H 1Z6",
  ],
};

export const equipmentPage: SimplePageDocument = {
  seo: {
    title: "Equipment Rental",
    description:
      "Potain tower cranes, luffing cranes, and crane accessories for rent from Ridgetechone.",
  },
  header: {
    eyebrow: "Equipment",
    title: "Equipment rental.",
    description:
      "Looking for reliable tower crane rentals and high-quality crane accessories for your construction projects?",
    primaryCta: {
      label: "Email Chris",
      href: "mailto:chris@ridgetechone.com",
    },
    secondaryCta: {
      label: "Call (236) 877-1263",
      href: "tel:+12368771263",
    },
  },
  body: [
    "We provide top-tier equipment to ensure efficiency, safety, and seamless operations on site.",
  ],
  bullets: [
    {
      title: "Potain Tower Cranes",
      description: "Trusted tower crane rentals for diverse construction needs.",
    },
    {
      title: "Potain Luffing Crane",
      description: "Luffing capability suited to constrained urban sites.",
    },
    {
      title: "Crane Accessories",
      description: "Accessories that support safe, efficient lifting operations.",
    },
  ],
  contactNote:
    "For inquiries and quotes, please reach out to Chris at chris@ridgetechone.com or (236) 877-1263.",
};

export const reinforcingPage: SimplePageDocument = {
  seo: {
    title: "Reinforcing",
    description:
      "Ridgetechone Reinforcing — skilled ironworkers delivering quality rebar installation with a safety-first culture.",
  },
  header: {
    eyebrow: "Reinforcing",
    title: "Ridgetechone Reinforcing.",
    description:
      "Our team of skilled ironworkers bring unparalleled experience to every project.",
    primaryCta: {
      label: "Email Chris",
      href: "mailto:chris@ridgetechone.com",
    },
    secondaryCta: {
      label: "View service details",
      href: routes.service.reinforcing,
    },
  },
  body: [
    "At our core, we prioritize quality and safety. Our ironworkers have successfully completed numerous projects, from large-scale infrastructure developments to intricate architectural designs.",
  ],
  bullets: [
    {
      title: "Expertise",
      description:
        "Seasoned professionals who understand the nuances of reinforcing structures and meet the highest standards.",
    },
    {
      title: "Commitment to safety",
      description:
        "Safety is non-negotiable. We adhere to rigorous protocols, safeguarding both our workers and the community.",
    },
  ],
  contactNote:
    "For inquiries, collaboration opportunities, or project consultations, reach out to Chris at chris@ridgetechone.com or (236) 877-1263.",
};
