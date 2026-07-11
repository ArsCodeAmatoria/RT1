import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const softGlowVariants = cva("glow-ambient animate-glow-pulse", {
  variants: {
    tone: {
      primary: "glow-primary",
      accent: "glow-accent",
    },
    size: {
      sm: "size-40",
      md: "size-64",
      lg: "size-96",
      xl: "size-[32rem]",
    },
  },
  defaultVariants: {
    tone: "primary",
    size: "lg",
  },
});

export type SoftGlowProps = React.ComponentProps<"div"> &
  VariantProps<typeof softGlowVariants>;

/**
 * Soft ambient lighting orb — place behind hero content.
 */
function SoftGlow({ className, tone, size, ...props }: SoftGlowProps) {
  return (
    <div
      aria-hidden
      data-slot="soft-glow"
      className={cn(softGlowVariants({ tone, size }), className)}
      {...props}
    />
  );
}

export { SoftGlow, softGlowVariants };
