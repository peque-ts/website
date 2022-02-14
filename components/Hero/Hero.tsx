import Link from 'next/link';
import React from 'react';

import { Icon } from '../Icon';

export const Hero: React.VFC = () => {
  return (
    <section className="h-80 mt-16 bg-gradient-to-b from-primary-600-alpha to-primary-700 flex items-center justify-center">
      <div className="flex items-start space-x-2">
        <Icon alt="Logo" name="logo" size={46} />
        <div>
          <h1>Peque</h1>
          <div className="flex flex-col space-y-1">
            <Link href="/docs/framework">
              <a className="text-lg text-secondary-500 transition duration-300 hover:text-white">
                Framework
              </a>
            </Link>
            <Link href="/docs/di">
              <a className="text-lg text-secondary-500 transition duration-300 hover:text-white">
                IoC Container
              </a>
            </Link>
            <Link href="/docs/smb">
              <a className="text-lg text-secondary-500 transition duration-300 hover:text-white">
                Message Broker
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
