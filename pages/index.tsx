import type { NextPage } from 'next';
import Head from 'next/head';

import { Hero } from '../components/Hero';
import { Navbar } from '../components/Navbar';

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
      </main>
    </div>
  );
};

export default Home;
