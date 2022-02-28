import matter from 'gray-matter';

import { assertArray } from '../utils/assertions';
import { getProjectMenu, read } from './fs';
import { NavItem, PrevNextNavItems } from './nav.types';

async function buildNavItems(project: string, activeSection: string): Promise<NavItem[]> {
  const items: NavItem[] = [];

  const menu = await getProjectMenu(project);

  for (const node of menu) {
    const isLeaf = typeof node === 'string';

    if (isLeaf) {
      const markdown = await read(`_docs/${project}/${node}.md`);

      items.push({
        name: matter(markdown).data.title,
        to: `/docs/${project}/${node}`,
        active: node === activeSection,
        slug: node,
        children: [],
      });

      continue;
    }

    // submenu
    assertArray<string>(node);
    const [submenuName, submenuItems] = node;

    const submenu: NavItem = {
      name: submenuName,
      to: `/docs/${project}/${submenuItems[0]}`,
      active: submenuItems.includes(activeSection),
      slug: submenuItems[0],
      children: [],
    };

    for (const submenuItem of submenuItems) {
      const markdown = await read(`_docs/${project}/${submenuItem}.md`);

      submenu.children.push({
        name: matter(markdown).data.title,
        to: `/docs/${project}/${submenuItem}`,
        active: submenuItem === activeSection,
        slug: submenuItem,
        children: [],
      });
    }

    items.push(submenu);
  }

  return items;
}

function getPrevNextNavItems(items: NavItem[]): PrevNextNavItems {
  let prev: NavItem | null = null;
  let next: NavItem | null = null;

  for (let index = 0; index < items.length; index++) {
    const item = items[index];

    if (!item.active) {
      continue;
    }

    const subIndex = item.children.findIndex((sub) => sub.active);

    prev =
      item.children[subIndex - 1] ??
      [...(items[index - 1]?.children ?? [])].pop() ??
      items[index - 1] ??
      null;

    next =
      item.children[subIndex + 1] ??
      [...(items[index + 1]?.children ?? [])].shift() ??
      items[index + 1] ??
      null;
  }

  return { prev, next };
}

export { buildNavItems, getPrevNextNavItems };
