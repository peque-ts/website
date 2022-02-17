import { render, screen } from '@testing-library/react';

import { Hero } from './Hero';

describe('Hero', () => {
  it('should render', () => {
    const { asFragment } = render(<Hero />);

    expect(screen.getAllByRole('link')).toHaveLength(4);
    expect(asFragment()).toMatchSnapshot();
  });
});
