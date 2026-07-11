"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";

import type { NavItem } from "@/types";
import { NavLink } from "@/components/navigation/nav-link";
import { NavLogo } from "@/components/navigation/nav-logo";
import { Button } from "@/components/library/button";
import { useFocusTrap } from "@/hooks/use-focus-trap";
import { useScrollLock } from "@/hooks/use-scroll-lock";
import { durations, easings } from "@/lib/animations";
import { routes } from "@/lib/constants/routes";
import { cn } from "@/lib/utils";

export type MobileNavProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  items: NavItem[];
  id: string;
};

function MobileNav({ open, onOpenChange, items, id }: MobileNavProps) {
  const prefersReducedMotion = useReducedMotion();
  const panelRef = useFocusTrap<HTMLDivElement>(open);
  useScrollLock(open);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onOpenChange(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onOpenChange]);

  const close = () => onOpenChange(false);

  let motionIndex = 0;

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          key="mobile-nav"
          ref={panelRef}
          id={id}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          tabIndex={-1}
          className={cn(
            "fixed inset-0 z-[60] flex flex-col bg-background lg:hidden",
            "outline-none",
          )}
          initial={prefersReducedMotion ? { opacity: 0 } : { x: "100%", opacity: 0.6 }}
          animate={prefersReducedMotion ? { opacity: 1 } : { x: 0, opacity: 1 }}
          exit={prefersReducedMotion ? { opacity: 0 } : { x: "100%", opacity: 0.6 }}
          transition={{
            duration: prefersReducedMotion ? durations.fast : durations.slow,
            ease: easings.outExpo,
          }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_80%_0%,rgba(59,158,255,0.14),transparent_55%),radial-gradient(ellipse_50%_40%_at_10%_100%,rgba(125,211,252,0.08),transparent_50%)]"
          />

          <div className="relative flex h-[var(--header-height)] items-center justify-between px-4 sm:px-6">
            <NavLogo onNavigate={close} />
            <button
              type="button"
              data-autofocus
              onClick={close}
              className={cn(
                "inline-flex size-11 items-center justify-center rounded-lg text-foreground",
                "transition-rt hover:bg-white/[0.04]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
              )}
            >
              <span className="sr-only">Close menu</span>
              <svg
                aria-hidden
                viewBox="0 0 24 24"
                className="size-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
              >
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <nav
            aria-label="Mobile primary"
            className="relative flex flex-1 flex-col justify-center overflow-y-auto px-6 pb-10 sm:px-10"
          >
            <ul className="flex flex-col gap-1">
              {items.map((item) => {
                if (item.children?.length) {
                  const groupIndex = motionIndex++;
                  return (
                    <li key={item.title} className="mt-4 first:mt-0">
                      <motion.p
                        className="mb-2 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-foreground-muted"
                        initial={prefersReducedMotion ? false : { opacity: 0, x: 24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: prefersReducedMotion ? 0 : 0.05 + groupIndex * 0.045,
                          duration: durations.slow,
                          ease: easings.outExpo,
                        }}
                      >
                        {item.title}
                      </motion.p>
                      <ul className="flex flex-col gap-1">
                        {item.children.map((child) => {
                          const childIndex = motionIndex++;
                          return (
                            <motion.li
                              key={child.href ?? child.title}
                              initial={
                                prefersReducedMotion ? false : { opacity: 0, x: 24 }
                              }
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                delay: prefersReducedMotion
                                  ? 0
                                  : 0.05 + childIndex * 0.045,
                                duration: durations.slow,
                                ease: easings.outExpo,
                              }}
                            >
                              <NavLink
                                item={child}
                                size="mobile"
                                onNavigate={close}
                                className="text-2xl"
                              />
                            </motion.li>
                          );
                        })}
                      </ul>
                    </li>
                  );
                }

                const index = motionIndex++;
                return (
                  <motion.li
                    key={item.href ?? item.title}
                    initial={prefersReducedMotion ? false : { opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: prefersReducedMotion ? 0 : 0.05 + index * 0.045,
                      duration: durations.slow,
                      ease: easings.outExpo,
                    }}
                  >
                    <NavLink item={item} size="mobile" onNavigate={close} />
                  </motion.li>
                );
              })}
            </ul>

            <motion.div
              className="mt-12 flex flex-col gap-3 sm:flex-row sm:items-center"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: prefersReducedMotion ? 0 : 0.35,
                duration: durations.slow,
                ease: easings.outExpo,
              }}
            >
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href={routes.contact} onClick={close}>
                  Contact
                </Link>
              </Button>
              <p className="text-technical text-foreground-muted text-xs tracking-[0.14em] uppercase sm:ml-2">
                Precision · Safety · Engineering
              </p>
            </motion.div>
          </nav>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export { MobileNav };
