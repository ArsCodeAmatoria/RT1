import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Eyebrow } from "@/components/design-system/eyebrow";
import { ImageReveal } from "@/components/motion";
import { cn } from "@/lib/utils";

export interface ProjectCardProps {
  title: string;
  summary: string;
  category: string;
  image: string;
  href: string;
  imageAlt?: string;
  priority?: boolean;
  className?: string;
}

/**
 * Large photography card — Server Component with CSS hover.
 * ImageReveal remains a client island for scroll animation.
 */
function ProjectCard({
  title,
  summary,
  category,
  image,
  href,
  imageAlt = "",
  priority = false,
  className,
}: ProjectCardProps) {
  return (
    <article
      className={cn(
        "group h-full transition-transform duration-[var(--duration-base)] ease-[var(--ease-out-expo)] hover:-translate-y-1.5",
        className,
      )}
    >
      <Link
        href={href}
        className={cn(
          "relative block h-full overflow-hidden rounded-2xl border border-border-subtle",
          "outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        )}
      >
        <ImageReveal className="relative aspect-[4/5] sm:aspect-[16/11] lg:aspect-[4/5]">
          <Image
            src={image}
            alt={imageAlt || title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-[700ms] ease-[var(--ease-out-expo)] group-hover:scale-[1.04]"
            priority={priority}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </ImageReveal>

        <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
          <Eyebrow tone="steel">{category}</Eyebrow>
          <div className="mt-3 flex items-start justify-between gap-4">
            <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground">
              {title}
            </h3>
            <span
              className="mt-1 inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-border bg-surface/80 text-foreground opacity-0 transition-rt group-hover:opacity-100"
              aria-hidden
            >
              <ArrowUpRight className="size-4" />
            </span>
          </div>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-foreground-secondary">
            {summary}
          </p>
        </div>
      </Link>
    </article>
  );
}

export { ProjectCard };
