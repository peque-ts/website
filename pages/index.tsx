import type { NextPage } from 'next';
import Head from 'next/head';

import { Code } from '../components/Code';
import { Hero } from '../components/Hero';
import { Navbar } from '../components/Navbar';
import {
  Project,
  SNIPPET_DI,
  SNIPPET_FRAMEWORK,
  SNIPPET_SMB_CLIENT,
  SNIPPET_SMB_SERVER,
} from '../components/Project';
import { RepoCard } from '../components/RepoCard';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Peque | TypeScript libraries for fast development</title>
        <meta name="description" content="TypeScript libraries for fast development" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <Hero />

        <section className="container mx-auto grid grid-cols-3 gap-8 mb-16">
          <RepoCard title="Framework" repo="framework">
            Create enterprise level server-side TypeScript applications. For REST, GraphQL, and
            Microservices.
          </RepoCard>
          <RepoCard title="IoC Container" repo="di">
            Lightweight and dev-friendly Inversion of Control container for TypeScript and
            JavaScript applications.
          </RepoCard>
          <RepoCard title="SMB" repo="smb">
            TCP based Redis-like Pub/Sub type of message broker, almost configuration-less.
          </RepoCard>
        </section>

        <Project
          name="Framework"
          description="Node.js framework for backend applications."
          features={['Modular', 'Setup REST endpoints in no time', 'Microservices']}
          docsLink="/docs/framework"
          command="npx peque new project-name"
          renderExample={() => <Code>{SNIPPET_FRAMEWORK}</Code>}
          bgClassName="bg-primary-800 skew-y-1"
        />

        <Project
          name="IoC Container"
          description="TypeScript Dependency Injection."
          features={['Easy Dependency Injection', 'Use it in backend or frontend']}
          docsLink="/docs/di"
          command="npm install @pequehq/di reflect-metadata"
          renderExample={() => <Code>{SNIPPET_DI}</Code>}
          examplePosition="left"
        />

        <Project
          name="SMB"
          description="TCP-based Message Broker."
          features={['Event-driven', 'Lightweight client dependency (< 100 KB)', 'Easy setup']}
          docsLink="/docs/smb"
          command="npx peque add smb"
          renderExample={() => (
            <div className="space-y-14">
              <Code>{SNIPPET_SMB_SERVER}</Code>
              <Code>{SNIPPET_SMB_CLIENT}</Code>
            </div>
          )}
          bgClassName="bg-primary-800 -skew-y-3"
        />
      </main>
    </div>
  );
};

export default Home;
