import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const eyebrowVariants = cva(
  "text-technical inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em]",
  {
    variants: {
      tone: {
        secondary: "text-foreground-secondary",
        primary: "text-primary",
        accent: "text-accent",
        steel: "text-steel",
      },
    },
    defaultVariants: {
      tone: "secondary",
    },
  },
);

export type EyebrowProps = React.ComponentProps<"p"> &
  VariantProps<typeof eyebrowVariants> & {
    withDot?: boolean;
  };

/**
 * Small uppercase label — section markers and system status.
 */
function Eyebrow({
  className,
  tone,
  withDot = false,
  children,
  ...props
}: EyebrowProps) {
  return (
    <p
      data-slot="eyebrow"
      className={cn(eyebrowVariants({ tone }), className)}
      {...props}
    >
      {withDot ? (
        <span
          aria-hidden
          className={cn(
            "size-1.5 shrink-0 rounded-full",
            tone === "accent" && "bg-accent",
            tone === "primary" && "bg-primary",
            tone === "steel" && "bg-steel",
            (!tone || tone === "secondary") && "bg-foreground-secondary/50",
          )}
        />
      ) : null}
      {children}
    </p>
  );
}

export { Eyebrow, eyebrowVariants };
