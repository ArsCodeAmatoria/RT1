import {
  Container,
  Section,
  SectionHeader,
  ServiceCard,
} from "@/components/library";
import { Stagger, StaggerItem } from "@/components/motion";
import type { ContentSectionHeader, ServiceCardItem } from "@/types";

type ServicesSectionProps = {
  header: ContentSectionHeader;
  items: ServiceCardItem[];
};

function ServicesSection({ header, items }: ServicesSectionProps) {
  return (
    <Section id="services" density="spacious" aria-labelledby="services-heading">
      <Container>
        <SectionHeader
          titleId="services-heading"
          eyebrow={header.eyebrow}
          title={header.title}
          description={header.description}
        />

        <Stagger className="mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {items.map((service) => (
            <StaggerItem key={service.title} className="h-full">
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                href={service.href}
                comingSoon={service.comingSoon}
              />
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}

export { ServicesSection };
export type { ServicesSectionProps };
