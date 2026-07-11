"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import * as React from "react";

import type { LibraryAccordionItem } from "@/components/library/types";
import { cn } from "@/lib/utils";

export interface AccordionProps {
  items: LibraryAccordionItem[];
  type?: "single" | "multiple";
  defaultValue?: string | string[];
  className?: string;
}

/**
 * Accessible disclosure list built on Radix Accordion.
 */
function Accordion({
  items,
  type = "single",
  defaultValue,
  className,
}: AccordionProps) {
  const rootProps =
    type === "multiple"
      ? {
          type: "multiple" as const,
          defaultValue: Array.isArray(defaultValue)
            ? defaultValue
            : defaultValue
              ? [defaultValue]
              : undefined,
        }
      : {
          type: "single" as const,
          collapsible: true,
          defaultValue: typeof defaultValue === "string" ? defaultValue : undefined,
        };

  return (
    <AccordionPrimitive.Root
      {...rootProps}
      className={cn("w-full divide-y divide-border border-y border-border", className)}
    >
      {items.map((item) => (
        <AccordionPrimitive.Item key={item.id} value={item.id}>
          <AccordionPrimitive.Header>
            <AccordionPrimitive.Trigger
              className={cn(
                "group flex w-full items-center justify-between gap-4 py-5 text-left",
                "font-display text-base font-medium tracking-tight text-foreground",
                "outline-none transition-rt hover:text-foreground",
                "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
              )}
            >
              {item.title}
              <ChevronDown
                className="size-4 shrink-0 text-foreground-muted transition-transform duration-[var(--duration-base)] group-data-[state=open]:rotate-180"
                aria-hidden
              />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionPrimitive.Content
            className={cn(
              "overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
            )}
          >
            <div className="pb-5 text-sm leading-relaxed text-foreground-secondary">
              {item.content}
            </div>
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  );
}

export { Accordion };
