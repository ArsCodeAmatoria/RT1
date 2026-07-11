import { Container, Section } from "@/components/library";

/**
 * Lightweight route loading state for marketing pages.
 */
export default function Loading() {
  return (
    <Section
      density="spacious"
      className="pt-[calc(var(--header-height)+4rem)]"
      aria-busy="true"
      aria-live="polite"
    >
      <Container>
        <div className="mx-auto max-w-xl space-y-4">
          <div className="h-3 w-24 animate-pulse rounded bg-elevated" />
          <div className="h-10 w-3/4 animate-pulse rounded-lg bg-elevated" />
          <div className="h-4 w-full animate-pulse rounded bg-elevated" />
          <div className="h-4 w-5/6 animate-pulse rounded bg-elevated" />
        </div>
      </Container>
    </Section>
  );
}
