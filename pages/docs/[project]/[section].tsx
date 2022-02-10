import type { NextPage } from 'next';
import Head from 'next/head';

import { Header } from '../../../components/Header';

const Section: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Peque Project | Doc Section</title> {/* @TODO: use variable */}
        <meta name="description" content="TypeScript libraries for fast development" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main>
        <Header />
        <p>Read docs about the stuff.</p>
      </main>
    </div>
  );
};

export default Section;
