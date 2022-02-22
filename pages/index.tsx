import type { NextPage } from 'next';
import Head from 'next/head';

import { Code } from '../components/Code';
import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import {
  Project,
  SNIPPET_DI,
  SNIPPET_FRAMEWORK,
  SNIPPET_GRAPHQL,
  SNIPPET_SMB_CLIENT,
  SNIPPET_SMB_SERVER,
} from '../components/Project';
import { RepoCard } from '../components/RepoCard';
import { PROJECTS } from '../lib/data';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Peque | TypeScript libraries for fast development</title>
        <meta name="description" content="TypeScript libraries for fast development" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main>
        <Header bgClassName="bg-secondary-600" />
        <Hero />

        <Container section className="grid grid-cols-1 tablet:grid-cols-2 gap-10 mt-12 mb-20">
          <RepoCard projectId="framework" />
          <RepoCard projectId="graphql" />
          <RepoCard projectId="di" />
          <RepoCard projectId="smb" />
        </Container>

        <Project
          name={PROJECTS.framework.name}
          description={PROJECTS.framework.descriptionShort}
          features={['Modular', 'Setup REST endpoints in no time', 'Microservices']}
          docsLink="/docs/framework"
          command="npx peque new project-name"
          renderExample={() => <Code>{SNIPPET_FRAMEWORK}</Code>}
          bgClassName="bg-secondary-800 skew-y-1"
        />

        <Project
          name={PROJECTS.graphql.name}
          description={PROJECTS.graphql.descriptionShort}
          features={[
            'Code resolvers in an OOP fashion',
            'Use decorators like @Query() and @Mutation()',
            'Easy testable',
          ]}
          docsLink="/docs/graphql"
          command="npm i @pequehq/graphql reflect-metadata"
          renderExample={() => <Code>{SNIPPET_GRAPHQL}</Code>}
        />

        <Project
          name={PROJECTS.di.name}
          description={PROJECTS.di.descriptionShort}
          features={[
            'Easy dependency injection',
            'Use it in backend or frontend apps',
            'Full TypeScript support',
          ]}
          docsLink="/docs/di"
          command="npm i @pequehq/di reflect-metadata"
          renderExample={() => <Code>{SNIPPET_DI}</Code>}
          bgClassName="bg-secondary-800 -skew-y-2"
        />

        <Project
          name={PROJECTS.smb.name}
          description={PROJECTS.smb.descriptionShort}
          features={[
            'Event-driven',
            'Lightweight client dependency (< 100 KB)',
            'Almost configuration-less',
          ]}
          docsLink="/docs/smb"
          command="npx peque add smb"
          renderExample={() => (
            <div className="space-y-14">
              <Code>{SNIPPET_SMB_SERVER}</Code>
              <Code>{SNIPPET_SMB_CLIENT}</Code>
            </div>
          )}
        />

        <Footer />
      </main>
    </div>
  );
};

export default Home;
