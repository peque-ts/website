import type { NextPage } from 'next';
import { GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult } from 'next';
import Head from 'next/head';

import { Header } from '../../../components/Header';
import { Renderer } from '../../../components/Renderer';
import { SideNav } from '../../../components/SideNav';
import { ProjectId, PROJECTS } from '../../../lib/data';
import { getProjectSectionPaths, read } from '../../../lib/fs';
import { parse } from '../../../lib/markdown';
import { buildSideNavItems, SideNavItem } from '../../../lib/nav';
import type { Meta } from '../../../types/meta';
import { assertString } from '../../../utils/assertions';

interface Props {
  html: string;
  meta: Meta;
  pageTitle: string;
  projectName: string;
  sideNavItems: SideNavItem[];
}

const Section: NextPage<Props> = ({ html, meta, pageTitle, sideNavItems, projectName }) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={meta.description} />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main>
        <Header transparent text={projectName} />
        <div className="container mx-auto flex pb-8 pt-20">
          <aside className="w-72">
            <SideNav items={sideNavItems} />
          </aside>
          <article className="flex-1">
            <Renderer html={html} />
          </article>
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

  const projectName = PROJECTS[project as ProjectId].name;
  const pageTitle = `${meta.title} | Peque ${projectName}`;
  const sideNavItems = await buildSideNavItems(project, section);

  return {
    props: {
      html,
      meta,
      pageTitle,
      projectName,
      sideNavItems,
    },
  };
}

export default Section;
