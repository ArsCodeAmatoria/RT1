/**
 * Local content seed — the file-based source of truth.
 *
 * Application code should import through `@/lib/content`, not this barrel,
 * so Sanity/Payload can replace the adapter without touching templates.
 */
export { siteConfig } from "./site";
export {
  mainNavigation,
  footerNavigation,
  platformNavigation,
} from "./navigation";
export { homePage } from "./home";
export { projects, projectsById } from "./projects";
export {
  servicesIndexPage,
  projectsPage,
  teamPage,
  careersPage,
  contactPage,
  equipmentPage,
  reinforcingPage,
} from "./pages";
export {
  servicesRegistry,
  serviceList,
  getServiceHref,
} from "./services";
