import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const technicalVariants = cva("text-technical tabular-nums", {
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
    },
    tone: {
      default: "text-foreground",
      secondary: "text-foreground-secondary",
      muted: "text-foreground-muted",
      primary: "text-primary",
      accent: "text-accent",
      steel: "text-steel",
    },
  },
  defaultVariants: {
    size: "sm",
    tone: "secondary",
  },
});

export type TechnicalProps = React.ComponentProps<"span"> &
  VariantProps<typeof technicalVariants>;

/**
 * IBM Plex Mono readouts for metrics, codes, and technical labels.
 */
function Technical({ className, size, tone, ...props }: TechnicalProps) {
  return (
    <span
      data-slot="technical"
      className={cn(technicalVariants({ size, tone }), className)}
      {...props}
    />
  );
}

export { Technical, technicalVariants };
