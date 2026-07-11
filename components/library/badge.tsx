import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "text-technical inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-[0.12em] transition-rt",
  {
    variants: {
      tone: {
        neutral: "border-border bg-surface text-foreground-secondary",
        primary: "border-primary/30 bg-primary-muted text-primary",
        accent: "border-accent/30 bg-accent-muted text-accent",
        steel: "border-border bg-concrete text-steel",
      },
    },
    defaultVariants: {
      tone: "neutral",
    },
  },
);

export interface BadgeProps
  extends React.ComponentProps<"span">,
    VariantProps<typeof badgeVariants> {}

/**
 * Compact status / category label.
 */
function Badge({ className, tone, ...props }: BadgeProps) {
  return (
    <span
      data-slot="badge"
      className={cn(badgeVariants({ tone }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
