import { render, screen } from '@testing-library/react';

import { Renderer } from './Renderer';

describe('Renderer', () => {
  it('should render', () => {
    const { asFragment } = render(<Renderer html={'<p data-testid="paragraph">hello world</p>'} />);

    expect(screen.getByTestId('paragraph')).toHaveTextContent('hello world');
    expect(asFragment()).toMatchSnapshot();
  });
});
