import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * Visually hidden text for screen readers.
 */
function VisuallyHidden({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "absolute size-px overflow-hidden whitespace-nowrap border-0 p-0",
        "[clip:rect(0,0,0,0)]",
        className,
      )}
      {...props}
    />
  );
}

/**
 * Skip link for keyboard users — place as the first focusable element in the body.
 */
function SkipToContent({
  href = "#main-content",
  children = "Skip to content",
  className,
  ...props
}: React.ComponentProps<"a">) {
  return (
    <a
      href={href}
      className={cn(
        "bg-primary text-primary-foreground focus:ring-ring fixed left-4 top-4 z-[100] rounded-md px-4 py-2 text-sm font-medium",
        "translate-y-[-200%] opacity-0 transition focus:translate-y-0 focus:opacity-100 focus:outline-none focus:ring-2",
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}

export { VisuallyHidden, SkipToContent };
