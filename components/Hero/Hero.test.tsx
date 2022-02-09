import { render } from '@testing-library/react';

import { Hero } from './Hero';

describe('Hero', () => {
  it('should render', () => {
    const { asFragment } = render(<Hero />);

    expect(asFragment()).toMatchSnapshot();
  });
});
