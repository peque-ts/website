import type { NextPage } from 'next';
import { GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult } from 'next';
import Head from 'next/head';

import { Container } from '../../../components/Container';
import { EditOnGitHub } from '../../../components/EditOnGitHub';
import { Header } from '../../../components/Header';
import { Nav } from '../../../components/Nav';
import { PrevNext } from '../../../components/PrevNext';
import { Renderer } from '../../../components/Renderer';
import { useSearch } from '../../../components/Search';
import { ProjectId, PROJECTS } from '../../../lib/data';
import { getProjectSectionPaths, read } from '../../../lib/fs';
import { parse } from '../../../lib/markdown';
import { buildNavItems, getPrevNextNavItems } from '../../../lib/nav';
import type { NavItem, PrevNextNavItems } from '../../../lib/nav.types';
import type { Meta } from '../../../types/meta';
import { assertArray, assertString } from '../../../utils/assertions';

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
  const { renderSearchInput, renderSearchResults, shouldRenderResults } = useSearch({
    endpoint: '/api/search',
  });

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={meta.description} />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main>
        <Header text={projectName} bgClassName="bg-secondary-900" />
        <Container className="pb-8 pt-16 tablet:pt-20">
          <div className="mb-4 border-t border-b border-secondary-700 py-2 laptop:hidden">
            <div className="mb-2">{renderSearchInput()}</div>
            {shouldRenderResults ? renderSearchResults() : <Nav items={navItems} />}
          </div>
          <div className="flex">
            <aside className="hidden w-72 laptop:block">
              <div className="fixed w-72">
                <h4 className="mb-3">Documentation</h4>
                <div className="mb-4">{renderSearchInput()}</div>
                {shouldRenderResults ? renderSearchResults() : <Nav items={navItems} />}
              </div>
            </aside>
            <div className="custom-scrollbar flex-1 overflow-x-auto pl-0 tablet:pl-4">
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
  assertArray<string>(context.params?.section);

  const project = context.params.project as ProjectId;
  const section = context.params.section.join('/');

  const markdown = await read(`_docs/${project}/${section}.md`);

  const { meta, html } = await parse<Meta>(markdown);

  const projectName = PROJECTS[project].name;
  const pageTitle = `${meta.title} | Peque ${projectName}`;
  const navItems = await buildNavItems(project, section);
  const prevNextNavItems = getPrevNextNavItems(navItems);

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
