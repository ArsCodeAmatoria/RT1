"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { usePathname } from "next/navigation";

import type { NavItem } from "@/types";
import { isActivePath } from "@/components/navigation/nav-link";
import { cn } from "@/lib/utils";

export type NavDropdownProps = {
  item: NavItem;
};

function NavDropdown({ item }: NavDropdownProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const menuId = useId();
  const children = item.children ?? [];

  const childActive = children.some(
    (child) => child.href && !child.disabled && isActivePath(pathname, child.href),
  );
  const parentActive =
    childActive ||
    Boolean(item.href && !item.disabled && isActivePath(pathname, item.href));

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div
      ref={rootRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="menu"
        aria-controls={menuId}
        onClick={() => setOpen((value) => !value)}
        className={cn(
          "font-display inline-flex items-center gap-1.5 rounded-md px-1 py-2 text-sm font-bold uppercase tracking-wide outline-none transition-colors",
          "text-foreground hover:text-white",
          "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          parentActive && "text-white",
        )}
      >
        {item.title}
        <svg
          aria-hidden
          viewBox="0 0 12 12"
          className={cn(
            "size-3 opacity-70 transition-transform duration-200",
            open && "rotate-180",
          )}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
        >
          <path d="M2.5 4.5L6 8l3.5-3.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div
        id={menuId}
        role="menu"
        aria-hidden={!open}
        className={cn(
          "absolute left-1/2 top-full z-50 w-52 -translate-x-1/2 pt-2 transition-[opacity,transform,visibility] duration-200",
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-1 opacity-0 pointer-events-none",
        )}
      >
        <ul className="overflow-hidden rounded-xl border border-border bg-elevated/95 py-2 shadow-[0_16px_48px_rgb(0_0_0_/_0.45)] backdrop-blur-xl">
          {children.map((child) => {
            const upcoming = child.upcoming || child.disabled;
            const active =
              Boolean(child.href) &&
              !upcoming &&
              isActivePath(pathname, child.href!);

            if (upcoming || !child.href) {
              return (
                <li key={child.title} role="none">
                  <span
                    role="menuitem"
                    aria-disabled="true"
                    className="flex items-center justify-between px-4 py-2.5 text-sm text-foreground-muted"
                    title={child.description ?? "Coming soon"}
                  >
                    {child.title}
                    <span className="text-technical text-[0.6rem] uppercase tracking-[0.14em]">
                      Soon
                    </span>
                  </span>
                </li>
              );
            }

            return (
              <li key={child.href} role="none">
                <Link
                  role="menuitem"
                  href={child.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block px-4 py-2.5 text-sm text-foreground-secondary outline-none transition-colors",
                    "hover:bg-white/[0.04] hover:text-foreground",
                    "focus-visible:bg-white/[0.04] focus-visible:text-foreground",
                    active && "text-foreground",
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  {child.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export { NavDropdown };
