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
 * Minimal professional footer. All copy and links are prop-driven.
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
      className={cn("border-t border-border-subtle bg-background", className)}
      aria-labelledby="footer-heading"
    >
      <Container className="py-16 md:py-20">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <Link
              href={brand.href}
              className="inline-flex items-center rounded-md outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <span
                id="footer-heading"
                className="font-display text-base font-bold tracking-tight text-foreground"
              >
                RIDGETECHONE
              </span>
            </Link>
            {brand.tagline ? (
              <p className="mt-5 text-sm leading-relaxed text-foreground-secondary">
                {brand.tagline}
              </p>
            ) : null}
            {addressLines.length > 0 ? (
              <p className="mt-4 text-sm leading-relaxed text-foreground-muted">
                {addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            ) : null}
            <div className="mt-4 flex flex-col gap-1 text-sm text-foreground-secondary">
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
              <ul className="mt-5 flex flex-wrap gap-4">
                {socialLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-foreground-secondary outline-none transition-rt hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 sm:gap-14">
            {primaryLinks.length > 0 ? (
              <div>
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-foreground-muted">
                  Navigate
                </p>
                <ul className="mt-4 space-y-3">
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
                <ul className="mt-4 space-y-3">
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

        <div className="mt-14 flex flex-col gap-4 border-t border-border-subtle pt-8 sm:flex-row sm:items-center sm:justify-between">
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
