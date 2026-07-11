import type { Metadata } from "next";
import Link from "next/link";

import { Button, Container, Section } from "@/components/library";
import { Heading } from "@/components/design-system/heading";
import { Text } from "@/components/design-system/text";
import { routes } from "@/lib/constants/routes";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Page not found",
  description: "The page you requested could not be found.",
  path: "/404",
  noIndex: true,
});

export default function NotFoundPage() {
  return (
    <Section
      density="spacious"
      className="pt-[calc(var(--header-height)+4rem)]"
      aria-labelledby="not-found-heading"
    >
      <Container className="max-w-xl text-center">
        <p className="font-mono text-sm tracking-[0.18em] text-foreground-muted uppercase">
          404
        </p>
        <Heading id="not-found-heading" size="h1" className="mt-4">
          Page not found
        </Heading>
        <Text size="lg" className="mx-auto mt-5">
          The page you requested doesn&apos;t exist or has moved. Head back home
          or explore our services.
        </Text>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg">
            <Link href={routes.home}>Back home</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href={routes.services}>View services</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}
