import { Footer } from "@/components/library";
import {
  getFooterNavigation,
  getMainNavigation,
  getSiteConfig,
} from "@/lib/content";
import { routes } from "@/lib/constants/routes";

/**
 * Site-specific footer composition.
 */
function SiteFooter() {
  const site = getSiteConfig();

  return (
    <Footer
      brand={{
        href: routes.home,
        name: site.name,
        tagline: site.tagline,
      }}
      primaryLinks={getMainNavigation()
        .flatMap((item) => (item.children?.length ? item.children : [item]))
        .filter((item) => item.href && !item.upcoming && !item.disabled)
        .filter(
          (item, index, list) =>
            list.findIndex((entry) => entry.href === item.href) === index,
        )}
      sections={getFooterNavigation()}
      email={site.links.email}
      phone={site.phone}
      phoneHref={site.phoneHref}
      addressLines={[site.address.line1, site.address.line2]}
      copyrightName={site.legalName}
      socialLinks={[
        ...(site.links.linkedin
          ? [{ label: "LinkedIn", href: site.links.linkedin }]
          : []),
        ...(site.links.instagram
          ? [{ label: "Instagram", href: site.links.instagram }]
          : []),
      ]}
    />
  );
}

export { SiteFooter };
