import { render } from '@testing-library/react';

import { Code } from './Code';

describe('Code', () => {
  it('should render', () => {
    const { asFragment } = render(<Code>{`console.log('something');`}</Code>);

    expect(asFragment()).toMatchSnapshot();
  });
});
