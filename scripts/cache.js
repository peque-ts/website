const matter = require('gray-matter');
const fs = require('node:fs/promises');
const path = require('node:path');
const Slugger = require('github-slugger');

const cacheFile = path.join(process.cwd(), 'cache.json');

let unified;
let remarkParse;
let remarkGfm;
let nodeToString;

async function prepare() {
  unified = (await import('unified')).unified;
  remarkParse = (await import('remark-parse')).default;
  remarkGfm = (await import('remark-gfm')).default;
  nodeToString = (await import('hast-util-to-string')).toString;
}

async function createCache(project) {
  const slugger = new Slugger();

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

    const { content, data } = matter(markdown);

    let heading = '';
    let headingSlug = '';

    const tree = unified().use(remarkParse).use(remarkGfm).parse(content);

    slugger.reset();

    for (const node of tree.children) {
      if (!['heading', 'paragraph'].includes(node.type)) {
        continue;
      }

      if (node.type === 'heading') {
        heading = nodeToString(node);
        headingSlug = `#${slugger.slug(heading, false)}`;
      }

      if (node.type === 'paragraph') {
        sections.push({
          title: data.title,
          heading,
          description: nodeToString(node),
          url: `/docs/${project}/${slug}${headingSlug}`,
        });
      }
    }
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

  await prepare();

  for (const project of projects) {
    await createCache(project);
  }
}

createProjectsCache();
