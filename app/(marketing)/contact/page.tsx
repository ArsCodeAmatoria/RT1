import type { Metadata } from "next";

import {
  Container,
  PageHeader,
  Section,
} from "@/components/library";
import { JsonLd } from "@/components/seo";
import { Text } from "@/components/design-system/text";
import { getContactPage, getSiteConfig } from "@/lib/content";
import { routes } from "@/lib/constants/routes";
import { buildMetadata, webPageJsonLd } from "@/lib/seo";

const page = getContactPage();
const site = getSiteConfig();

export const metadata: Metadata = buildMetadata({
  title: page.seo.title,
  description: page.seo.description,
  path: routes.contact,
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          title: page.seo.title,
          description: page.seo.description,
          path: routes.contact,
          type: "ContactPage",
        })}
      />
      <PageHeader
        eyebrow={page.header.eyebrow}
        title={page.header.title}
        description={page.header.description}
        breadcrumbs={[
          { label: "Home", href: routes.home },
          { label: "Contact" },
        ]}
        primaryCta={page.header.primaryCta}
        secondaryCta={page.header.secondaryCta}
      />

      <Section density="spacious" aria-labelledby="contact-details-heading">
        <Container className="max-w-2xl">
          <h2
            id="contact-details-heading"
            className="font-display text-2xl font-semibold tracking-tight text-foreground"
          >
            Reach us
          </h2>
          {page.body.map((paragraph) => (
            <Text key={paragraph} size="lg" className="mt-4">
              {paragraph}
            </Text>
          ))}
          <div className="mt-10 space-y-2 text-sm text-foreground-secondary">
            <p>{site.legalName}</p>
            <p>
              {site.address.line1}
              <br />
              {site.address.line2}
            </p>
            <p>
              <a
                href={site.phoneHref}
                className="outline-none hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
              >
                {site.phone}
              </a>
            </p>
            <p>
              <a
                href={`mailto:${site.links.email}`}
                className="outline-none hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
              >
                {site.links.email}
              </a>
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
