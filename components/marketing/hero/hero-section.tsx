import { Hero } from "@/components/library";
import { HeroVideo } from "@/components/marketing/hero/hero-video";
import type { HomeHeroContent } from "@/types";

type HeroSectionProps = {
  content: HomeHeroContent;
};

/**
 * Homepage hero — composes library `Hero` with page content.
 */
function HeroSection({ content }: HeroSectionProps) {
  return (
    <Hero
      eyebrow={content.eyebrow}
      headline={content.headline}
      description={content.description}
      primaryCta={content.primaryCta}
      secondaryCta={content.secondaryCta}
      scrollTarget="#services"
      media={<HeroVideo className="absolute inset-0" />}
    />
  );
}

export { HeroSection };
export type { HeroSectionProps };
