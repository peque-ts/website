import matter from 'gray-matter';
import type { NextPage } from 'next';
import { GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult } from 'next';
import Head from 'next/head';
import fs from 'node:fs/promises';
import path from 'node:path';

import { Header } from '../../../components/Header';
import { markdownToHtml } from '../../../lib/markdown-to-html';
import { SectionMeta } from '../../../types/meta';
import { assertString } from '../../../utils/assertions';

interface Props {
  content: string;
  meta: SectionMeta;
}

const Section: NextPage<Props> = ({ content, meta }) => {
  console.log(meta);
  return (
    <div>
      <Head>
        <title>Peque Project | Doc Section</title> {/* @TODO: use variable */}
        <meta name="description" content="TypeScript libraries for fast development" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main>
        <Header />
        <section className="container mx-auto">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </section>
      </main>
    </div>
  );
};

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const paths: string[] = [];

  const projects = await fs.readdir(path.join(process.cwd(), 'docs'));

  for (const project of projects) {
    const sections = await fs.readdir(path.join(process.cwd(), 'docs', project));

    paths.push(
      ...sections
        .filter((section) => section.endsWith('.md'))
        .map((section) => {
          const sectionName = section.replace(/.md$/, '');
          return `/docs/${project}/${sectionName}`;
        }),
    );
  }

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(
  context: GetStaticPropsContext,
): Promise<GetStaticPropsResult<Props>> {
  assertString(context.params?.project);
  assertString(context.params?.section);

  const { project, section } = context.params;

  const parsed = matter(
    await fs.readFile(path.join(process.cwd(), 'docs', project, `${section}.md`), {
      encoding: 'utf-8',
    }),
  );

  const content = await markdownToHtml(parsed.content);

  return {
    props: {
      content,
      meta: parsed.data as SectionMeta,
    },
  };
}

export default Section;
