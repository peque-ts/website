import type { NextPage } from 'next';
import { GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult } from 'next';
import Head from 'next/head';

import { Header } from '../../../components/Header';
import { getProjectSectionPaths, read } from '../../../lib/fs';
import { parse } from '../../../lib/markdown';
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
  const paths = await getProjectSectionPaths();

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
  const { meta, html } = await parse<SectionMeta>(await read(project, section));

  return {
    props: {
      content: html,
      meta,
    },
  };
}

export default Section;
