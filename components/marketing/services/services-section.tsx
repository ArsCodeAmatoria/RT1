import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Heading } from "@/components/design-system/heading";
import { Text } from "@/components/design-system/text";
import {
  Container,
  Section,
  SectionHeader,
} from "@/components/library";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";
import { routes } from "@/lib/constants/routes";
import type { ContentSectionHeader, ServiceCardItem } from "@/types";
import { cn } from "@/lib/utils";

type ServicesSectionProps = {
  header: ContentSectionHeader;
  items: ServiceCardItem[];
};

function ServicesSection({ header, items }: ServicesSectionProps) {
  return (
    <Section id="services" density="spacious" aria-labelledby="services-heading">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.25fr)] lg:gap-16 xl:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeader
              titleId="services-heading"
              eyebrow={header.eyebrow}
              title={header.title}
              description={header.description}
            />
            <FadeIn transition={{ delay: 0.15 }} className="mt-8">
              <Link
                href={routes.services}
                className="group inline-flex items-center gap-2 text-sm font-medium text-primary outline-none transition-rt hover:text-primary-hover focus-visible:ring-2 focus-visible:ring-ring"
              >
                View all services
                <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </FadeIn>
          </div>

          <Stagger
            className="border-t border-border-subtle"
            role="list"
            aria-label="Services"
          >
            {items.map((service, index) => {
              const number = String(index + 1).padStart(2, "0");
              const upcoming = Boolean(service.comingSoon);
              const rowClass = cn(
                "group grid grid-cols-[3rem_1fr_auto] items-start gap-4 border-b border-border-subtle py-6 md:grid-cols-[4rem_1fr_auto] md:gap-6 md:py-7",
                "outline-none transition-colors duration-[var(--duration-base)] ease-[var(--ease-out-expo)]",
                !upcoming && "hover:bg-white/[0.02] focus-visible:bg-white/[0.02]",
                upcoming && "opacity-70",
              );

              const body = (
                <>
                  <span className="font-mono text-[0.7rem] tracking-[0.16em] text-foreground-muted md:pt-1.5">
                    {number}
                  </span>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-3">
                      <Heading as="h3" size="h4" className="text-xl sm:text-2xl">
                        {service.title}
                      </Heading>
                      {upcoming ? (
                        <span className="font-mono text-[0.6rem] uppercase tracking-[0.14em] text-primary">
                          Soon
                        </span>
                      ) : null}
                    </div>
                    <Text
                      size="sm"
                      className="mt-2 max-w-xl text-foreground-secondary"
                    >
                      {service.description}
                    </Text>
                  </div>
                  <span
                    className={cn(
                      "mt-1 inline-flex size-9 items-center justify-center rounded-full border border-border text-foreground-muted transition-rt",
                      !upcoming &&
                        "group-hover:border-primary/50 group-hover:text-primary",
                    )}
                    aria-hidden
                  >
                    <ArrowUpRight className="size-4" />
                  </span>
                </>
              );

              return (
                <StaggerItem key={service.title} role="listitem">
                  {upcoming || !service.href ? (
                    <div className={rowClass} aria-disabled="true">
                      {body}
                    </div>
                  ) : (
                    <Link href={service.href} className={rowClass}>
                      {body}
                    </Link>
                  )}
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </Container>
    </Section>
  );
}

export { ServicesSection };
export type { ServicesSectionProps };
