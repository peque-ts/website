import Link from 'next/link';
import React from 'react';

import { ProjectId, PROJECTS } from '../../lib/data';
import { Icon } from '../Icon';

interface Props {
  projectId: ProjectId;
}

export const RepoCard: React.FC<Props> = ({ projectId }) => {
  const { name, id, description } = PROJECTS[projectId];

  return (
    <article className="space-y-3">
      <div className="flex items-center space-x-3 justify-center tablet:justify-start">
        <h3>{name}</h3>
        <Link href={`https://github.com/pequehq/${id}`}>
          <a className="text-secondary-200 hover:text-white transition">
            <Icon name="GitHub" size={16} />
          </a>
        </Link>
      </div>
      <p className="text-lg text-secondary-100 text-center tablet:text-left">{description}</p>
    </article>
  );
};
