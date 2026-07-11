"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

import type { NavItem } from "@/types";
import { durations, easings } from "@/lib/animations";
import { cn } from "@/lib/utils";

export type NavLinkProps = {
  item: NavItem;
  className?: string;
  onNavigate?: () => void;
  /** Larger touch targets for mobile drawer. */
  size?: "desktop" | "mobile";
};

function isActivePath(pathname: string, href: string) {
  if (href.startsWith("mailto:") || href.startsWith("http")) return false;
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function NavLink({ item, className, onNavigate, size = "desktop" }: NavLinkProps) {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();
  const href = item.href ?? "#";
  const active = !item.disabled && Boolean(item.href) && isActivePath(pathname, href);
  const upcoming = item.upcoming || item.disabled;

  const shared = cn(
    "relative rounded-md outline-none transition-colors duration-[var(--duration-base)] ease-[var(--ease-out-expo)]",
    "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    size === "desktop" &&
      "px-1 py-2 text-[0.8125rem] font-medium tracking-wide text-foreground-secondary hover:text-foreground",
    size === "mobile" &&
      "font-display block w-full px-1 py-3 text-3xl font-semibold tracking-tight text-foreground",
    active && "text-foreground",
    upcoming && "cursor-not-allowed text-foreground-muted",
    className,
  );

  if (upcoming || !item.href) {
    return (
      <span
        className={cn(shared, "inline-flex items-center gap-2")}
        aria-disabled="true"
        title={item.description ?? "Coming soon"}
      >
        {item.title}
        {upcoming ? (
          <span className="text-technical text-[0.6rem] uppercase tracking-[0.14em] text-foreground-muted">
            Soon
          </span>
        ) : null}
      </span>
    );
  }

  return (
    <Link
      href={item.href}
      onClick={onNavigate}
      className={shared}
      aria-current={active ? "page" : undefined}
    >
      {item.title}
      {size === "desktop" ? (
        <span className="absolute inset-x-1 -bottom-0.5 h-px" aria-hidden>
          {active ? (
            <motion.span
              layoutId="nav-active-indicator"
              className="absolute inset-0 bg-primary/80"
              transition={
                prefersReducedMotion
                  ? { duration: 0 }
                  : { duration: durations.base, ease: easings.outExpo }
              }
            />
          ) : null}
        </span>
      ) : null}
    </Link>
  );
}

export { NavLink, isActivePath };
