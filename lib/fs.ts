import fs from 'node:fs/promises';
import path from 'node:path';

async function read(filePath: string): Promise<string> {
  return fs.readFile(path.join(process.cwd(), filePath), {
    encoding: 'utf-8',
  });
}

async function getProjectSectionPaths(): Promise<string[]> {
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

export { read, getProjectSectionPaths };
