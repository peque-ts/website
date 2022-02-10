import { render, screen } from '@testing-library/react';

import { RepoCard } from './RepoCard';

describe('RepoCard', () => {
  it('should render', () => {
    const { asFragment } = render(
      <RepoCard title="Framework" repo="framework">
        Create enterprise level server-side TypeScript applications. For REST, GraphQL, and
        Microservices.
      </RepoCard>,
    );

    expect(screen.getByRole('heading')).toHaveTextContent('Framework');
    expect(screen.getByRole('link')).toBeInTheDocument();

    expect(asFragment()).toMatchSnapshot();
  });
});
