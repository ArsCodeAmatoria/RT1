"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

import { ImageReveal } from "@/components/motion";
import type { LibraryGalleryItem } from "@/components/library/types";
import { useFocusTrap } from "@/hooks/use-focus-trap";
import { useScrollLock } from "@/hooks/use-scroll-lock";
import { durations, easings, overlayTransition } from "@/lib/animations";
import { cn } from "@/lib/utils";

export interface GalleryProps {
  items: LibraryGalleryItem[];
  columns?: 2 | 3 | 4;
  className?: string;
}

/**
 * Responsive image gallery with keyboard-accessible lightbox.
 */
function Gallery({ items, columns = 3, className }: GalleryProps) {
  const prefersReducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const active = activeIndex !== null ? items[activeIndex] : null;
  const open = activeIndex !== null;
  const dialogRef = useFocusTrap<HTMLDivElement>(open);
  useScrollLock(open);

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex]);

  const columnClass = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  }[columns];

  return (
    <>
      <ul className={cn("grid gap-4", columnClass, className)}>
        {items.map((item, index) => (
          <li key={`${item.src}-${index}`}>
            <ImageReveal>
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "group relative block w-full overflow-hidden rounded-xl border border-border-subtle",
                  "aspect-[4/3] outline-none focus-visible:ring-2 focus-visible:ring-ring",
                )}
                aria-label={`Open image: ${item.alt}`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-[700ms] ease-[var(--ease-out-expo)] group-hover:scale-[1.03]"
                />
                {item.caption ? (
                  <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent p-4 text-left text-sm text-foreground opacity-0 transition-rt group-hover:opacity-100">
                    {item.caption}
                  </span>
                ) : null}
              </button>
            </ImageReveal>
          </li>
        ))}
      </ul>

      <AnimatePresence>
        {active ? (
          <motion.div
            key="gallery-lightbox"
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={active.alt}
            tabIndex={-1}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-overlay p-4 outline-none"
            onClick={() => setActiveIndex(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={
              prefersReducedMotion
                ? { duration: durations.fast }
                : overlayTransition
            }
          >
            <button
              type="button"
              data-autofocus
              className="absolute top-4 right-4 rounded-lg bg-surface px-3 py-2 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring"
              onClick={() => setActiveIndex(null)}
            >
              Close
            </button>
            <motion.div
              className="relative max-h-[85dvh] w-full max-w-5xl overflow-hidden rounded-2xl border border-border"
              onClick={(event) => event.stopPropagation()}
              initial={
                prefersReducedMotion ? false : { opacity: 0, y: 12, scale: 0.98 }
              }
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={
                prefersReducedMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: 8, scale: 0.98 }
              }
              transition={{
                duration: prefersReducedMotion ? durations.fast : durations.slow,
                ease: easings.outExpo,
              }}
            >
              <div className="relative aspect-video w-full bg-surface">
                <Image
                  src={active.src}
                  alt={active.alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>
              {active.caption ? (
                <p className="bg-card px-4 py-3 text-sm text-foreground-secondary">
                  {active.caption}
                </p>
              ) : null}
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

export { Gallery };
