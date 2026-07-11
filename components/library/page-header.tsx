import Link from "next/link";
import type { ReactNode } from "react";

import { Eyebrow } from "@/components/design-system/eyebrow";
import { Heading } from "@/components/design-system/heading";
import { Text } from "@/components/design-system/text";
import { Breadcrumbs } from "@/components/library/breadcrumbs";
import { Button } from "@/components/library/button";
import { Container } from "@/components/library/container";
import { Section } from "@/components/library/section";
import { FadeIn, TextReveal } from "@/components/motion";
import type { LibraryBreadcrumbItem, LibraryCta } from "@/components/library/types";
import { cn } from "@/lib/utils";

export interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs?: LibraryBreadcrumbItem[];
  primaryCta?: LibraryCta;
  secondaryCta?: LibraryCta;
  titleId?: string;
  className?: string;
  children?: ReactNode;
}

/**
 * Interior page hero — title, optional breadcrumbs, CTAs, and slot for extras.
 */
function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumbs,
  primaryCta,
  secondaryCta,
  titleId = "page-heading",
  className,
  children,
}: PageHeaderProps) {
  return (
    <Section
      density="compact"
      className={cn(
        "border-b border-border-subtle pt-[calc(var(--header-height)+2.5rem)]",
        className,
      )}
      aria-labelledby={titleId}
    >
      <Container>
        <FadeIn variant="up">
          {breadcrumbs?.length ? (
            <Breadcrumbs items={breadcrumbs} className="mb-8" />
          ) : null}

          {eyebrow ? (
            <Eyebrow withDot tone="primary">
              {eyebrow}
            </Eyebrow>
          ) : null}

          <Heading id={titleId} size="h1" className={cn(eyebrow && "mt-5")}>
            <TextReveal as="span" mode="lines">
              {title}
            </TextReveal>
          </Heading>

          {description ? (
            <Text size="lg" className="mt-5 max-w-2xl">
              {description}
            </Text>
          ) : null}

          {(primaryCta || secondaryCta) && (
            <div className="mt-8 flex flex-wrap gap-3">
              {primaryCta ? (
                <Button asChild size="lg">
                  <Link href={primaryCta.href}>{primaryCta.label}</Link>
                </Button>
              ) : null}
              {secondaryCta ? (
                <Button asChild size="lg" variant="outline">
                  <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
                </Button>
              ) : null}
            </div>
          )}

          {children}
        </FadeIn>
      </Container>
    </Section>
  );
}

export { PageHeader };
