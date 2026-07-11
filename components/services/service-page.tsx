import Link from "next/link";

import { Badge } from "@/components/library/badge";
import {
  Container,
  CtaSection,
  PageHeader,
  ProjectCard,
  Section,
  SectionHeader,
  ServiceCard,
} from "@/components/library";
import { FeatureGrid } from "@/components/services/feature-grid";
import { Stagger, StaggerItem } from "@/components/motion";
import { Text } from "@/components/design-system/text";
import { routes } from "@/lib/constants/routes";
import type { ProjectDocument, ServicePageContent } from "@/types";

export interface ServicePageProps {
  service: ServicePageContent;
  /** Resolved related services (fetched at the route boundary). */
  relatedServices?: ServicePageContent[];
  /** Resolved related projects (fetched at the route boundary). */
  relatedProjects?: ProjectDocument[];
}

/**
 * Scalable service detail template.
 * Content is resolved by the route and passed in — keeps this presentational.
 */
function ServicePage({
  service,
  relatedServices = [],
  relatedProjects = [],
}: ServicePageProps) {
  const comingSoon = service.status === "coming-soon";

  return (
    <>
      <PageHeader
        eyebrow={service.hero.eyebrow ?? "Services"}
        title={service.hero.headline}
        description={service.hero.description}
        breadcrumbs={[
          { label: "Home", href: routes.home },
          { label: "Services", href: routes.services },
          { label: service.title },
        ]}
        primaryCta={service.hero.primaryCta}
        secondaryCta={service.hero.secondaryCta}
      >
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Badge tone={comingSoon ? "primary" : "steel"}>{service.title}</Badge>
          {comingSoon ? <Badge tone="primary">Coming Soon</Badge> : null}
        </div>
      </PageHeader>

      <Section id="overview" density="spacious" aria-labelledby="overview-heading">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-16">
            <SectionHeader
              titleId="overview-heading"
              eyebrow="Overview"
              title={service.overview.title}
              description={service.overview.body}
            />
            {service.overview.highlights?.length ? (
              <ul className="space-y-4 self-center">
                {service.overview.highlights.map((item) => (
                  <li
                    key={item}
                    className="border-border-subtle rounded-xl border bg-card px-5 py-4 text-sm text-foreground-secondary"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </Container>
      </Section>

      <Section
        id="capabilities"
        density="spacious"
        className="border-y border-border-subtle bg-surface/30"
        aria-labelledby="capabilities-heading"
      >
        <Container>
          <SectionHeader
            titleId="capabilities-heading"
            eyebrow="Capabilities"
            title={service.capabilities.title}
            description={service.capabilities.description}
          />
          <FeatureGrid items={service.capabilities.items} />
        </Container>
      </Section>

      <Section id="technology" density="spacious" aria-labelledby="technology-heading">
        <Container>
          <SectionHeader
            titleId="technology-heading"
            eyebrow="Technology"
            title={service.technology.title}
            description={service.technology.description}
          />
          <FeatureGrid items={service.technology.items} columns={3} />
        </Container>
      </Section>

      <Section
        id="benefits"
        density="spacious"
        className="border-y border-border-subtle bg-surface/30"
        aria-labelledby="benefits-heading"
      >
        <Container>
          <SectionHeader
            titleId="benefits-heading"
            eyebrow="Benefits"
            title={service.benefits.title}
            description={service.benefits.description}
          />
          <FeatureGrid items={service.benefits.items} columns={3} />
        </Container>
      </Section>

      {relatedProjects.length > 0 ? (
        <Section
          id="related-projects"
          density="spacious"
          aria-labelledby="related-projects-heading"
        >
          <Container>
            <SectionHeader
              titleId="related-projects-heading"
              eyebrow="Work"
              title="Related projects"
              description="Selected programs where this capability shaped outcomes in the field."
            />
            <Stagger className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {relatedProjects.map((project) => (
                <StaggerItem key={project.id} className="h-full">
                  <ProjectCard
                    title={project.title}
                    summary={project.summary}
                    category={project.category}
                    image={project.image}
                    href={project.href}
                    imageAlt={project.imageAlt ?? project.title}
                  />
                </StaggerItem>
              ))}
            </Stagger>
          </Container>
        </Section>
      ) : (
        <Section density="compact" className="border-y border-border-subtle">
          <Container>
            <Text size="sm" tone="muted">
              Related projects for {service.title} will appear here as case studies are
              published.
            </Text>
          </Container>
        </Section>
      )}

      {relatedServices.length > 0 ? (
        <Section id="related-services" density="spacious" aria-labelledby="related-services-heading">
          <Container>
            <SectionHeader
              titleId="related-services-heading"
              eyebrow="Continue"
              title="Related services"
            />
            <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedServices.map((item) => (
                <StaggerItem key={item.slug} className="h-full">
                  <ServiceCard
                    title={item.title}
                    description={item.summary}
                    icon={item.icon}
                    href={`/services/${item.slug}`}
                    comingSoon={item.status === "coming-soon"}
                  />
                </StaggerItem>
              ))}
            </Stagger>
            <p className="mt-8 text-sm text-foreground-muted">
              Or browse the full{" "}
              <Link
                href={routes.services}
                className="text-foreground underline-offset-4 hover:underline"
              >
                services index
              </Link>
              .
            </p>
          </Container>
        </Section>
      ) : null}

      <CtaSection
        id="contact"
        eyebrow={service.cta.eyebrow}
        headline={service.cta.headline}
        description={service.cta.description}
        cta={service.cta.cta}
      />
    </>
  );
}

export { ServicePage };
