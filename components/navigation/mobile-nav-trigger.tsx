"use client";

import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";

export type MobileNavTriggerProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  className?: string;
  controlsId: string;
};

function MobileNavTrigger({
  open,
  onOpenChange,
  className,
  controlsId,
}: MobileNavTriggerProps) {
  return (
    <button
      type="button"
      className={cn(
        "relative inline-flex size-11 items-center justify-center rounded-lg lg:hidden",
        "text-foreground transition-rt hover:bg-white/[0.04]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className,
      )}
      aria-expanded={open}
      aria-controls={controlsId}
      aria-haspopup="dialog"
      onClick={() => onOpenChange(!open)}
    >
      <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
      <span aria-hidden className="relative size-5">
        <Menu
          className={cn(
            "absolute inset-0 size-5 transition-rt",
            open ? "scale-75 opacity-0" : "scale-100 opacity-100",
          )}
        />
        <X
          className={cn(
            "absolute inset-0 size-5 transition-rt",
            open ? "scale-100 opacity-100" : "scale-75 opacity-0",
          )}
        />
      </span>
    </button>
  );
}

export { MobileNavTrigger };
