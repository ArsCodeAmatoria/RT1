import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const textVariants = cva("text-body", {
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
    },
    tone: {
      default: "text-foreground",
      secondary: "text-foreground-secondary",
      muted: "text-foreground-muted",
      steel: "text-steel",
      primary: "text-primary",
      accent: "text-accent",
    },
    weight: {
      regular: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
    },
  },
  defaultVariants: {
    size: "base",
    tone: "secondary",
    weight: "regular",
  },
});

export type TextProps = React.ComponentProps<"p"> &
  VariantProps<typeof textVariants> & {
    as?: "p" | "span" | "div";
  };

/**
 * Inter body text with secondary gray as the default reading tone.
 */
function Text({
  className,
  size,
  tone,
  weight,
  as: Comp = "p",
  ...props
}: TextProps) {
  return (
    <Comp
      data-slot="text"
      className={cn(textVariants({ size, tone, weight }), className)}
      {...props}
    />
  );
}

export { Text, textVariants };
