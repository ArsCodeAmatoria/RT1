import { AnimatedCounter } from "@/components/library/animated-counter";
import { Card } from "@/components/library/card";
import { cn } from "@/lib/utils";

export interface StatisticCardProps {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  description?: string;
  className?: string;
  /** Disable card chrome and render counter only. */
  bare?: boolean;
  align?: "left" | "center";
}

/**
 * Statistic presentation — composes Card + AnimatedCounter.
 */
function StatisticCard({
  label,
  value,
  prefix,
  suffix,
  description,
  className,
  bare = false,
  align = "left",
}: StatisticCardProps) {
  const counter = (
    <AnimatedCounter
      value={value}
      label={label}
      prefix={prefix}
      suffix={suffix}
      align={align}
    />
  );

  if (bare) {
    return <div className={className}>{counter}</div>;
  }

  return (
    <Card className={cn("h-full", className)} padding="lg">
      {counter}
      {description ? (
        <p className="mt-4 text-sm text-foreground-muted">{description}</p>
      ) : null}
    </Card>
  );
}

export { StatisticCard };
