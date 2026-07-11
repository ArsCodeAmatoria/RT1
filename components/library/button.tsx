"use client";

import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { motion, useReducedMotion } from "framer-motion";
import * as React from "react";

import { buttonHover, tapPress } from "@/lib/animations";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium",
    "transition-[color,background-color,box-shadow,opacity] duration-[var(--duration-base)] ease-[var(--ease-out-expo)]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  ].join(" "),
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-glow-primary hover:bg-primary-hover",
        accent:
          "bg-accent text-accent-foreground shadow-glow-accent hover:bg-accent-hover",
        secondary:
          "bg-surface text-foreground border border-border hover:bg-elevated",
        outline:
          "border border-border-strong bg-transparent text-foreground hover:bg-white/[0.04]",
        ghost:
          "text-foreground-secondary hover:bg-white/[0.04] hover:text-foreground",
        link: "text-accent underline-offset-4 hover:underline",
        glass: "glass text-foreground hover:border-border-strong",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-12 rounded-xl px-7 text-base",
        xl: "h-14 rounded-xl px-8 text-base",
        icon: "size-10",
        "icon-sm": "size-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

type ButtonMotionConflictKeys =
  | "onAnimationStart"
  | "onDrag"
  | "onDragStart"
  | "onDragEnd"
  | "onDragEnter"
  | "onDragExit"
  | "onDragLeave"
  | "onDragOver"
  | "onDrop";

export interface ButtonProps
  extends Omit<React.ComponentProps<"button">, ButtonMotionConflictKeys>,
    VariantProps<typeof buttonVariants> {
  /** Render as child element (e.g. Next.js `Link`) while keeping button styles. */
  asChild?: boolean;
}

/**
 * Primary interactive control. Theme-aware via CSS design tokens.
 * Native buttons get subtle Framer Motion hover/press; `asChild` keeps
 * CSS transitions so Slot composition stays clean.
 */
function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const prefersReducedMotion = useReducedMotion();
  const classes = cn(buttonVariants({ variant, size, className }));

  if (asChild) {
    return (
      <Slot
        data-slot="button"
        className={cn(
          classes,
          "transition-transform duration-[var(--duration-fast)] ease-[var(--ease-out-expo)] hover:-translate-y-px active:scale-[0.98]",
        )}
        {...props}
      />
    );
  }

  if (prefersReducedMotion || variant === "link" || variant === "ghost") {
    return <button data-slot="button" className={classes} {...props} />;
  }

  return (
    <motion.button
      data-slot="button"
      className={classes}
      whileHover={buttonHover}
      whileTap={tapPress}
      {...props}
    />
  );
}

export { Button, buttonVariants };
