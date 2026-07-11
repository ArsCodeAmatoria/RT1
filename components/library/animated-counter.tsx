"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

export interface AnimatedCounterProps {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  durationMs?: number;
  className?: string;
  /** Align number + label. */
  align?: "left" | "center";
}

/**
 * Intersection-triggered numeric counter with reduced-motion fallback.
 */
function AnimatedCounter({
  value,
  label,
  prefix = "",
  suffix = "",
  durationMs = 1400,
  className,
  align = "left",
}: AnimatedCounterProps) {
  const prefersReducedMotion = useReducedMotion();
  const [display, setDisplay] = useState(prefersReducedMotion ? value : 0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplay(value);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [prefersReducedMotion, value]);

  useEffect(() => {
    if (!hasStarted || prefersReducedMotion) return;

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(value * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [hasStarted, prefersReducedMotion, value, durationMs]);

  return (
    <div
      ref={ref}
      className={cn(
        align === "center" ? "text-center" : "text-left",
        className,
      )}
    >
      <p
        className="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl"
        aria-label={`${prefix}${value}${suffix} ${label}`}
      >
        <span aria-hidden className="font-mono tabular-nums tracking-tight">
          {prefix}
          {display.toLocaleString("en-US")}
          {suffix}
        </span>
      </p>
      <p className="mt-3 text-sm text-foreground-secondary">{label}</p>
    </div>
  );
}

export { AnimatedCounter };
