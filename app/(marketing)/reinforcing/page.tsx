import type { Metadata } from "next";

import {
  Container,
  PageHeader,
  Section,
} from "@/components/library";
import { JsonLd } from "@/components/seo";
import { Text } from "@/components/design-system/text";
import { getReinforcingPage } from "@/lib/content";
import { routes } from "@/lib/constants/routes";
import { buildMetadata, webPageJsonLd } from "@/lib/seo";

const page = getReinforcingPage();

export const metadata: Metadata = buildMetadata({
  title: page.seo.title,
  description: page.seo.description,
  path: routes.reinforcing,
});

export default function ReinforcingPage() {
  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          title: page.seo.title,
          description: page.seo.description,
          path: routes.reinforcing,
        })}
      />
      <PageHeader
        eyebrow={page.header.eyebrow}
        title={page.header.title}
        description={page.header.description}
        breadcrumbs={[
          { label: "Home", href: routes.home },
          { label: "Reinforcing" },
        ]}
        primaryCta={page.header.primaryCta}
        secondaryCta={page.header.secondaryCta}
      />

      <Section density="spacious" aria-labelledby="reinforcing-heading">
        <Container className="max-w-3xl">
          <h2 id="reinforcing-heading" className="sr-only">
            Reinforcing details
          </h2>
          {page.body.map((paragraph) => (
            <Text key={paragraph} size="lg" className="mt-4 first:mt-0">
              {paragraph}
            </Text>
          ))}
          {page.bullets ? (
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {page.bullets.map((item) => (
                <li
                  key={item.title}
                  className="rounded-xl border border-border-subtle bg-card p-5"
                >
                  <h3 className="font-display text-lg font-semibold tracking-tight text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground-secondary">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          ) : null}
          {page.contactNote ? (
            <Text size="sm" className="mt-10 text-foreground-muted">
              {page.contactNote}
            </Text>
          ) : null}
        </Container>
      </Section>
    </>
  );
}
