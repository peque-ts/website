import React from 'react';

import { Icon } from '../Icon';

interface Props {
  title: string;
  repo: string;
}

export const RepoCard: React.FC<Props> = ({ title, repo, children }) => (
  <article className="space-y-3">
    <div className="flex items-center justify-between">
      <h3>{title}</h3>
      <Icon
        alt={`${title} on GitHub`}
        name="github"
        size={16}
        link={`https://github.com/peque-ts/${repo}`}
      />
    </div>
    <p>{children}</p>
  </article>
);
