export type NavItem = {
  title: string;
  /** Leaf destination. Optional when the item is a dropdown parent with children. */
  href?: string;
  description?: string;
  external?: boolean;
  /** Visually present but not yet navigable (e.g. Training). */
  disabled?: boolean;
  /** Soft “coming soon” treatment without removing the slot. */
  upcoming?: boolean;
  /** Nested links shown in a desktop dropdown / mobile group. */
  children?: NavItem[];
};

export type NavSection = {
  title: string;
  items: NavItem[];
};
