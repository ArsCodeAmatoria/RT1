import Link from "next/link";
import { ChevronRight } from "lucide-react";

import type { LibraryBreadcrumbItem } from "@/components/library/types";
import { cn } from "@/lib/utils";

export interface BreadcrumbsProps {
  items: LibraryBreadcrumbItem[];
  className?: string;
  /** Accessible name for the nav landmark. */
  label?: string;
}

/**
 * Hierarchical page path navigation.
 */
function Breadcrumbs({
  items,
  className,
  label = "Breadcrumb",
}: BreadcrumbsProps) {
  return (
    <nav aria-label={label} className={cn(className)}>
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-foreground-secondary">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={`${item.label}-${index}`} className="inline-flex items-center gap-1.5">
              {index > 0 ? (
                <ChevronRight className="size-3.5 text-foreground-muted" aria-hidden />
              ) : null}
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="rounded-sm outline-none transition-rt hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={cn(isLast && "text-foreground")}
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export { Breadcrumbs };
