import type { NextPage } from 'next';
import { GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult } from 'next';
import Head from 'next/head';

import { EditOnGitHub } from '../../../components/EditOnGitHub';
import { Footer } from '../../../components/Footer';
import { Header } from '../../../components/Header';
import { PrevNext } from '../../../components/PrevNext';
import { Renderer } from '../../../components/Renderer';
import { SideNav } from '../../../components/SideNav';
import { ProjectId, PROJECTS } from '../../../lib/data';
import { getProjectSectionPaths, read } from '../../../lib/fs';
import { parse } from '../../../lib/markdown';
import { buildSideNavItems, getPrevNextNavItems } from '../../../lib/nav';
import type { NavItem, PrevNextNavItems } from '../../../lib/nav.types';
import type { Meta } from '../../../types/meta';
import { assertString } from '../../../utils/assertions';

interface Props {
  html: string;
  meta: Meta;
  pageTitle: string;
  projectName: string;
  sideNavItems: NavItem[];
  prevNextNavItems: PrevNextNavItems;
  github: string;
}

const Section: NextPage<Props> = ({
  html,
  meta,
  pageTitle,
  sideNavItems,
  projectName,
  prevNextNavItems,
  github,
}) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={meta.description} />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main>
        <Header transparent text={projectName} />
        <div className="container mx-auto flex pb-8 pt-16">
          <aside className="w-72 p-2">
            <div className="fixed">
              <h4 className="mb-2">Documentation</h4>
              <SideNav items={sideNavItems} />
            </div>
          </aside>
          <div className="flex-1 overflow-x-auto custom-scrollbar p-2">
            <div>
              <Renderer html={html} />
            </div>
            <PrevNext items={prevNextNavItems} />
            <EditOnGitHub link={github} />
          </div>
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
  const prevNextNavItems = getPrevNextNavItems(sideNavItems, section);

  return {
    props: {
      html,
      meta,
      pageTitle,
      projectName,
      sideNavItems,
      prevNextNavItems,
      github: `https://github.com/pequehq/website/blob/main/docs/${project}/${section}.md`,
    },
  };
}

export default Section;
