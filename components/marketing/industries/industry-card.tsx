import { Text } from "@/components/design-system/text";
import type { IndustryIconName } from "@/types";
import { industryIcons } from "@/lib/icons";
import { cn } from "@/lib/utils";

type IndustryCardProps = {
  title: string;
  description: string;
  icon: IndustryIconName;
  className?: string;
};

/**
 * Industry tile — Server Component with CSS hover.
 */
function IndustryCard({
  title,
  description,
  icon,
  className,
}: IndustryCardProps) {
  const Icon = industryIcons[icon];

  return (
    <article
      className={cn(
        "surface-card flex min-w-[16.5rem] flex-1 flex-col p-6 md:min-w-[18rem] md:p-7",
        "transition-[border-color,transform] duration-[var(--duration-base)] ease-[var(--ease-out-expo)]",
        "hover:-translate-y-0.5 hover:border-border-strong",
        className,
      )}
    >
      <span className="inline-flex size-10 items-center justify-center rounded-lg border border-border bg-surface text-steel">
        <Icon className="size-5" aria-hidden />
      </span>
      <h3 className="font-display mt-8 text-lg font-semibold tracking-tight text-foreground">
        {title}
      </h3>
      <Text size="sm" className="mt-3">
        {description}
      </Text>
    </article>
  );
}

export { IndustryCard };
