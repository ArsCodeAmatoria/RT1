import {
  footerNavigation,
  mainNavigation,
  platformNavigation,
} from "@/lib/content/source/local";
import type { NavItem, NavSection } from "@/types";

export function getMainNavigation(): NavItem[] {
  return mainNavigation;
}

export function getFooterNavigation(): NavSection[] {
  return footerNavigation;
}

export function getPlatformNavigation(): NavItem[] {
  return platformNavigation;
}
