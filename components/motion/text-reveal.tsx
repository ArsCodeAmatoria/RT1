"use client";

import { motion, useReducedMotion } from "framer-motion";
import * as React from "react";

import {
  textRevealContainer,
  textRevealLine,
  textRevealWord,
  viewportOnce,
} from "@/lib/animations";
import { cn } from "@/lib/utils";

type TextRevealProps = {
  children: string;
  className?: string;
  /** Line mask (headlines) or word stagger (body). */
  mode?: "lines" | "words";
  as?: "h1" | "h2" | "h3" | "p" | "span";
};

/**
 * Subtle text reveal via masked lines or staggered words.
 * Visible text stays in the accessibility tree (no aria-hidden / aria-label split).
 */
function TextReveal({
  children,
  className,
  mode = "lines",
  as: Tag = "span",
}: TextRevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <Tag className={className}>{children}</Tag>;
  }

  if (mode === "words") {
    const words = children.split(/\s+/).filter(Boolean);

    return (
      <motion.span
        className={cn("inline", className)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={textRevealContainer}
      >
        {words.map((word, index) => (
          <motion.span
            key={`${word}-${index}`}
            className="mr-[0.28em] inline-block last:mr-0"
            variants={textRevealWord}
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    );
  }

  const lines = children.split("\n").filter(Boolean);

  return (
    <motion.span
      className={cn("block", className)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={textRevealContainer}
    >
      {lines.map((line, index) => (
        <span
          key={`${line}-${index}`}
          className="block overflow-hidden py-[0.05em]"
        >
          <motion.span className="block" variants={textRevealLine}>
            {line}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

export { TextReveal };
