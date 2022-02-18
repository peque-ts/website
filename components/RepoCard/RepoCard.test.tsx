import { render, screen } from '@testing-library/react';

import { RepoCard } from './RepoCard';

describe('RepoCard', () => {
  it('should render', () => {
    const { asFragment } = render(<RepoCard projectId="framework" />);

    expect(screen.getByRole('heading')).toHaveTextContent('Framework');
    expect(screen.getByRole('link')).toBeInTheDocument();

    expect(asFragment()).toMatchSnapshot();
  });
});
