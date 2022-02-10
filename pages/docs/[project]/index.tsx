import type { NextPage } from 'next';
import Head from 'next/head';

import { Header } from '../../../components/Header';

const Project: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Peque Project | Docs</title> {/* @TODO: use variable */}
        <meta name="description" content="TypeScript libraries for fast development" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main>
        <Header />
        <p>Welcome to the project page. Choose section.</p>
      </main>
    </div>
  );
};

export default Project;
