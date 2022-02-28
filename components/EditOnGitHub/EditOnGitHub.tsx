import React from 'react';

interface Props {
  link: string;
}

export const EditOnGitHub: React.VFC<Props> = ({ link }) => (
  <div className="mt-8 border-t border-t-secondary-700 pt-8 text-right">
    <a href={link} target="_blank" className="link text-sm" rel="noreferrer">
      Edit this page on GitHub
    </a>
  </div>
);
