import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const containerVariants = cva("mx-auto w-full px-4 sm:px-6 lg:px-8", {
  variants: {
    width: {
      default: "max-w-[var(--container-max)]",
      narrow: "max-w-[var(--container-narrow)]",
      wide: "max-w-[var(--container-wide)]",
      full: "max-w-none",
    },
  },
  defaultVariants: {
    width: "default",
  },
});

export interface ContainerProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof containerVariants> {}

/**
 * Horizontal page gutter + max-width constraint.
 * Use inside sections to keep content aligned across breakpoints.
 */
function Container({ className, width, ...props }: ContainerProps) {
  return (
    <div
      data-slot="container"
      className={cn(containerVariants({ width }), className)}
      {...props}
    />
  );
}

export { Container, containerVariants };
