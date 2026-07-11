import type { NavItem, NavSection } from "@/types";
import { routes } from "@/lib/constants/routes";

/** Primary marketing navigation — compact top-level with dropdowns. */
export const mainNavigation: NavItem[] = [
  { title: "Projects", href: routes.projects },
  {
    title: "Services",
    href: routes.services,
    children: [
      { title: "All services", href: routes.services },
      { title: "Reinforcing", href: routes.reinforcing },
      { title: "Equipment Rental", href: routes.equipment },
      {
        title: "Training",
        href: routes.training,
        description: "Tower Crane School open · Rigging courses coming soon",
      },
    ],
  },
  {
    title: "Company",
    children: [
      { title: "Team", href: routes.team },
      { title: "Careers", href: routes.careers },
    ],
  },
  { title: "Contact", href: routes.contact },
];

export const footerNavigation: NavSection[] = [
  {
    title: "Company",
    items: [
      { title: "Team", href: routes.team },
      { title: "Careers", href: routes.careers },
      { title: "Contact", href: routes.contact },
    ],
  },
  {
    title: "Capabilities",
    items: [
      { title: "Services", href: routes.services },
      { title: "Projects", href: routes.projects },
      { title: "Reinforcing", href: routes.reinforcing },
      { title: "Equipment Rental", href: routes.equipment },
      { title: "Training", href: routes.training },
    ],
  },
];

export const platformNavigation: NavItem[] = [
  { title: "Dashboard", href: routes.platform.dashboard },
  { title: "Courses", href: routes.platform.courses },
];

/** Flatten nested nav into leaf links (footer, sitemaps, etc.). */
export function flattenNavigation(items: NavItem[]): NavItem[] {
  const leaves: NavItem[] = [];

  for (const item of items) {
    if (item.children?.length) {
      for (const child of item.children) {
        if (child.href) leaves.push(child);
      }
      continue;
    }
    if (item.href) leaves.push(item);
  }

  return leaves;
}
