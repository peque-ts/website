import React from 'react';

import { ProjectId, PROJECTS } from '../../lib/data';

interface FooterProjectProps {
  projectId: ProjectId;
}

export const FooterProject: React.VFC<FooterProjectProps> = ({ projectId }) => {
  const { id, name } = PROJECTS[projectId];

  const renderLink = (text: string, href: string) => (
    <li>
      <a className="text-sm text-secondary-100 hover:underline" href={href}>
        {text}
      </a>
    </li>
  );

  return (
    <div className="flex flex-col">
      <h3 className="text-base font-semibold mb-2">{name}</h3>
      <ul className="space-y-1">
        {renderLink('Releases', `https://github.com/pequehq/${id}/releases`)}
        {renderLink('Report an issue', `https://github.com/pequehq/${id}/issues`)}
        {renderLink('License', `https://github.com/pequehq/${id}/blob/main/LICENSE`)}
      </ul>
    </div>
  );
};
