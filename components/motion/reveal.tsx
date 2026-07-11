"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import * as React from "react";

import {
  fadeIn,
  fadeUp,
  reducedMotionVariants,
  softRise,
  staggerContainer,
  staggerItem,
  viewportOnce,
} from "@/lib/animations";
import { cn } from "@/lib/utils";

type MotionDivProps = HTMLMotionProps<"div"> & {
  className?: string;
};

type FadeInProps = MotionDivProps & {
  /** Visual treatment. Defaults to subtle slide-up. */
  variant?: "fade" | "up" | "rise";
};

const fadeVariants = {
  fade: fadeIn,
  up: fadeUp,
  rise: softRise,
} as const;

/**
 * Scroll reveal. Respects prefers-reduced-motion.
 */
function FadeIn({
  className,
  children,
  variant = "up",
  ...props
}: FadeInProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={prefersReducedMotion ? reducedMotionVariants : fadeVariants[variant]}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * Alias for upward slide reveal — clearer intent at call sites.
 */
function SlideUp(props: MotionDivProps) {
  return <FadeIn variant="up" {...props} />;
}

/**
 * Staggered reveal container for lists and feature grids.
 */
function Stagger({ className, children, ...props }: MotionDivProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={prefersReducedMotion ? reducedMotionVariants : staggerContainer}
      {...props}
    >
      {children}
    </motion.div>
  );
}

function StaggerItem({ className, children, ...props }: MotionDivProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      variants={prefersReducedMotion ? reducedMotionVariants : staggerItem}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export { FadeIn, SlideUp, Stagger, StaggerItem };
