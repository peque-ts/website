import Image from 'next/image';
import React from 'react';

import { Container } from '../Container';
import { Icon } from '../Icon';
import { FooterProject } from './Footer.blocks';

export const Footer: React.VFC = () => {
  const renderLink = (text: string, href = '#') => (
    <li>
      <a className="link text-base" href={href}>
        {text}
      </a>
    </li>
  );

  return (
    <footer className="bg-secondary-800 py-10">
      <Container>
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center mb-4">
              <Icon alt="Logo" name="logo" size={32} />
              <h3>Peque</h3>
            </div>
            <ul className="space-y-2">
              {renderLink('Peque on GitHub', 'https://github.com/pequehq')}
              {renderLink('Become a sponsor')}
              {renderLink('Enterprise support')}
              {renderLink('Credits')}
            </ul>
          </div>
          <div className="flex space-x-6">
            <FooterProject projectId="framework" />
            <FooterProject projectId="graphql" />
            <FooterProject projectId="di" />
            <FooterProject projectId="smb" />
          </div>
        </div>
        <div className="text-center mt-8">
          <p>Peque packages are open source and released under the Apache 2.0 License.</p>
        </div>
        <div className="flex flex-col items-center mt-8 space-y-2 text-sm">
          <p className="flex items-center">
            <span className="mr-1">Website hosted by</span>
            <a href="https://vercel.com" target="_blank" rel="noreferrer" className="flex">
              <Image src="/images/vercel-logotype-light.png" alt="Vercel" width={70} height={15} />
            </a>
          </p>
          <p>Copyright © 2022 Peque. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};
