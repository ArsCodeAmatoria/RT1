"use client";

import Link from "next/link";

import { SITE_NAME } from "@/lib/constants/site";
import { routes } from "@/lib/constants/routes";
import { cn } from "@/lib/utils";

export type NavLogoProps = {
  className?: string;
  /** Compact mark-only treatment for dense layouts. */
  compact?: boolean;
  onNavigate?: () => void;
};

function NavLogo({ className, onNavigate }: NavLogoProps) {
  return (
    <Link
      href={routes.home}
      onClick={onNavigate}
      className={cn(
        "group inline-flex items-center rounded-md outline-none",
        "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className,
      )}
      aria-label={`${SITE_NAME} home`}
    >
      <span className="font-display text-xl font-bold tracking-tight text-foreground sm:text-2xl">
        RIDGETECHONE
      </span>
    </Link>
  );
}

export { NavLogo };
