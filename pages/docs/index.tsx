import type { NextPage } from 'next';
import Head from 'next/head';

import { Header } from '../../components/Header';

const Docs: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Peque | Docs</title>
        <meta name="description" content="TypeScript libraries for fast development" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main>
        <Header />
        <p>Choose which project</p>
      </main>
    </div>
  );
};

export default Docs;
