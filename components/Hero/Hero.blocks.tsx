import Image from 'next/image';
import React from 'react';

export const LogoType: React.VFC = () => (
  <div className="flex items-center space-x-4">
    <Image src="/logo.svg" alt="Logo" width={42} height={42} />
    <h1>Peque</h1>
  </div>
);
