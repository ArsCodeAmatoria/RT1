import Link from "next/link";
import type { LucideIcon } from "lucide-react";

import { Badge } from "@/components/library/badge";
import { Card } from "@/components/library/card";
import type { ServiceIconName } from "@/types/services";
import { serviceIcons } from "@/lib/icons";
import { cn } from "@/lib/utils";

export interface ServiceCardProps {
  title: string;
  description: string;
  /** Lucide component or serializable icon key from content. */
  icon: LucideIcon | ServiceIconName;
  href?: string;
  comingSoon?: boolean;
  comingSoonLabel?: string;
  className?: string;
}

/**
 * Capability / service tile — Server Component with CSS hover elevation.
 */
function ServiceCard({
  title,
  description,
  icon,
  href,
  comingSoon = false,
  comingSoonLabel = "Coming Soon",
  className,
}: ServiceCardProps) {
  const Icon = typeof icon === "string" ? serviceIcons[icon] : icon;

  const body = (
    <>
      <div className="flex items-start justify-between gap-4">
        <span className="inline-flex size-11 items-center justify-center rounded-xl border border-border bg-surface text-accent transition-rt group-hover:border-accent/40 group-hover:text-accent-hover">
          <Icon className="size-5" aria-hidden />
        </span>
        {comingSoon ? <Badge tone="primary">{comingSoonLabel}</Badge> : null}
      </div>
      <h3 className="font-display mt-8 text-xl font-semibold tracking-tight text-foreground">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-foreground-secondary">
        {description}
      </p>
    </>
  );

  const classes = cn(
    "group relative block h-full p-6 md:p-7",
    "transition-[border-color,background-color,transform] duration-[var(--duration-base)] ease-[var(--ease-out-expo)]",
    "hover:-translate-y-1 hover:border-border-strong hover:bg-elevated",
    comingSoon && "opacity-90",
    className,
  );

  if (comingSoon || !href) {
    return (
      <Card variant="default" padding="none" className={classes}>
        {body}
      </Card>
    );
  }

  return (
    <Card variant="default" padding="none" className="h-full">
      <Link href={href} className={classes}>
        {body}
      </Link>
    </Card>
  );
}

export { ServiceCard };
