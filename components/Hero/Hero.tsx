import React from 'react';

import { LogoType } from './Hero.blocks';

export const Hero: React.VFC = () => {
  return (
    <section className="h-80 bg-gradient-to-b from-primary-600 to-primary-700 flex items-center justify-center">
      <LogoType />
    </section>
  );
};
