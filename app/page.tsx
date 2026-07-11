import type { Metadata } from "next";

import {
  CtaSection,
  HeroSection,
  IndustriesSection,
  ProcessSection,
  ProjectsSection,
  ServicesSection,
  StatsSection,
} from "@/components/marketing";
import { JsonLd } from "@/components/seo";
import { getHomePage } from "@/lib/content";
import { buildMetadata, webPageJsonLd } from "@/lib/seo";

const page = getHomePage();

export const metadata: Metadata = buildMetadata({
  title: page.seo.title,
  description: page.seo.description,
  path: "/",
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          title: page.seo.title,
          description: page.seo.description,
          path: "/",
        })}
      />
      <HeroSection content={page.hero} />
      <ServicesSection
        header={page.services.header}
        items={page.services.items}
      />
      <StatsSection header={page.stats.header} items={page.stats.items} />
      <ProjectsSection
        header={page.projects.header}
        items={page.projects.items}
      />
      <IndustriesSection
        header={page.industries.header}
        items={page.industries.items}
      />
      <ProcessSection
        header={page.process.header}
        steps={page.process.steps}
      />
      <CtaSection content={page.cta} />
    </>
  );
}
