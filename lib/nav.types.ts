interface NavItem {
  name: string;
  to: string;
  slug: string;
  order: number;
  active: boolean;
}

interface PrevNextNavItems {
  prev: NavItem | null;
  next: NavItem | null;
}

export type { NavItem, PrevNextNavItems };
