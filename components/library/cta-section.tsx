import Link from "next/link";
import type { ReactNode } from "react";

import { Eyebrow } from "@/components/design-system/eyebrow";
import { Heading } from "@/components/design-system/heading";
import { SoftGlow } from "@/components/design-system/soft-glow";
import { Text } from "@/components/design-system/text";
import { Button } from "@/components/library/button";
import { Container } from "@/components/library/container";
import { Section, type SectionProps } from "@/components/library/section";
import { FadeIn, TextReveal } from "@/components/motion";
import type { LibraryCta } from "@/components/library/types";
import { cn } from "@/lib/utils";

export interface CtaSectionProps extends Omit<SectionProps, "children"> {
  eyebrow?: string;
  headline: string;
  description?: string;
  cta: LibraryCta;
  headingId?: string;
  children?: ReactNode;
}

/**
 * Premium call-to-action band. Copy and destination are fully prop-driven.
 */
function CtaSection({
  eyebrow,
  headline,
  description,
  cta,
  headingId = "cta-heading",
  className,
  children,
  ...sectionProps
}: CtaSectionProps) {
  return (
    <Section
      density="spacious"
      aria-labelledby={headingId}
      className={className}
      {...sectionProps}
    >
      <Container>
        <FadeIn>
          <div
            className={cn(
              "relative overflow-hidden rounded-3xl border border-border-subtle bg-card px-8 py-16 text-center md:px-16 md:py-24",
            )}
          >
            <SoftGlow
              tone="primary"
              size="lg"
              className="top-[-30%] left-1/2 -translate-x-1/2 opacity-50"
            />
            <SoftGlow
              tone="accent"
              size="md"
              className="right-[-10%] bottom-[-20%] opacity-40"
            />

            <div className="relative z-[1] mx-auto max-w-2xl">
              {eyebrow ? (
                <Eyebrow withDot tone="primary" className="justify-center">
                  {eyebrow}
                </Eyebrow>
              ) : null}
              <Heading id={headingId} size="h2" className="mt-5">
                <TextReveal as="span" mode="lines">
                  {headline}
                </TextReveal>
              </Heading>
              {description ? (
                <Text size="lg" className="mx-auto mt-5 max-w-xl">
                  {description}
                </Text>
              ) : null}
              <div className="mt-10">
                <Button asChild size="lg">
                  <Link href={cta.href}>{cta.label}</Link>
                </Button>
              </div>
              {children}
            </div>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}

export { CtaSection };
