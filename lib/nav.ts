import matter from 'gray-matter';
import fs from 'node:fs/promises';
import path from 'node:path';

import { read } from './fs';

export interface SideNavItem {
  name: string;
  to: string;
  order: number;
  active: boolean;
}

export async function buildSideNavItems(
  project: string,
  activeSection: string,
): Promise<SideNavItem[]> {
  const items: SideNavItem[] = [];

  const sectionFiles = await fs.readdir(path.join(process.cwd(), 'docs', project));

  for (const sectionFile of sectionFiles) {
    const markdown = await read(`docs/${project}/${sectionFile}`);

    const sectionSlug = sectionFile.replace(/.md$/, '');
    const { title, order } = matter(markdown).data;

    items.push({
      name: title,
      to: `/docs/${project}/${sectionSlug}`,
      order,
      active: sectionSlug === activeSection,
    });
  }

  return items.sort((a, b) => {
    return a.order > b.order ? 1 : a.order < b.order ? -1 : 0;
  });
}
