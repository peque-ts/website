import type { NextPage } from 'next';
import { GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult } from 'next';
import Head from 'next/head';

import { Header } from '../../../components/Header';
import { Renderer } from '../../../components/Renderer';
import { SideNav } from '../../../components/SideNav';
import { getProjectName } from '../../../lib/common';
import { getProjectSectionPaths, read } from '../../../lib/fs';
import { parse } from '../../../lib/markdown';
import { buildSideNavItems, SideNavItem } from '../../../lib/nav';
import type { Meta } from '../../../types/meta';
import { assertString } from '../../../utils/assertions';

interface Props {
  html: string;
  meta: Meta;
  pageTitle: string;
  sideNavItems: SideNavItem[];
}

const Section: NextPage<Props> = ({ html, meta, pageTitle, sideNavItems }) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={meta.description} />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main>
        <Header />
        <div className="flex">
          <SideNav items={sideNavItems} />
          <section className="flex-1 container mx-auto">
            <Renderer html={html} />
          </section>
        </div>
      </main>
    </>
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
  const markdown = await read(`docs/${project}/${section}.md`);
  const { meta, html } = await parse<Meta>(markdown);

  const pageTitle = `${meta.title} | Peque ${getProjectName(project)}`;
  const sideNavItems = await buildSideNavItems(project, section);

  return {
    props: {
      html,
      meta,
      pageTitle,
      sideNavItems,
    },
  };
}

export default Section;
