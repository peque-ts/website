import type { NextPage } from 'next';
import { GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult } from 'next';
import Head from 'next/head';

import { Container } from '../../../components/Container';
import { EditOnGitHub } from '../../../components/EditOnGitHub';
import { Header } from '../../../components/Header';
import { Nav } from '../../../components/Nav';
import { PrevNext } from '../../../components/PrevNext';
import { Renderer } from '../../../components/Renderer';
import { ProjectId, PROJECTS } from '../../../lib/data';
import { getProjectSectionPaths, read } from '../../../lib/fs';
import { parse } from '../../../lib/markdown';
import { buildNavItems, getPrevNextNavItems } from '../../../lib/nav';
import type { NavItem, PrevNextNavItems } from '../../../lib/nav.types';
import type { Meta } from '../../../types/meta';
import { assertString } from '../../../utils/assertions';

interface Props {
  html: string;
  meta: Meta;
  pageTitle: string;
  projectName: string;
  navItems: NavItem[];
  prevNextNavItems: PrevNextNavItems;
  github: string;
}

const Section: NextPage<Props> = ({
  html,
  meta,
  pageTitle,
  navItems,
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
        <Header text={projectName} bgClassName="bg-secondary-900" />
        <Container className="pb-8 pt-20">
          <div className="tablet:hidden">mobile nav</div>
          <div className="flex">
            <aside className="w-72 hidden tablet:block">
              <div className="fixed">
                <h4 className="mb-2">Documentation</h4>
                <Nav items={navItems} />
              </div>
            </aside>
            <div className="flex-1 overflow-x-auto custom-scrollbar pl-0 tablet:pl-4">
              <Renderer html={html} />
              <PrevNext items={prevNextNavItems} />
              <EditOnGitHub link={github} />
            </div>
          </div>
        </Container>
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
  const markdown = await read(`_docs/${project}/${section}.md`);
  const { meta, html } = await parse<Meta>(markdown);

  const projectName = PROJECTS[project as ProjectId].name;
  const pageTitle = `${meta.title} | Peque ${projectName}`;
  const navItems = await buildNavItems(project, section);
  const prevNextNavItems = getPrevNextNavItems(navItems, section);

  return {
    props: {
      html,
      meta,
      pageTitle,
      projectName,
      navItems,
      prevNextNavItems,
      github: `https://github.com/pequehq/website/blob/main/docs/${project}/${section}.md`,
    },
  };
}

export default Section;
