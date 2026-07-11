import { IBM_Plex_Mono, Inter, Oswald } from "next/font/google";

/**
 * Display / headings — condensed, heavy construction presence.
 */
export const fontDisplay = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
  weight: ["600", "700"],
  preload: true,
});

/**
 * Body copy — highly legible product UI type.
 */
export const fontBody = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600"],
  preload: true,
});

/**
 * Technical numbers, labels, and data readouts.
 * Not preloaded — used below the fold / sparsely.
 */
export const fontMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
  weight: ["400", "500"],
  preload: false,
});

export const fontVariables = [
  fontDisplay.variable,
  fontBody.variable,
  fontMono.variable,
].join(" ");
