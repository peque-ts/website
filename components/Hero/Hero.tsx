import Link from 'next/link';
import React from 'react';

import { ProjectId, PROJECTS } from '../../lib/data';
import { Icon } from '../Icon';

export const Hero: React.VFC = () => {
  const renderLink = (projectId: ProjectId) => (
    <Link href={`/docs/${projectId}`}>
      <a className="text-lg text-secondary-300 transition duration-300 hover:text-white">
        {PROJECTS[projectId].name}
      </a>
    </Link>
  );

  return (
    <section className="h-80 mt-16 bg-gradient-to-b from-secondary-600 to-transparent flex items-center justify-center">
      <div className="flex items-start space-x-2">
        <Icon alt="Logo" name="logo" size={40} />
        <div>
          <h1>Peque</h1>
          <div className="flex flex-col space-y-1">
            {renderLink('framework')}
            {renderLink('graphql')}
            {renderLink('di')}
            {renderLink('smb')}
          </div>
        </div>
      </div>
    </section>
  );
};
