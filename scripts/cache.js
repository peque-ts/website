const matter = require('gray-matter');
const fs = require('node:fs/promises');
const path = require('node:path');

const cacheFile = path.join(process.cwd(), 'cache.json');

async function createCache(project) {
  const sections = [];

  const menu = JSON.parse(
    await fs.readFile(path.join(process.cwd(), `_docs/${project}/_menu.json`), {
      encoding: 'utf-8',
    }),
  );

  const pushSection = async (slug) => {
    const markdown = await fs.readFile(path.join(process.cwd(), `_docs/${project}/${slug}.md`), {
      encoding: 'utf-8',
    });

    const meta = matter(markdown);

    sections.push({
      meta: meta.data,
      content: meta.content,
      url: `/docs/${project}/${slug}`,
    });
  };

  for (const node of menu) {
    if (typeof node === 'string') {
      await pushSection(node);
      continue;
    }

    for (const submenuItem of node[1]) {
      await pushSection(submenuItem);
    }
  }

  const cache = JSON.parse(await fs.readFile(cacheFile, 'utf-8'));
  cache[project] = sections;

  await fs.writeFile(cacheFile, JSON.stringify(cache), 'utf-8');
}

async function createProjectsCache() {
  try {
    await fs.access(cacheFile);
  } catch {
    await fs.writeFile(cacheFile, `{}`, 'utf-8');
  }

  const projects = await fs.readdir(path.join(process.cwd(), '_docs'));

  for (const project of projects) {
    await createCache(project);
  }
}

createProjectsCache();
