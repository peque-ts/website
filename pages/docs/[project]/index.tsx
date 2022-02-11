import type {
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
  NextPage,
} from 'next';
import Head from 'next/head';

import { Header } from '../../../components/Header';
import { getProjectPaths, read } from '../../../lib/fs';
import { parse } from '../../../lib/markdown';
import type { ProjectMeta } from '../../../types/meta';
import { assertString } from '../../../utils/assertions';

interface Props {
  content: string;
  meta: ProjectMeta;
}

const Project: NextPage<Props> = ({ content, meta }) => (
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
  const paths = await getProjectPaths();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(
  context: GetStaticPropsContext,
): Promise<GetStaticPropsResult<Props>> {
  assertString(context.params?.project);

  const { meta, html } = await parse<ProjectMeta>(await read(context.params.project));

  return {
    props: {
      content: html,
      meta,
    },
  };
}

export default Project;
