"use client";

import Link from "next/link";
import { useId, useState, type ReactNode } from "react";

import type { NavItem } from "@/types";
import { DesktopNav } from "@/components/navigation/desktop-nav";
import { MobileNav } from "@/components/navigation/mobile-nav";
import { MobileNavTrigger } from "@/components/navigation/mobile-nav-trigger";
import { useScrolled } from "@/hooks/use-scrolled";
import { cn } from "@/lib/utils";

export interface NavbarBrand {
  href: string;
  label: string;
  logoSrc?: string;
  logoAlt?: string;
}

export interface NavbarProps {
  items: NavItem[];
  brand: NavbarBrand;
  /** Scroll threshold before glass treatment. */
  glassOffset?: number;
  className?: string;
  /** Optional right-side actions (desktop). */
  actions?: ReactNode;
}

/**
 * Sticky premium navbar — transparent over hero, frosted after scroll.
 * Navigation items are injected via props.
 */
function Navbar({
  items,
  brand,
  glassOffset = 20,
  className,
  actions,
}: NavbarProps) {
  const scrolled = useScrolled(glassOffset);
  const [mobileOpen, setMobileOpen] = useState(false);
  const reactId = useId();
  const mobileNavId = `mobile-navigation-${reactId}`;

  return (
    <>
      <header
        data-slot="navbar"
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow,backdrop-filter,-webkit-backdrop-filter] duration-[var(--duration-slow)] ease-[var(--ease-out-expo)]",
          scrolled
            ? "border-b border-border bg-background/70 shadow-[0_8px_32px_rgb(0_0_0_/_0.28)] backdrop-blur-[18px] backdrop-saturate-[140%]"
            : "border-b border-transparent bg-transparent",
          className,
        )}
      >
        <div className="mx-auto w-full max-w-[var(--container-max)] px-4 sm:px-6 lg:px-8">
          <div className="grid h-[var(--header-height)] grid-cols-[1fr_auto] items-center gap-4 lg:grid-cols-[1fr_auto_1fr]">
            <div className="flex items-center justify-self-start">
              <Link
                href={brand.href}
                className="group inline-flex h-10 items-center rounded-md outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                aria-label={`${brand.label} home`}
              >
                <span className="font-display text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-[1.75rem]">
                  RIDGETECHONE
                </span>
              </Link>
            </div>

            <DesktopNav items={items} className="justify-self-center" />

            <div className="flex h-10 items-center justify-self-end gap-2">
              {actions}
              <MobileNavTrigger
                open={mobileOpen}
                onOpenChange={setMobileOpen}
                controlsId={mobileNavId}
              />
            </div>
          </div>
        </div>
      </header>

      <MobileNav
        id={mobileNavId}
        open={mobileOpen}
        onOpenChange={setMobileOpen}
        items={items}
      />
    </>
  );
}

export { Navbar };
