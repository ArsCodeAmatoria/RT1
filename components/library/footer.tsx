import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { Container } from "@/components/library/container";
import type { NavItem, NavSection } from "@/types";
import { cn } from "@/lib/utils";

export interface FooterBrand {
  href: string;
  name: string;
  tagline?: string;
  logoSrc?: string;
  logoAlt?: string;
}

export interface FooterProps {
  brand: FooterBrand;
  primaryLinks?: NavItem[];
  sections?: NavSection[];
  email?: string;
  phone?: string;
  phoneHref?: string;
  addressLines?: string[];
  socialLinks?: Array<{ label: string; href: string }>;
  copyrightName?: string;
  className?: string;
  children?: ReactNode;
}

/**
 * Site footer — brand mark leads, links and contact follow.
 */
function Footer({
  brand,
  primaryLinks = [],
  sections = [],
  email,
  phone,
  phoneHref,
  addressLines = [],
  socialLinks = [],
  copyrightName,
  className,
  children,
}: FooterProps) {
  const year = new Date().getFullYear();
  const legalName = copyrightName ?? brand.name;

  return (
    <footer
      className={cn(
        "relative overflow-hidden border-t border-border-subtle",
        className,
      )}
      aria-labelledby="footer-heading"
    >
      <div className="texture-carbon absolute inset-0 opacity-70" aria-hidden />

      <Container className="relative z-[1] py-16 md:py-20 lg:py-24">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:items-start lg:gap-20">
          <div>
            {brand.tagline ? (
              <p className="max-w-md text-base leading-relaxed text-foreground-secondary sm:text-lg">
                {brand.tagline}
              </p>
            ) : null}

            <div
              className={cn(
                "space-y-4",
                brand.tagline ? "mt-6 border-t border-border-subtle pt-6" : null,
              )}
            >
              {addressLines.length > 0 ? (
                <p className="text-sm leading-relaxed text-foreground-muted">
                  {addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              ) : null}

              <div className="flex flex-col gap-1.5 text-sm text-foreground-secondary sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-1">
                {phone && phoneHref ? (
                  <a
                    href={phoneHref}
                    className="outline-none transition-rt hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {phone}
                  </a>
                ) : null}
                {email ? (
                  <a
                    href={`mailto:${email}`}
                    className="outline-none transition-rt hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {email}
                  </a>
                ) : null}
              </div>

              {socialLinks.length > 0 ? (
                <ul className="flex flex-wrap gap-5 pt-1">
                  {socialLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-foreground-muted outline-none transition-rt hover:text-primary focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>

            <Link
              href={brand.href}
              className="group mt-8 block w-fit max-w-full rounded-md outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label={`${brand.name} home`}
            >
              {brand.logoSrc ? (
                <>
                  <Image
                    src={brand.logoSrc}
                    alt={brand.logoAlt ?? brand.name}
                    width={640}
                    height={360}
                    className="h-auto w-44 mix-blend-screen transition-opacity duration-300 group-hover:opacity-90 sm:w-52 lg:w-56"
                    sizes="14rem"
                    priority={false}
                  />
                  <span id="footer-heading" className="sr-only">
                    {brand.name}
                  </span>
                </>
              ) : (
                <span
                  id="footer-heading"
                  className="font-display text-2xl font-bold tracking-tight text-foreground"
                >
                  RIDGETECHONE
                </span>
              )}
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 sm:gap-12 lg:justify-items-start">
            {primaryLinks.length > 0 ? (
              <div>
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-foreground-muted">
                  Navigate
                </p>
                <ul className="mt-5 space-y-3">
                  {primaryLinks.map((item) => (
                    <li key={item.href ?? item.title}>
                      {item.disabled || !item.href ? (
                        <span className="text-sm text-foreground-muted">
                          {item.title}
                        </span>
                      ) : (
                        <Link
                          href={item.href}
                          className="rounded-sm text-sm text-foreground-secondary outline-none transition-rt hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
                        >
                          {item.title}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {sections.map((section) => (
              <div key={section.title} className="hidden sm:block">
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-foreground-muted">
                  {section.title}
                </p>
                <ul className="mt-5 space-y-3">
                  {section.items.map((item) => (
                    <li key={`${section.title}-${item.href ?? item.title}`}>
                      {item.disabled || item.upcoming || !item.href ? (
                        <span className="text-sm text-foreground-muted">
                          {item.title}
                          {(item.disabled || item.upcoming) && (
                            <span className="ml-2 font-mono text-[0.6rem] uppercase tracking-[0.14em]">
                              Soon
                            </span>
                          )}
                        </span>
                      ) : (
                        <Link
                          href={item.href}
                          className="rounded-sm text-sm text-foreground-secondary outline-none transition-rt hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
                        >
                          {item.title}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {children}

        <div className="mt-16 flex flex-col gap-4 border-t border-border-subtle pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-foreground-muted">
            © {year} {legalName}. All rights reserved.
          </p>
          {email ? (
            <a
              href={`mailto:${email}`}
              className="font-mono text-xs tracking-wide text-foreground-secondary outline-none transition-rt hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
            >
              {email}
            </a>
          ) : null}
        </div>
      </Container>
    </footer>
  );
}

export { Footer };
