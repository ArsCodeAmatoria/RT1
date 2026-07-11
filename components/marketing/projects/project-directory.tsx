import { Heading } from "@/components/design-system/heading";
import { Text } from "@/components/design-system/text";
import { FadeIn } from "@/components/motion";
import { cn } from "@/lib/utils";

export type ProjectDirectoryGroup = {
  title: string;
  description?: string;
  names: string[];
};

type ProjectDirectoryProps = {
  groups: ProjectDirectoryGroup[];
  className?: string;
};

/**
 * Dense portfolio name directory — authentic list treatment from the live site.
 */
function ProjectDirectory({ groups, className }: ProjectDirectoryProps) {
  return (
    <div className={cn("grid gap-10 lg:grid-cols-2 lg:gap-8", className)}>
      {groups.map((group, index) => (
        <FadeIn
          key={group.title}
          transition={{ delay: index * 0.06 }}
          className="rounded-2xl border border-border-subtle bg-card/40 p-6 md:p-8"
        >
          <div className="flex items-end justify-between gap-4 border-b border-border-subtle pb-5">
            <div>
              <Heading as="h3" size="h3">
                {group.title}
              </Heading>
              {group.description ? (
                <Text size="sm" className="mt-2 max-w-sm text-foreground-secondary">
                  {group.description}
                </Text>
              ) : null}
            </div>
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-foreground-muted">
              {group.names.length} sites
            </p>
          </div>

          <ul className="mt-6 columns-1 gap-x-8 sm:columns-2">
            {group.names.map((name) => (
              <li
                key={name}
                className="break-inside-avoid border-b border-border-subtle/70 py-2.5 text-sm text-foreground-secondary"
              >
                {name}
              </li>
            ))}
          </ul>
        </FadeIn>
      ))}
    </div>
  );
}

export { ProjectDirectory };
