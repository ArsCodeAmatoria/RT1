import { Stagger, StaggerItem } from "@/components/motion";
import type { ProcessStep } from "@/types";
import { cn } from "@/lib/utils";

export type TimelineStep = ProcessStep;

export interface TimelineProps {
  steps: TimelineStep[];
  className?: string;
  /** Optional technical label prefix, e.g. "Phase". */
  metaLabel?: string;
}

/**
 * Responsive process timeline — horizontal on large screens, stacked on small.
 */
function Timeline({ steps, className, metaLabel = "Phase" }: TimelineProps) {
  return (
    <Stagger
      className={cn(
        "relative grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8",
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute top-[1.15rem] right-0 left-0 hidden h-px bg-gradient-to-r from-transparent via-border-strong to-transparent lg:block"
      />

      {steps.map((item, index) => (
        <StaggerItem key={item.step} className="relative">
          <div className="flex items-center gap-4 lg:flex-col lg:items-start">
            <span className="relative z-[1] flex size-9 items-center justify-center rounded-full border border-border bg-background font-mono text-xs text-accent">
              {item.step}
            </span>
            {index < steps.length - 1 ? (
              <span
                aria-hidden
                className="h-px flex-1 bg-border-strong lg:hidden"
              />
            ) : null}
          </div>

          <h3 className="font-display mt-6 text-xl font-semibold tracking-tight text-foreground">
            {item.title}
          </h3>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-foreground-secondary">
            {item.description}
          </p>
          <p className="mt-4 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-foreground-muted">
            {metaLabel} {item.step}
          </p>
        </StaggerItem>
      ))}
    </Stagger>
  );
}

export { Timeline };
