import {
  Container,
  Section,
  SectionHeader,
  StatisticCard,
} from "@/components/library";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";
import type { ContentSectionHeader, StatItem } from "@/types";

type StatsSectionProps = {
  header: ContentSectionHeader;
  items: StatItem[];
};

function StatsSection({ header, items }: StatsSectionProps) {
  return (
    <Section
      id="why"
      density="spacious"
      className="border-y border-border-subtle bg-surface/40"
      aria-labelledby="why-heading"
    >
      <Container>
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-end lg:gap-20">
          <SectionHeader
            titleId="why-heading"
            eyebrow={header.eyebrow}
            title={header.title}
            description={header.description}
          />

          <FadeIn>
            <Stagger className="grid grid-cols-2 gap-10 sm:gap-12">
              {items.map((stat) => (
                <StaggerItem key={stat.label}>
                  <StatisticCard
                    bare
                    value={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                    label={stat.label}
                  />
                </StaggerItem>
              ))}
            </Stagger>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}

export { StatsSection };
export type { StatsSectionProps };
