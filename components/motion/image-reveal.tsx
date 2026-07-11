"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import * as React from "react";

import {
  imageReveal,
  reducedMotionVariants,
  viewportImage,
} from "@/lib/animations";
import { cn } from "@/lib/utils";

type ImageRevealProps = HTMLMotionProps<"div"> & {
  className?: string;
  /** Scale/clip intensity — keep subtle for performance. */
  children: React.ReactNode;
};

/**
 * Clip + scale image reveal on scroll. Transform/clip-path only.
 */
function ImageReveal({ className, children, ...props }: ImageRevealProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={cn("overflow-hidden", className)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportImage}
      variants={prefersReducedMotion ? reducedMotionVariants : imageReveal}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export { ImageReveal };
