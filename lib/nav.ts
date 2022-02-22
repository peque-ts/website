import matter from 'gray-matter';
import fs from 'node:fs/promises';
import path from 'node:path';

import { read } from './fs';
import { NavItem, PrevNextNavItems } from './nav.types';

async function buildNavItems(project: string, activeSection: string): Promise<NavItem[]> {
  const items: NavItem[] = [];

  const sectionFiles = await fs.readdir(path.join(process.cwd(), '_docs', project));

  for (const sectionFile of sectionFiles) {
    const markdown = await read(`_docs/${project}/${sectionFile}`);

    const sectionSlug = sectionFile.replace(/.md$/, '');
    const { title, order } = matter(markdown).data;

    items.push({
      name: title,
      to: `/docs/${project}/${sectionSlug}`,
      order,
      active: sectionSlug === activeSection,
      slug: sectionSlug,
    });
  }

  return items.sort((a, b) => {
    return a.order > b.order ? 1 : a.order < b.order ? -1 : 0;
  });
}

function getPrevNextNavItems(navItems: NavItem[], activeSection: string): PrevNextNavItems {
  const currentItem = navItems.find((item) => item.slug === activeSection);

  if (!currentItem) {
    throw new Error(
      `Cannot find navigation item with slug = [${activeSection}]. This looks like a bug.`,
    );
  }

  return {
    prev: navItems.find((item) => item.order === currentItem.order - 1) ?? null,
    next: navItems.find((item) => item.order === currentItem.order + 1) ?? null,
  };
}

export { buildNavItems, getPrevNextNavItems };
