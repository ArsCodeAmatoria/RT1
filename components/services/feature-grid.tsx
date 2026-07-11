import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/library/card";
import { Stagger, StaggerItem } from "@/components/motion";
import type { ServiceListItem } from "@/types/services";
import { cn } from "@/lib/utils";

export interface FeatureGridProps {
  items: ServiceListItem[];
  className?: string;
  columns?: 2 | 3;
}

/**
 * Reusable grid for capabilities, technology, benefits, and future list sections.
 */
function FeatureGrid({ items, className, columns = 2 }: FeatureGridProps) {
  return (
    <Stagger
      className={cn(
        "mt-10 grid gap-4",
        columns === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2",
        className,
      )}
    >
      {items.map((item) => (
        <StaggerItem key={item.title}>
          <Card className="h-full" padding="md">
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
          </Card>
        </StaggerItem>
      ))}
    </Stagger>
  );
}

export { FeatureGrid };
