import { render, screen } from '@testing-library/react';
import React from 'react';

import { ButtonLink } from './ButtonLink';

describe('ButtonLink', () => {
  it('should render', () => {
    const { asFragment } = render(<ButtonLink to="/docs">Check the docs</ButtonLink>);

    expect(screen.getByRole('link')).toHaveTextContent('Check the docs');
    expect(asFragment()).toMatchSnapshot();
  });
});
