import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const sectionVariants = cva("w-full", {
  variants: {
    density: {
      compact: "py-10 md:py-12",
      default: "py-14 md:py-18",
      spacious: "py-16 md:py-20 lg:py-24",
    },
  },
  defaultVariants: {
    density: "default",
  },
});

export interface SectionProps
  extends React.ComponentProps<"section">,
    VariantProps<typeof sectionVariants> {}

/**
 * Vertical section rhythm for marketing and product pages.
 */
function Section({ className, density, ...props }: SectionProps) {
  return (
    <section
      data-slot="section"
      className={cn(sectionVariants({ density }), className)}
      {...props}
    />
  );
}

export { Section, sectionVariants };
