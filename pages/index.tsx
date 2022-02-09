import type { NextPage } from 'next';
import Head from 'next/head';

import { Hero } from '../components/Hero';
import { Navbar } from '../components/Navbar';
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
        <section className="container mx-auto grid grid-cols-3 gap-8">
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
      </main>
    </div>
  );
};

export default Home;
