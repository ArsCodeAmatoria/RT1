import {
  Container,
  ProjectCard,
  Section,
  SectionHeader,
} from "@/components/library";
import { Stagger, StaggerItem } from "@/components/motion";
import type { ContentSectionHeader, ProjectDocument } from "@/types";

type ProjectsSectionProps = {
  header: ContentSectionHeader;
  items: ProjectDocument[];
};

function ProjectsSection({ header, items }: ProjectsSectionProps) {
  return (
    <Section id="projects" density="spacious" aria-labelledby="projects-heading">
      <Container>
        <SectionHeader
          titleId="projects-heading"
          eyebrow={header.eyebrow}
          title={header.title}
          description={header.description}
        />

        <Stagger className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {items.map((project, index) => (
            <StaggerItem key={project.id} className="h-full">
              <ProjectCard
                title={project.title}
                summary={project.summary}
                category={project.category}
                image={project.image}
                href={project.href}
                imageAlt={project.imageAlt ?? project.title}
                priority={index === 0}
              />
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}

export { ProjectsSection };
export type { ProjectsSectionProps };
