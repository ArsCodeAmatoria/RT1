import Link from "next/link";
import type { ReactNode } from "react";

import { Eyebrow } from "@/components/design-system/eyebrow";
import { Heading } from "@/components/design-system/heading";
import { SoftGlow } from "@/components/design-system/soft-glow";
import { Text } from "@/components/design-system/text";
import { Button } from "@/components/library/button";
import { Container } from "@/components/library/container";
import { FadeIn, TextReveal } from "@/components/motion";
import type { LibraryCta } from "@/components/library/types";
import { cn } from "@/lib/utils";

export interface HeroProps {
  eyebrow?: string;
  headline: string;
  description?: string;
  primaryCta?: LibraryCta;
  secondaryCta?: LibraryCta;
  /** Background media layer (video, image, custom). */
  media?: ReactNode;
  /** Scroll cue target / node. */
  scrollTarget?: string;
  scrollLabel?: string;
  headingId?: string;
  className?: string;
  children?: ReactNode;
}

/**
 * Viewport-locked hero shell. Content and media are injected via props.
 */
function Hero({
  eyebrow,
  headline,
  description,
  primaryCta,
  secondaryCta,
  media,
  scrollTarget,
  scrollLabel = "Scroll",
  headingId = "hero-heading",
  className,
  children,
}: HeroProps) {
  return (
    <section
      aria-labelledby={headingId}
      className={cn(
        "relative flex h-dvh max-h-dvh items-center overflow-hidden pt-[var(--header-height)]",
        className,
      )}
    >
      {media}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/55 to-background" />
      <SoftGlow
        tone="primary"
        size="xl"
        className="top-[-10%] left-1/2 -translate-x-1/2 opacity-45"
      />

      <Container className="relative z-[1] flex h-full w-full flex-col justify-center pb-20">
        <div className="max-w-3xl">
          <FadeIn variant="fade">
            {eyebrow ? (
              <Eyebrow withDot tone="primary">
                {eyebrow}
              </Eyebrow>
            ) : null}
          </FadeIn>

          <Heading id={headingId} size="hero" className="mt-4 md:mt-5">
            <TextReveal as="span" mode="lines">
              {headline}
            </TextReveal>
          </Heading>

          {description ? (
            <FadeIn transition={{ delay: 0.12 }} className="mt-4 md:mt-5">
              <Text size="lg" className="max-w-xl text-foreground-secondary">
                <TextReveal as="span" mode="words">
                  {description}
                </TextReveal>
              </Text>
            </FadeIn>
          ) : null}

          {(primaryCta || secondaryCta) && (
            <FadeIn transition={{ delay: 0.2 }}>
              <div className="mt-7 flex flex-wrap items-center gap-3 sm:mt-8 sm:gap-4">
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
            </FadeIn>
          )}

          {children}
        </div>

        {scrollTarget ? (
          <FadeIn
            transition={{ delay: 0.35 }}
            className="absolute inset-x-0 bottom-6 flex justify-center md:bottom-8"
          >
            <a
              href={scrollTarget}
              className="group inline-flex flex-col items-center gap-2 text-foreground-muted outline-none transition-rt hover:text-foreground-secondary focus-visible:ring-2 focus-visible:ring-ring"
              aria-label={`${scrollLabel} to next section`}
            >
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em]">
                {scrollLabel}
              </span>
              <span className="relative flex h-9 w-5 justify-center rounded-full border border-border-strong">
                <span className="mt-2 size-1 animate-bounce rounded-full bg-foreground" />
              </span>
            </a>
          </FadeIn>
        ) : null}
      </Container>
    </section>
  );
}

export { Hero };
