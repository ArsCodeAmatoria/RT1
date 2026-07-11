"use client";

import { motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import * as React from "react";

import { durations, easings } from "@/lib/animations";

type PageTransitionProps = {
  children: React.ReactNode;
};

/**
 * Lightweight enter-only route fade.
 * Opacity-only to avoid layout shift; skipped under reduced-motion.
 */
function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: durations.base,
        ease: easings.outExpo,
      }}
    >
      {children}
    </motion.div>
  );
}

export { PageTransition };
