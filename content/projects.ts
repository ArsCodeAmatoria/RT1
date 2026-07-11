import { routes, servicePath } from "@/lib/constants/routes";
import type { ProjectDocument } from "@/types/projects";

/**
 * Featured projects for cards + service related links.
 * Full name lists live on the projects page document in `content/pages/site-pages.ts`.
 */
export const projects: ProjectDocument[] = [
  {
    id: "st-pauls",
    title: "St. Paul’s Hospital",
    summary:
      "Crane and rigging support on a landmark healthcare program in Metro Vancouver.",
    category: "Cranes & Rigging",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "High-rise construction site with tower crane against the sky",
    href: routes.service.craneRigging,
    featured: true,
    serviceSlugs: ["crane-rigging", "project-management"],
  },
  {
    id: "foster-martin",
    title: "Foster Martin Tower 3",
    summary:
      "Formwork delivery supporting a multi-residential tower program.",
    category: "Formwork",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Concrete formwork and construction crews on a high-rise site",
    href: servicePath("concrete-formwork"),
    featured: true,
    serviceSlugs: ["concrete-formwork", "reinforcing"],
  },
  {
    id: "ubc-carey",
    title: "UBC Carey College",
    summary:
      "Crane operations supporting institutional construction on the UBC campus.",
    category: "Cranes & Rigging",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Construction crane and steel structure on an institutional site",
    href: routes.service.craneRigging,
    featured: true,
    serviceSlugs: ["crane-rigging"],
  },
  {
    id: "oakridge",
    title: "Oakridge",
    summary:
      "Crane and construction support on a major mixed-use redevelopment.",
    category: "Cranes & Rigging",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Modern urban towers under construction",
    href: routes.service.craneRigging,
    featured: true,
    serviceSlugs: ["crane-rigging", "property-development"],
  },
  {
    id: "solo-4",
    title: "Solo 4",
    summary: "Formwork services on a multi-residential construction program.",
    category: "Formwork",
    image:
      "https://images.unsplash.com/photo-1590642916589-592b7855a643?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Residential tower construction with scaffolding and formwork",
    href: servicePath("concrete-formwork"),
    featured: false,
    serviceSlugs: ["concrete-formwork"],
  },
  {
    id: "kgc",
    title: "KGC",
    summary: "Formwork delivery for a complex urban construction site.",
    category: "Formwork",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112c4e5190?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Engineers reviewing plans on a construction site",
    href: servicePath("concrete-formwork"),
    featured: false,
    serviceSlugs: ["concrete-formwork", "reinforcing"],
  },
  {
    id: "river-district",
    title: "River District Parcel 26",
    summary:
      "Crane and construction support within a large-scale community development.",
    category: "Cranes & Rigging",
    image:
      "https://images.unsplash.com/photo-1590274853856-f27e2dbbbc36?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Large residential construction site with multiple towers",
    href: routes.service.craneRigging,
    featured: false,
    serviceSlugs: ["crane-rigging", "property-development"],
  },
];

export const projectsById: Record<string, ProjectDocument> = Object.fromEntries(
  projects.map((project) => [project.id, project]),
);
