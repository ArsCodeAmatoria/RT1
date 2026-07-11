import type { Metadata } from "next";

import {
  Container,
  PageHeader,
  Section,
} from "@/components/library";
import { JsonLd } from "@/components/seo";
import { Text } from "@/components/design-system/text";
import { getCareersPage } from "@/lib/content";
import { routes } from "@/lib/constants/routes";
import { buildMetadata, webPageJsonLd } from "@/lib/seo";

const page = getCareersPage();

export const metadata: Metadata = buildMetadata({
  title: page.seo.title,
  description: page.seo.description,
  path: routes.careers,
});

export default function CareersPage() {
  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          title: page.seo.title,
          description: page.seo.description,
          path: routes.careers,
        })}
      />
      <PageHeader
        eyebrow={page.header.eyebrow}
        title={page.header.title}
        description={page.header.description}
        breadcrumbs={[
          { label: "Home", href: routes.home },
          { label: "Careers" },
        ]}
        primaryCta={page.header.primaryCta}
      />

      <Section density="spacious" aria-labelledby="careers-body-heading">
        <Container className="max-w-2xl">
          <h2 id="careers-body-heading" className="sr-only">
            How to apply
          </h2>
          {page.body.map((paragraph) => (
            <Text key={paragraph} size="lg" className="mt-4 first:mt-0">
              {paragraph}
            </Text>
          ))}
        </Container>
      </Section>
    </>
  );
}
