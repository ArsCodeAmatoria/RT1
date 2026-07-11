import { routes } from "@/lib/constants/routes";
import type { HomePageDocument } from "@/types/home";

/**
 * Homepage document — aligned to ridgetechone.com + Training.
 */
export const homePage: HomePageDocument = {
  seo: {
    title: "Ridgetechone — Empowering development, building a better future",
    description:
      "Concrete formwork, crane operations, rigging, rebar installation, project management, property development, equipment rental, and training from Ridgetechone Construction and Development Corp.",
  },
  hero: {
    eyebrow: "Ridgetechone Construction and Development Corp.",
    headline: "Empowering development, building a better future.",
    description:
      "At Ridgetechone we are committed to empowering development and building a better future. Our multifaceted services cater to diverse construction needs, ensuring excellence at every step.",
    primaryCta: { label: "Contact us", href: routes.contact },
    secondaryCta: { label: "View services", href: routes.services },
    image: "/images/hero.png",
    imageAlt: "Tower crane illustration",
  },
  services: {
    header: {
      eyebrow: "Capabilities",
      title: "Disciplines that carry the build.",
      description:
        "Formwork, crane, reinforcing, and delivery — one standard of safety and craft across every phase.",
    },
  },
  stats: {
    header: {
      eyebrow: "Why choose Ridgetechone?",
      title: "Expertise. Safety. Innovation.",
      description:
        "Seasoned professionals, non-negotiable safety protocols, and a commitment to techniques that drive efficiency and quality.",
    },
    items: [
      { label: "Years of industry leadership", value: 15, suffix: "+" },
      { label: "Crane operations experience", value: 25, suffix: "+" },
      { label: "Safety focus", value: 100, suffix: "%" },
      { label: "Core service lines", value: 7 },
    ],
  },
  projects: {
    header: {
      eyebrow: "Selected work",
      title: "Projects across Metro Vancouver.",
      description:
        "Current, upcoming, and completed programs in cranes & rigging and formwork.",
    },
    projectIds: ["st-pauls", "foster-martin", "ubc-carey", "oakridge"],
  },
  industries: {
    header: {
      eyebrow: "Sectors",
      title: "Where we build.",
      description:
        "Programs across the Lower Mainland — from towers and campuses to critical facilities.",
    },
    items: [
      {
        title: "Multi-residential",
        description: "Towers and mid-rise programs delivered with precision crews.",
        icon: "building-2",
      },
      {
        title: "Commercial",
        description: "Complex urban sites that demand reliable crane and formwork support.",
        icon: "landmark",
      },
      {
        title: "Healthcare",
        description: "Critical facilities where schedule and safety cannot slip.",
        icon: "hard-hat",
      },
      {
        title: "Education",
        description: "Campus and institutional work across UBC and beyond.",
        icon: "factory",
      },
      {
        title: "Infrastructure",
        description: "Reinforcing and construction support for durable public assets.",
        icon: "mountain",
      },
      {
        title: "Mixed-use",
        description: "Development and construction aligned for community outcomes.",
        icon: "zap",
      },
    ],
  },
  process: {
    header: {
      eyebrow: "Method",
      title: "How we deliver.",
      description:
        "A clear sequence from first conversation to completed work — accountable at every step.",
    },
    steps: [
      {
        step: "01",
        title: "Consult",
        description:
          "We align on scope, schedule, and the safety requirements the work demands.",
      },
      {
        step: "02",
        title: "Plan",
        description:
          "Crews, equipment, and sequencing are set before boots hit the ground.",
      },
      {
        step: "03",
        title: "Execute",
        description:
          "Field teams deliver with disciplined methods and continuous coordination.",
      },
      {
        step: "04",
        title: "Deliver",
        description:
          "Verified work, clean handover, and a partner ready for the next phase.",
      },
    ],
  },
  cta: {
    eyebrow: "Next step",
    headline: "Ready to build with Ridgetechone?",
    description:
      "Leave a detailed message and how you wish to be contacted. Our general response time is 1–2 business days.",
    cta: { label: "Contact us", href: routes.contact },
  },
};
