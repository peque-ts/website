import { render, screen } from '@testing-library/react';

import { Terminal } from './Terminal';

describe('Terminal', () => {
  it('should render', () => {
    const { asFragment } = render(<Terminal>npm i @pequehq/di</Terminal>);

    expect(screen.getByText('$ npm i @pequehq/di')).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
