import fs from 'node:fs/promises';
import path from 'node:path';

import type { MenuItem } from './nav.types';

async function read(filePath: string): Promise<string> {
  return fs.readFile(path.join(process.cwd(), filePath), {
    encoding: 'utf-8',
  });
}

async function getProjectMenu(project: string): Promise<MenuItem[]> {
  return JSON.parse(await read(`_docs/${project}/_menu.json`));
}

async function getProjectSectionPaths(): Promise<string[]> {
  let paths: string[] = [];

  const projects = await fs.readdir(path.join(process.cwd(), '_docs'));

  for (const project of projects) {
    const projectMenu = await getProjectMenu(project);

    paths = [
      ...paths,
      ...projectMenu.flatMap((item) => {
        if (typeof item === 'string') {
          return `/docs/${project}/${item}`;
        }

        // submenu
        return item[1].map((submenuItem) => `/docs/${project}/${submenuItem}`);
      }),
    ];
  }

  return paths;
}

export { read, getProjectMenu, getProjectSectionPaths };
