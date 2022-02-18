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
      <div className="flex items-center space-x-3">
        <h3>{name}</h3>
        <Icon
          alt={`${name} on GitHub`}
          name="github"
          size={16}
          link={`https://github.com/pequehq/${id}`}
        />
      </div>
      <p className="text-lg text-secondary-100">{description}</p>
    </article>
  );
};
