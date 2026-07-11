import { routes, servicePath } from "@/lib/constants/routes";
import { CONTACT_EMAIL, CONTACT_PHONE_HREF } from "@/lib/constants/site";
import type { ServicePageContent, ServiceSlug } from "@/types/services";

const contactHref = `mailto:${CONTACT_EMAIL}`;
const callHref = CONTACT_PHONE_HREF;

function baseCta(topic: string) {
  return {
    eyebrow: "Get in touch",
    headline: `Let’s talk about ${topic}.`,
    description:
      "Share your schedule, site constraints, and scope. We’ll respond within 1–2 business days.",
    cta: { label: "Contact Ridgetechone", href: routes.contact },
  } as const;
}

/**
 * Service pages aligned to Ridgetechone Construction and Development Corp.
 * Training is an added offering beyond the original site.
 */
export const servicesRegistry: Record<ServiceSlug, ServicePageContent> = {
  "concrete-formwork": {
    slug: "concrete-formwork",
    title: "Concrete Formwork",
    summary:
      "World-class formwork engineering solutions that enhance safety, productivity, and project-specific requirements.",
    icon: "layers",
    order: 1,
    hero: {
      eyebrow: "Services",
      headline: "Concrete formwork built for the job.",
      description:
        "We deliver high-efficiency formwork services to construction sites — engineered for safety, productivity, and the unique demands of each project.",
      primaryCta: { label: "Start a conversation", href: routes.contact },
      secondaryCta: { label: "View projects", href: routes.projects },
    },
    overview: {
      title: "Overview",
      body: "Our formwork practice pairs engineering rigor with field execution. From planning through pour, we deliver formwork solutions that keep crews productive and structures on true.",
      highlights: [
        "Project-specific engineering",
        "High-efficiency site delivery",
        "Safety-first installation",
      ],
    },
    capabilities: {
      title: "Capabilities",
      items: [
        {
          title: "Formwork engineering",
          description:
            "Solutions tailored to geometry, schedule, and site constraints.",
        },
        {
          title: "System installation",
          description:
            "Experienced crews that set, strip, and cycle formwork with precision.",
        },
        {
          title: "Productivity planning",
          description:
            "Sequencing that keeps pours moving without compromising quality.",
        },
        {
          title: "Site coordination",
          description:
            "Close alignment with general contractors, trades, and crane teams.",
        },
      ],
    },
    technology: {
      title: "Approach",
      items: [
        {
          title: "Engineered systems",
          description: "Formwork methods selected for the structure and schedule.",
        },
        {
          title: "Field verification",
          description: "Checks that protect geometry before concrete is placed.",
        },
        {
          title: "Cycle efficiency",
          description: "Repeatable setups that reduce idle time between pours.",
        },
      ],
    },
    benefits: {
      title: "Benefits",
      items: [
        {
          title: "Safer sites",
          description: "Protocols and practices that protect crews and neighbors.",
        },
        {
          title: "Faster cycles",
          description: "Efficient formwork that supports aggressive schedules.",
        },
        {
          title: "Reliable results",
          description: "Formwork delivery matched to project-specific requirements.",
        },
      ],
    },
    relatedProjectIds: ["foster-martin", "solo-4", "kgc"],
    relatedServices: ["crane-rigging", "reinforcing", "project-management"],
    cta: baseCta("formwork"),
    seo: {
      title: "Concrete Formwork",
      description:
        "High-efficiency concrete formwork engineering and installation from Ridgetechone.",
    },
  },

  "crane-rigging": {
    slug: "crane-rigging",
    title: "Crane Operators & Rigging",
    summary:
      "Skilled tower crane operation and intricate rigging executed with precision and expertise.",
    icon: "crane",
    order: 2,
    hero: {
      eyebrow: "Services",
      headline: "Crane operations and rigging you can trust.",
      description:
        "Whether it’s lifting heavy loads or intricate rigging tasks, our team ensures seamless execution on complex Metro Vancouver sites.",
      primaryCta: { label: "Request crane support", href: routes.contact },
      secondaryCta: { label: "Equipment rental", href: routes.equipment },
    },
    overview: {
      title: "Overview",
      body: "Our crane and rigging crews bring deep tower-crane experience to commercial and multi-dwelling projects. We operate with precision, train operators thoroughly, and keep lifts safe and on schedule.",
      highlights: [
        "Tower crane operations",
        "Complex rigging",
        "Supervisor-backed crews",
      ],
    },
    capabilities: {
      title: "Capabilities",
      items: [
        {
          title: "Tower crane operation",
          description:
            "Red Seal–caliber operators for demanding urban construction sites.",
        },
        {
          title: "Rigging",
          description:
            "Intricate lifts planned and executed with clear communication.",
        },
        {
          title: "Crew supervision",
          description:
            "Senior supervision that keeps operators trained, supported, and safe.",
        },
        {
          title: "Lift coordination",
          description:
            "Scheduling and logistics that keep critical path lifts moving.",
        },
      ],
    },
    technology: {
      title: "Approach",
      items: [
        {
          title: "Safety protocols",
          description: "Non-negotiable standards for every lift and shift.",
        },
        {
          title: "Operator development",
          description: "Ongoing training and support from experienced supervisors.",
        },
        {
          title: "Site logistics",
          description: "Lift plans that respect neighbors, traffic, and schedule.",
        },
      ],
    },
    benefits: {
      title: "Benefits",
      items: [
        {
          title: "Seamless lifts",
          description: "Heavy loads and complex rigging handled with expertise.",
        },
        {
          title: "Safer operations",
          description: "Rigorous protocols that protect crews and the public.",
        },
        {
          title: "Reliable coverage",
          description: "Crews and supervision ready for multi-phase programs.",
        },
      ],
    },
    relatedProjectIds: ["st-pauls", "ubc-carey", "oakridge"],
    relatedServices: ["equipment-rental", "concrete-formwork", "project-management"],
    cta: baseCta("crane and rigging"),
    seo: {
      title: "Crane Operators & Rigging",
      description:
        "Tower crane operation and rigging services from Ridgetechone across Metro Vancouver.",
    },
  },

  reinforcing: {
    slug: "reinforcing",
    title: "Reinforcing",
    summary:
      "Skilled ironworkers delivering meticulous rebar installation for durable, high-strength structures.",
    icon: "rebar",
    order: 3,
    hero: {
      eyebrow: "Services",
      headline: "Reinforcing that holds the structure.",
      description:
        "Rebar is the backbone of any concrete structure. Our ironworkers reinforce for durability, strength, and lasting performance.",
      primaryCta: { label: "Talk reinforcing", href: routes.contact },
      secondaryCta: { label: "Call Chris", href: callHref },
    },
    overview: {
      title: "Overview",
      body: "Ridgetechone Reinforcing brings skilled ironworkers to every project. We prioritize quality and safety across large-scale infrastructure and intricate architectural work.",
      highlights: [
        "Experienced ironworkers",
        "Quality and safety first",
        "Infrastructure to architectural",
      ],
    },
    capabilities: {
      title: "Capabilities",
      items: [
        {
          title: "Rebar installation",
          description:
            "Meticulous placement that reinforces structures for strength and durability.",
        },
        {
          title: "Infrastructure reinforcing",
          description: "Large-scale programs delivered with disciplined crews.",
        },
        {
          title: "Architectural detailing",
          description: "Intricate reinforcing for complex design conditions.",
        },
        {
          title: "Quality control",
          description: "Standards that meet the highest expectations on every pour.",
        },
      ],
    },
    technology: {
      title: "Why choose us",
      items: [
        {
          title: "Expertise",
          description:
            "Seasoned professionals who understand the nuances of reinforcing structures.",
        },
        {
          title: "Commitment to safety",
          description:
            "Rigorous protocols that safeguard workers and the community.",
        },
        {
          title: "Project partnership",
          description:
            "Collaboration from consultation through installation and verification.",
        },
      ],
    },
    benefits: {
      title: "Benefits",
      items: [
        {
          title: "Structural integrity",
          description: "Reinforcing that protects long-term performance.",
        },
        {
          title: "Safer crews",
          description: "Safety culture embedded in every shift.",
        },
        {
          title: "Trusted delivery",
          description: "Ironwork completed to the highest standards.",
        },
      ],
    },
    relatedProjectIds: ["foster-martin", "kgc"],
    relatedServices: ["concrete-formwork", "crane-rigging", "project-management"],
    cta: {
      eyebrow: "Reinforcing",
      headline: "Ready to reinforce your next structure?",
      description:
        "Reach out to Chris for inquiries, collaboration, or project consultations.",
      cta: { label: "Email Chris", href: "mailto:chris@ridgetechone.com" },
    },
    seo: {
      title: "Reinforcing & Rebar Installation",
      description:
        "Skilled ironworkers and rebar installation from Ridgetechone Reinforcing.",
    },
  },

  "project-management": {
    slug: "project-management",
    title: "Project Management",
    summary:
      "From inception to completion — streamlined processes, managed timelines, and successful delivery.",
    icon: "clipboard",
    order: 4,
    hero: {
      eyebrow: "Services",
      headline: "Project management that keeps work moving.",
      description:
        "Our project management team oversees every detail — streamlining processes, managing timelines, and ensuring successful project delivery.",
      primaryCta: { label: "Discuss your project", href: routes.contact },
      secondaryCta: { label: "Meet the team", href: routes.team },
    },
    overview: {
      title: "Overview",
      body: "We manage construction programs with clarity and accountability — coordinating trades, schedules, and site logistics so owners and partners get predictable outcomes.",
      highlights: [
        "End-to-end oversight",
        "Schedule discipline",
        "Field-informed decisions",
      ],
    },
    capabilities: {
      title: "Capabilities",
      items: [
        {
          title: "Program oversight",
          description: "Leadership from inception through completion.",
        },
        {
          title: "Schedule management",
          description: "Timelines managed with realistic, field-proven planning.",
        },
        {
          title: "Estimating & logistics",
          description: "Support spanning estimating, site logistics, and coordination.",
        },
        {
          title: "Stakeholder alignment",
          description: "Clear communication across owners, consultants, and trades.",
        },
      ],
    },
    technology: {
      title: "Approach",
      items: [
        {
          title: "Process improvement",
          description: "Workflows designed to enhance productivity and reduce waste.",
        },
        {
          title: "Site leadership",
          description: "Superintendent-level experience applied to daily decisions.",
        },
        {
          title: "Risk management",
          description: "Early identification of issues while there is still time to act.",
        },
      ],
    },
    benefits: {
      title: "Benefits",
      items: [
        {
          title: "Successful delivery",
          description: "Projects guided to completion with fewer surprises.",
        },
        {
          title: "Clear accountability",
          description: "One team owning coordination from start to finish.",
        },
        {
          title: "Lasting value",
          description: "Precision, efficiency, and outcomes that hold up over time.",
        },
      ],
    },
    relatedProjectIds: ["st-pauls", "oakridge", "ubc-carey"],
    relatedServices: ["concrete-formwork", "crane-rigging", "property-development"],
    cta: baseCta("project management"),
    seo: {
      title: "Project Management",
      description:
        "Construction project management from Ridgetechone — schedules, logistics, and delivery.",
    },
  },

  "property-development": {
    slug: "property-development",
    title: "Property Development",
    summary:
      "Sustainable, functional spaces that enhance communities — beyond construction into development.",
    icon: "building",
    order: 5,
    hero: {
      eyebrow: "Services",
      headline: "Property development with lasting impact.",
      description:
        "Beyond construction, we venture into property development — creating sustainable, functional spaces that enhance communities.",
      primaryCta: { label: "Explore a partnership", href: routes.contact },
      secondaryCta: { label: "Our projects", href: routes.projects },
    },
    overview: {
      title: "Overview",
      body: "Our development vision extends past the build. We pursue projects that create durable value for communities across Metro Vancouver.",
      highlights: [
        "Community-focused vision",
        "Functional design outcomes",
        "Sustainable delivery mindset",
      ],
    },
    capabilities: {
      title: "Capabilities",
      items: [
        {
          title: "Development planning",
          description: "Early-stage thinking that connects site, program, and market.",
        },
        {
          title: "Delivery partnership",
          description: "Construction expertise informing development decisions.",
        },
        {
          title: "Community value",
          description: "Spaces designed to serve people and neighborhoods long-term.",
        },
        {
          title: "Cross-discipline coordination",
          description: "Alignment across design, construction, and operations.",
        },
      ],
    },
    technology: {
      title: "Approach",
      items: [
        {
          title: "Practical innovation",
          description: "Techniques and materials that improve efficiency and quality.",
        },
        {
          title: "Quality standards",
          description: "Development outcomes held to the same bar as our field work.",
        },
        {
          title: "Long-view planning",
          description: "Decisions that protect durability and community fit.",
        },
      ],
    },
    benefits: {
      title: "Benefits",
      items: [
        {
          title: "Better places",
          description: "Functional spaces that strengthen communities.",
        },
        {
          title: "Integrated delivery",
          description: "Development informed by real construction expertise.",
        },
        {
          title: "Trusted partnership",
          description: "A team committed to excellence at every step.",
        },
      ],
    },
    relatedProjectIds: ["oakridge", "river-district"],
    relatedServices: ["project-management", "concrete-formwork", "crane-rigging"],
    cta: baseCta("property development"),
    seo: {
      title: "Property Development",
      description:
        "Property development from Ridgetechone — sustainable, functional spaces for communities.",
    },
  },

  "equipment-rental": {
    slug: "equipment-rental",
    title: "Equipment Rental",
    summary:
      "Tower crane rentals and high-quality crane accessories for efficient, safe site operations.",
    icon: "truck",
    order: 6,
    hero: {
      eyebrow: "Services",
      headline: "Equipment rental for seamless site operations.",
      description:
        "Reliable Potain tower cranes, luffing cranes, and crane accessories to keep construction projects moving safely and efficiently.",
      primaryCta: { label: "Request a quote", href: "mailto:chris@ridgetechone.com" },
      secondaryCta: { label: "Call Chris", href: "tel:+12368771263" },
    },
    overview: {
      title: "Overview",
      body: "Looking for reliable tower crane rentals and high-quality crane accessories? We provide top-tier equipment to ensure efficiency, safety, and seamless operations on site.",
      highlights: [
        "Potain tower cranes",
        "Potain luffing crane",
        "Crane accessories",
      ],
    },
    capabilities: {
      title: "Our equipment",
      items: [
        {
          title: "Potain Tower Cranes",
          description: "Trusted tower crane rentals for diverse construction needs.",
        },
        {
          title: "Potain Luffing Crane",
          description: "Luffing capability for constrained urban sites.",
        },
        {
          title: "Crane accessories",
          description: "Accessories that support safe, efficient lifting operations.",
        },
        {
          title: "Rental support",
          description: "Quotes and coordination to match equipment to your program.",
        },
      ],
    },
    technology: {
      title: "Support",
      items: [
        {
          title: "Direct contact",
          description: "Reach Chris for inquiries and quotes.",
        },
        {
          title: "Site-fit selection",
          description: "Equipment matched to schedule, reach, and site constraints.",
        },
        {
          title: "Safety focus",
          description: "Rental packages that support safe operations on site.",
        },
      ],
    },
    benefits: {
      title: "Benefits",
      items: [
        {
          title: "Reliable fleet",
          description: "High-quality cranes and accessories when you need them.",
        },
        {
          title: "Faster mobilization",
          description: "Clear quotes and coordination for project timelines.",
        },
        {
          title: "Operational confidence",
          description: "Equipment that supports efficiency and safety.",
        },
      ],
    },
    relatedProjectIds: ["st-pauls", "ubc-carey"],
    relatedServices: ["crane-rigging", "project-management", "training"],
    cta: {
      eyebrow: "Equipment",
      headline: "Need a crane on your site?",
      description:
        "For inquiries and quotes, contact Chris at chris@ridgetechone.com or (236) 877-1263.",
      cta: { label: "Email Chris", href: "mailto:chris@ridgetechone.com" },
    },
    seo: {
      title: "Equipment Rental",
      description:
        "Potain tower crane and luffing crane rentals plus accessories from Ridgetechone.",
    },
  },

  training: {
    slug: "training",
    title: "Training",
    summary:
      "Field-ready training for crane operations, reinforcing, and construction excellence — launching soon.",
    icon: "graduation-cap",
    order: 7,
    status: "coming-soon",
    hero: {
      eyebrow: "Coming soon",
      headline: "Training built for the field.",
      description:
        "We’re building a training platform to develop skilled operators and crews — grounded in the same safety and craft standards that define Ridgetechone sites.",
      primaryCta: { label: "Join the waitlist", href: contactHref },
      secondaryCta: { label: "Our services", href: routes.services },
    },
    overview: {
      title: "Overview",
      body: "Training extends our commitment to excellence beyond active jobsites. The platform will help crews build competence in crane operations, reinforcing practices, and site safety — taught by people who work the work.",
      highlights: [
        "Field-informed curriculum",
        "Safety-first instruction",
        "Operator and crew pathways",
      ],
    },
    capabilities: {
      title: "Planned pathways",
      items: [
        {
          title: "Crane operations",
          description: "Training aligned with real tower-crane site conditions.",
        },
        {
          title: "Reinforcing fundamentals",
          description: "Quality and safety practices for ironwork crews.",
        },
        {
          title: "Site safety",
          description: "Protocols that protect teams, clients, and communities.",
        },
        {
          title: "Supervisor development",
          description: "Leadership skills for safer, more productive crews.",
        },
      ],
    },
    technology: {
      title: "How we’ll teach",
      items: [
        {
          title: "Practitioner-led",
          description: "Instruction from experienced operators and supervisors.",
        },
        {
          title: "Practical scenarios",
          description: "Learning tied to real Metro Vancouver site conditions.",
        },
        {
          title: "Continuous improvement",
          description: "Curriculum that evolves with methods and standards.",
        },
      ],
    },
    benefits: {
      title: "Benefits",
      items: [
        {
          title: "Stronger crews",
          description: "Skills that transfer directly to safer, better work.",
        },
        {
          title: "Shared standards",
          description: "Training that matches how Ridgetechone builds.",
        },
        {
          title: "Career growth",
          description: "Pathways for operators, ironworkers, and supervisors.",
        },
      ],
    },
    relatedProjectIds: [],
    relatedServices: ["crane-rigging", "reinforcing", "equipment-rental"],
    cta: {
      eyebrow: "Early access",
      headline: "Be first when Training launches.",
      description:
        "Tell us which roles and skills you need covered. We’ll notify you as the platform opens.",
      cta: { label: "Contact Ridgetechone", href: contactHref },
    },
    seo: {
      title: "Training (Coming Soon)",
      description:
        "Upcoming field training for crane operations, reinforcing, and construction excellence from Ridgetechone.",
    },
    extensions: {
      waitlistEnabled: true,
    },
  },
};

export const serviceList = Object.values(servicesRegistry).sort(
  (a, b) => (a.order ?? 99) - (b.order ?? 99),
);

export function getServiceHref(slug: ServiceSlug) {
  return servicePath(slug);
}
