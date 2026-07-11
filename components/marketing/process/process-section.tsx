import {
  Container,
  Section,
  SectionHeader,
  Timeline,
} from "@/components/library";
import type { ContentSectionHeader, ProcessStep } from "@/types";

type ProcessSectionProps = {
  header: ContentSectionHeader;
  steps: ProcessStep[];
};

function ProcessSection({ header, steps }: ProcessSectionProps) {
  return (
    <Section
      id="process"
      density="spacious"
      className="border-y border-border-subtle bg-surface/30"
      aria-labelledby="process-heading"
    >
      <Container>
        <SectionHeader
          titleId="process-heading"
          eyebrow={header.eyebrow}
          title={header.title}
          description={header.description}
        />

        <div className="mt-16">
          <Timeline steps={steps} />
        </div>
      </Container>
    </Section>
  );
}

export { ProcessSection };
export type { ProcessSectionProps };
