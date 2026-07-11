import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const headingVariants = cva("text-display text-foreground", {
  variants: {
    size: {
      hero: "text-[length:var(--text-hero)] font-bold tracking-tighter",
      display: "text-5xl font-bold tracking-tight sm:text-6xl lg:text-8xl",
      h1: "text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl",
      h2: "text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl",
      h3: "text-2xl font-bold tracking-tight sm:text-3xl",
      h4: "text-xl font-semibold tracking-tight sm:text-2xl",
      h5: "text-lg font-semibold tracking-tight",
    },
    tone: {
      default: "text-foreground",
      steel: "text-gradient-steel",
      signal: "text-gradient-signal",
    },
  },
  defaultVariants: {
    size: "h1",
    tone: "default",
  },
});

const defaultTag = {
  hero: "h1",
  display: "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
} as const;

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";

export type HeadingProps = Omit<React.ComponentProps<"h1">, "size"> &
  VariantProps<typeof headingVariants> & {
    as?: HeadingTag;
  };

/**
 * Heavy condensed display headings — Oswald, uppercase via `.text-display`.
 */
function Heading({ className, size = "h1", tone, as, ...props }: HeadingProps) {
  const Comp = (as ?? defaultTag[size ?? "h1"]) as HeadingTag;

  return (
    <Comp
      data-slot="heading"
      className={cn(headingVariants({ size, tone }), className)}
      {...props}
    />
  );
}

export { Heading, headingVariants };
