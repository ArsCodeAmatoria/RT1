import * as React from "react";

import { SkipToContent } from "@/components/layout/a11y";
import { SiteFooter } from "@/components/marketing";
import { PageTransition } from "@/components/motion";
import { SiteHeader } from "@/components/navigation";
import { cn } from "@/lib/utils";

type SiteShellProps = {
  children: React.ReactNode;
  className?: string;
  /** Override default site header. Pass `null` to hide. */
  header?: React.ReactNode | null;
  /** Override default site footer. Pass `null` to hide. */
  footer?: React.ReactNode | null;
};

/**
 * Application chrome wrapper. Keeps landmark structure consistent
 * across marketing and future platform routes.
 */
function SiteShell({
  children,
  className,
  header = <SiteHeader />,
  footer = <SiteFooter />,
}: SiteShellProps) {
  return (
    <div className={cn("relative flex min-h-dvh flex-col", className)}>
      <SkipToContent />
      {header}
      <main id="main-content" className="flex-1 outline-none" tabIndex={-1}>
        <PageTransition>{children}</PageTransition>
      </main>
      {footer}
    </div>
  );
}

export { SiteShell };
export type { SiteShellProps };
