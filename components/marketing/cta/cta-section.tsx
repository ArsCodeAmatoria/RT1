import { CtaSection as LibraryCtaSection } from "@/components/library";
import type { HomeCtaContent } from "@/types";

type CtaSectionProps = {
  content: HomeCtaContent;
};

function HomeCtaSection({ content }: CtaSectionProps) {
  return (
    <LibraryCtaSection
      id="contact-cta"
      eyebrow={content.eyebrow}
      headline={content.headline}
      description={content.description}
      cta={content.cta}
    />
  );
}

export { HomeCtaSection as CtaSection };
export type { CtaSectionProps };
