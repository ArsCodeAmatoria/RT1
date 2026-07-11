"use client";

import { LayoutGroup } from "framer-motion";

import type { NavItem } from "@/types";
import { NavDropdown } from "@/components/navigation/nav-dropdown";
import { NavLink } from "@/components/navigation/nav-link";
import { cn } from "@/lib/utils";

export type DesktopNavProps = {
  items: NavItem[];
  className?: string;
};

function DesktopNav({ items, className }: DesktopNavProps) {
  return (
    <nav aria-label="Primary" className={cn("hidden lg:block", className)}>
      <LayoutGroup id="desktop-nav">
        <ul className="flex items-center gap-8 xl:gap-10">
          {items.map((item) => (
            <li key={item.title}>
              {item.children?.length ? (
                <NavDropdown item={item} />
              ) : (
                <NavLink item={item} size="desktop" />
              )}
            </li>
          ))}
        </ul>
      </LayoutGroup>
    </nav>
  );
}

export { DesktopNav };
