import {
  Container,
  Section,
  SectionHeader,
} from "@/components/library";
import { IndustryCard } from "@/components/marketing/industries/industry-card";
import { FadeIn } from "@/components/motion";
import type { ContentSectionHeader, IndustryItem } from "@/types";

type IndustriesSectionProps = {
  header: ContentSectionHeader;
  items: IndustryItem[];
};

function IndustriesSection({ header, items }: IndustriesSectionProps) {
  return (
    <Section
      id="industries"
      density="spacious"
      className="overflow-hidden"
      aria-labelledby="industries-heading"
    >
      <Container>
        <SectionHeader
          titleId="industries-heading"
          eyebrow={header.eyebrow}
          title={header.title}
          description={header.description}
        />
      </Container>

      <FadeIn className="mt-14">
        <div className="mx-auto w-full max-w-[var(--container-max)] px-4 sm:px-6 lg:px-8">
          <div className="-mx-4 flex gap-4 overflow-x-auto px-4 pb-4 [scrollbar-width:thin] sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            {items.map((industry) => (
              <IndustryCard key={industry.title} {...industry} />
            ))}
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}

export { IndustriesSection };
export type { IndustriesSectionProps };
