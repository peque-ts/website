import Image from 'next/image';
import React from 'react';

import { Anchor } from './Hero.blocks';

export const Hero: React.VFC = () => {
  return (
    <section className="h-80 bg-gradient-to-b from-primary-600 to-primary-700 flex items-center justify-center">
      <div className="flex items-start space-x-2">
        <Image src="/logo.svg" alt="Logo" width={46} height={46} />
        <div>
          <h1>Peque</h1>
          <div className="flex flex-col space-y-1">
            <Anchor to="framework">Framework</Anchor>
            <Anchor to="di">IoC Container</Anchor>
            <Anchor to="smb">Message Broker</Anchor>
          </div>
        </div>
      </div>
    </section>
  );
};
