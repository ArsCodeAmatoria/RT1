import type { Metadata } from "next";

import {
  Container,
  PageHeader,
  Section,
  ServiceCard,
} from "@/components/library";
import { Stagger, StaggerItem } from "@/components/motion";
import { JsonLd } from "@/components/seo";
import { getServiceCards, getServicesIndexPage } from "@/lib/content";
import { routes } from "@/lib/constants/routes";
import {
  breadcrumbJsonLd,
  buildMetadata,
  offerCatalogJsonLd,
  webPageJsonLd,
} from "@/lib/seo";

const page = getServicesIndexPage();

export const metadata: Metadata = buildMetadata({
  title: page.seo.title,
  description: page.seo.description,
  path: routes.services,
});

export default function ServicesIndexPage() {
  const services = getServiceCards();
  const catalogServices = services
    .filter((service) => service.href && !service.comingSoon)
    .map((service) => ({
      name: service.title,
      description: service.description,
      path: service.href!,
    }));

  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            title: page.seo.title,
            description: page.seo.description,
            path: routes.services,
            type: "CollectionPage",
          }),
          breadcrumbJsonLd(page.header.breadcrumbs ?? []),
          offerCatalogJsonLd({
            name: page.header.title,
            description: page.seo.description,
            path: routes.services,
            services: catalogServices,
          }),
        ]}
      />
      <PageHeader
        eyebrow={page.header.eyebrow}
        title={page.header.title}
        description={page.header.description}
        breadcrumbs={page.header.breadcrumbs}
        primaryCta={page.header.primaryCta}
      />

      <Section density="spacious" aria-labelledby="services-index-heading">
        <Container>
          <h2 id="services-index-heading" className="sr-only">
            All services
          </h2>
          <Stagger className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <StaggerItem key={service.href ?? service.title} className="h-full">
                <ServiceCard {...service} />
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>
    </>
  );
}
