import type { Metadata } from "next";

import {
  Container,
  CtaSection,
  PageHeader,
  ProjectCard,
  Section,
  SectionHeader,
} from "@/components/library";
import { SoftGlow } from "@/components/design-system/soft-glow";
import { Text } from "@/components/design-system/text";
import { ProjectDirectory } from "@/components/marketing/projects/project-directory";
import { Stagger, StaggerItem } from "@/components/motion";
import { JsonLd } from "@/components/seo";
import { getFeaturedProjects, getProjectsPage } from "@/lib/content";
import { routes } from "@/lib/constants/routes";
import { breadcrumbJsonLd, buildMetadata, webPageJsonLd } from "@/lib/seo";

const page = getProjectsPage();
const breadcrumbs = [
  { label: "Home", href: routes.home },
  { label: "Projects" },
];

export const metadata: Metadata = buildMetadata({
  title: page.seo.title,
  description: page.seo.description,
  path: routes.projects,
});

export default function ProjectsPage() {
  const featured = getFeaturedProjects();
  const projectCount = page.groups.reduce(
    (total, group) => total + group.names.length,
    0,
  );

  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            title: page.seo.title,
            description: page.seo.description,
            path: routes.projects,
            type: "CollectionPage",
          }),
          breadcrumbJsonLd(breadcrumbs),
        ]}
      />

      <div className="relative overflow-hidden">
        <SoftGlow
          tone="primary"
          size="xl"
          className="top-[-20%] left-1/2 -translate-x-1/2 opacity-35"
        />
        <PageHeader
          eyebrow={page.header.eyebrow}
          title={page.header.title}
          description={page.header.description}
          breadcrumbs={breadcrumbs}
          primaryCta={page.header.primaryCta}
          secondaryCta={page.header.secondaryCta}
          className="relative border-border-subtle/80"
        >
          <dl className="mt-10 flex flex-wrap gap-8 border-t border-border-subtle pt-8 sm:gap-12">
            <div>
              <dt className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-foreground-muted">
                Portfolio
              </dt>
              <dd className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground">
                {projectCount}
              </dd>
            </div>
            {page.groups.map((group) => (
              <div key={group.title}>
                <dt className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-foreground-muted">
                  {group.title}
                </dt>
                <dd className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground">
                  {group.names.length}
                </dd>
              </div>
            ))}
          </dl>
        </PageHeader>
      </div>

      <Section density="spacious" aria-labelledby="featured-projects-heading">
        <Container>
          <SectionHeader
            titleId="featured-projects-heading"
            eyebrow={page.featured.eyebrow}
            title={page.featured.title}
            description={page.featured.description}
          />
          <Stagger className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {featured.map((project, index) => (
              <StaggerItem key={project.id} className="h-full">
                <ProjectCard
                  title={project.title}
                  summary={project.summary}
                  category={project.category}
                  image={project.image}
                  href={project.href}
                  imageAlt={project.imageAlt ?? project.title}
                  priority={index < 2}
                />
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <Section
        id="portfolio"
        density="spacious"
        className="border-t border-border-subtle"
        aria-labelledby="portfolio-heading"
      >
        <Container>
          <SectionHeader
            titleId="portfolio-heading"
            eyebrow={page.portfolio.eyebrow}
            title={page.portfolio.title}
            description={page.portfolio.description}
          />
          <ProjectDirectory groups={page.groups} className="mt-12" />
          {page.note ? (
            <Text size="sm" className="mt-10 text-foreground-muted">
              {page.note}
            </Text>
          ) : null}
        </Container>
      </Section>

      <CtaSection
        eyebrow={page.cta.eyebrow}
        headline={page.cta.headline}
        description={page.cta.description}
        cta={page.cta.cta}
      />
    </>
  );
}
