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
      <div className="flex items-center justify-center space-x-3 tablet:justify-start">
        <h3>{name}</h3>
        <Link href={`https://github.com/pequehq/${id}`}>
          <a className="text-secondary-200 transition hover:text-white">
            <Icon name="GitHub" size={16} />
          </a>
        </Link>
      </div>
      <p className="text-center text-lg text-secondary-100 tablet:text-left">{description}</p>
    </article>
  );
};
