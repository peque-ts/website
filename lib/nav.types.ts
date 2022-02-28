interface NavItem {
  name: string;
  to: string;
  slug: string;
  active: boolean;
  children: NavItem[];
}

interface PrevNextNavItems {
  prev: NavItem | null;
  next: NavItem | null;
}

type MenuItem = string | [string, string[]];

export type { NavItem, PrevNextNavItems, MenuItem };
