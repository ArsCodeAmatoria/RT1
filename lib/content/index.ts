/**
 * Content API — the only layer app routes and feature components should use.
 *
 * Swap `source/local` for Sanity/Payload adapters without changing callers.
 */
export { getSiteConfig } from "./get-site";
export {
  getMainNavigation,
  getFooterNavigation,
  getPlatformNavigation,
} from "./get-navigation";
export { getHomePage, getHomePageDocument } from "./get-home";
export {
  getAllProjects,
  getProjectById,
  getProjectsByIds,
  getFeaturedProjects,
} from "./get-projects";
export {
  SERVICE_SLUGS,
  serviceList,
  servicesRegistry,
  isServiceSlug,
  getServiceBySlug,
  getAllServiceSlugs,
  getServicePath,
  getServiceCards,
  getRelatedServices,
  getServiceRelatedProjects,
} from "./get-services";
export {
  getServicesIndexPage,
  getProjectsPage,
  getTeamPage,
  getCareersPage,
  getContactPage,
  getEquipmentPage,
  getReinforcingPage,
} from "./get-pages";
