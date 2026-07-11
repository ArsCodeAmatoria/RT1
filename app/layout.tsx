import type { Metadata, Viewport } from "next";

import { AppProviders } from "@/components/providers";
import { SiteJsonLd } from "@/components/seo";
import { SiteShell } from "@/components/layout";
import { fontVariables } from "@/lib/fonts";
import { rootMetadata, rootViewport } from "@/lib/seo";

import "./globals.css";

export const metadata: Metadata = rootMetadata;
export const viewport: Viewport = rootViewport;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${fontVariables} texture-carbon min-h-dvh font-sans antialiased`}
      >
        <AppProviders>
          <SiteJsonLd />
          <SiteShell>{children}</SiteShell>
        </AppProviders>
      </body>
    </html>
  );
}
