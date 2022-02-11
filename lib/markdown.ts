import matter from 'gray-matter';
import { remark } from 'remark';
import gfm from 'remark-gfm';
import html from 'remark-html';

interface ParsedMarkdown<T> {
  meta: T;
  html: string;
}

export async function parse<TMeta>(markdown: string): Promise<ParsedMarkdown<TMeta>> {
  const { content, data } = matter(markdown);
  const result = await remark().use(html).use(gfm).process(content);

  return {
    meta: data as TMeta,
    html: result.toString(),
  };
}
