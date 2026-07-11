import * as React from "react";

import { Eyebrow } from "@/components/design-system/eyebrow";
import { Heading } from "@/components/design-system/heading";
import { Text } from "@/components/design-system/text";
import { FadeIn, TextReveal } from "@/components/motion";
import { cn } from "@/lib/utils";

export interface SectionHeaderProps {
  /** Small uppercase label above the title. */
  eyebrow?: string;
  /** Primary section heading. */
  title: string;
  /** Optional supporting copy. */
  description?: string;
  align?: "left" | "center";
  tone?: "primary" | "accent" | "secondary" | "steel";
  /** Associates the heading with `aria-labelledby` on the parent section. */
  titleId?: string;
  className?: string;
  children?: React.ReactNode;
}

/**
 * Composable section intro. Pass all copy via props — no hardcoded content.
 */
function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "primary",
  titleId,
  className,
  children,
}: SectionHeaderProps) {
  return (
    <FadeIn
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <Eyebrow
          withDot
          tone={tone}
          className={align === "center" ? "justify-center" : undefined}
        >
          {eyebrow}
        </Eyebrow>
      ) : null}
      <Heading id={titleId} size="h2" className={cn(eyebrow && "mt-5")}>
        <TextReveal as="span" mode="lines">
          {title}
        </TextReveal>
      </Heading>
      {description ? (
        <Text size="lg" className="mt-5">
          {description}
        </Text>
      ) : null}
      {children}
    </FadeIn>
  );
}

export { SectionHeader };
