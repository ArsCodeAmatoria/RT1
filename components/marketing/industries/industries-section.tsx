import { Heading } from "@/components/design-system/heading";
import { Text } from "@/components/design-system/text";
import {
  Container,
  Section,
  SectionHeader,
} from "@/components/library";
import { Stagger, StaggerItem } from "@/components/motion";
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
      aria-labelledby="industries-heading"
    >
      <Container>
        <SectionHeader
          titleId="industries-heading"
          eyebrow={header.eyebrow}
          title={header.title}
          description={header.description}
        />

        <Stagger
          className="mt-10 grid border-t border-l border-border-subtle sm:grid-cols-2 lg:grid-cols-3"
          role="list"
          aria-label="Sectors"
        >
          {items.map((industry, index) => {
            const number = String(index + 1).padStart(2, "0");

            return (
              <StaggerItem
                key={industry.title}
                role="listitem"
                className="border-b border-r border-border-subtle p-6 md:p-7"
              >
                <span className="font-mono text-[0.65rem] tracking-[0.16em] text-foreground-muted">
                  {number}
                </span>
                <Heading as="h3" size="h4" className="mt-4 text-xl sm:text-2xl">
                  {industry.title}
                </Heading>
                <Text size="sm" className="mt-3 max-w-xs text-foreground-secondary">
                  {industry.description}
                </Text>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Container>
    </Section>
  );
}

export { IndustriesSection };
export type { IndustriesSectionProps };
