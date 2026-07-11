import { Navbar } from "@/components/library";
import { getMainNavigation } from "@/lib/content";
import { SITE_NAME } from "@/lib/constants/site";
import { routes } from "@/lib/constants/routes";

/**
 * Site-specific navbar composition.
 * Content resolved via `@/lib/content` at the server boundary.
 */
function SiteHeader() {
  return (
    <Navbar
      items={getMainNavigation()}
      brand={{
        href: routes.home,
        label: SITE_NAME,
      }}
    />
  );
}

export { SiteHeader };
