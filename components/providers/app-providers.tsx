"use client";

import * as React from "react";

import { ThemeProvider } from "@/components/providers/theme-provider";

type AppProvidersProps = {
  children: React.ReactNode;
};

/**
 * Client boundary for providers that require browser APIs.
 * Keep Server Components outside this tree whenever possible.
 */
export function AppProviders({ children }: AppProvidersProps) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
