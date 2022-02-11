import matter from 'gray-matter';
import type {
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
  NextPage,
} from 'next';
import Head from 'next/head';
import fs from 'node:fs/promises';
import path from 'node:path';

import { Header } from '../../../components/Header';
import { markdownToHtml } from '../../../lib/markdown-to-html';
import { ProjectMeta } from '../../../types/meta';
import { assertString } from '../../../utils/assertions';

interface Props {
  project: string;
  content: string;
  meta: ProjectMeta;
}

const Project: NextPage<Props> = ({ project, content, meta }) => (
  <div>
    <Head>
      <title>Peque {meta.title} | Docs</title>
      <meta name="description" content={meta.description} />
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

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const projects = await fs.readdir(path.join(process.cwd(), 'docs'));

  return {
    paths: projects.map((project) => `/docs/${project}`),
    fallback: false,
  };
}

export async function getStaticProps(
  context: GetStaticPropsContext,
): Promise<GetStaticPropsResult<Props>> {
  assertString(context.params?.project);
  const project = context.params.project;

  const parsed = matter(
    await fs.readFile(path.join(process.cwd(), 'docs', project, 'index.md'), {
      encoding: 'utf-8',
    }),
  );

  const content = await markdownToHtml(parsed.content);

  return {
    props: {
      project,
      content,
      meta: parsed.data as ProjectMeta,
    },
  };
}

export default Project;
