import matter from 'gray-matter';
import { rehype } from 'rehype';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkHtml from 'remark-html';

import {
  getAnchorSvg,
  rehypeAddClasses,
  rehypeTableResponsive,
  remarkMermaid,
} from './markdown.helpers';

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
      .use(rehypeAddClasses, {
        'h1,h2,h3,h4,h5,h6': 'group',
      })
      .use(rehypeSlug)
      .use(rehypeAutolinkHeadings, {
        behavior: 'append',
        content: () => [getAnchorSvg()],
      })
      .use(rehypeTableResponsive)
      .process(baseHtml),
  );

  return {
    meta: data as TMeta,
    html,
  };
}
