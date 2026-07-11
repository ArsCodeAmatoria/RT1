"use client";

import { useEffect } from "react";

import { Button, Container, Section } from "@/components/library";
import { Heading } from "@/components/design-system/heading";
import { Text } from "@/components/design-system/text";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

/**
 * Route-level error UI — preserves site chrome via root layout.
 */
export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Section
      density="spacious"
      className="pt-[calc(var(--header-height)+4rem)]"
      aria-labelledby="error-heading"
    >
      <Container className="max-w-xl text-center">
        <p className="font-mono text-sm tracking-[0.18em] text-foreground-muted uppercase">
          Error
        </p>
        <Heading id="error-heading" size="h1" className="mt-4">
          Something went wrong
        </Heading>
        <Text size="lg" className="mx-auto mt-5">
          An unexpected error occurred. Try again, or return home if the problem
          continues.
        </Text>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Button size="lg" onClick={reset}>
            Try again
          </Button>
        </div>
      </Container>
    </Section>
  );
}
