import fs from 'node:fs/promises';
import path from 'node:path';

export async function read(project: string, section = 'index'): Promise<string> {
  return fs.readFile(path.join(process.cwd(), 'docs', project, `${section}.md`), {
    encoding: 'utf-8',
  });
}

export async function getProjectPaths(): Promise<string[]> {
  const projects = await fs.readdir(path.join(process.cwd(), 'docs'));
  return projects.map((project) => `/docs/${project}`);
}

export async function getProjectSectionPaths(): Promise<string[]> {
  let paths: string[] = [];

  const projects = await fs.readdir(path.join(process.cwd(), 'docs'));

  for (const project of projects) {
    const sections = await fs.readdir(path.join(process.cwd(), 'docs', project));

    paths = [
      ...paths,
      ...sections.map((section) => {
        const slug = section.replace(/.md$/, '');
        return `/docs/${project}/${slug}`;
      }),
    ];
  }

  return paths;
}
