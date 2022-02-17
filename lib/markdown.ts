import matter from 'gray-matter';
import { h } from 'hastscript';
import { rehype } from 'rehype';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkHtml from 'remark-html';

import { remarkMermaid } from './remark-mermaid';

interface ParsedMarkdown<T> {
  meta: T;
  html: string;
}

export async function parse<TMeta>(markdown: string): Promise<ParsedMarkdown<TMeta>> {
  const { content, data } = matter(markdown);

  // transform markdown into html
  const baseHtml = String(
    await remark()
      .use(remarkHtml, { sanitize: false })
      .use(remarkGfm)
      .use(remarkMermaid)
      .process(content),
  );

  // process html
  const html = String(
    await rehype()
      .use(rehypeSlug)
      .use(rehypeAutolinkHeadings, {
        behavior: 'append',
        content: (node) => [h('sup.link', '🔗')],
      })
      .process(baseHtml),
  );

  return {
    meta: data as TMeta,
    html,
  };
}
