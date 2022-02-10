import { act, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ButtonCopy } from './ButtonCopy';

describe('ButtonCopy', () => {
  it('should render', () => {
    const { asFragment } = render(<ButtonCopy data="data to copy" />);

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it('should copy data when clicked and browser supports it', async () => {
    const writeText = jest.fn();
    (global.navigator as any).clipboard = { writeText };

    render(<ButtonCopy data="data to copy" />);

    userEvent.click(screen.getByRole('button'));

    await waitFor(() => {
      expect(writeText).toHaveBeenCalledWith('data to copy');
    });

    (global.navigator as any).clipboard = undefined;
  });

  it('should log an error when clipboard is not supported', async () => {
    const spy = jest.spyOn(console, 'error').mockImplementation();

    render(<ButtonCopy data="data to copy" />);

    userEvent.click(screen.getByRole('button'));

    expect(spy).toHaveBeenCalledWith('Unable to copy to clipboard.', expect.any(Error));

    spy.mockRestore();
  });

  it('should reset its state after the timeout', async () => {
    jest.useFakeTimers();

    const writeText = jest.fn();
    (global.navigator as any).clipboard = { writeText };

    render(<ButtonCopy data="data to copy" />);

    userEvent.click(screen.getByRole('button'));

    await waitFor(() => {
      expect(writeText).toHaveBeenCalledTimes(1);
    });

    expect(screen.getByText('copied!')).toBeInTheDocument();

    userEvent.click(screen.getByRole('button'));

    expect(writeText).not.toHaveBeenCalledTimes(2);

    act(() => {
      jest.advanceTimersByTime(4000);
    });

    expect(screen.queryByText('copied!')).toBeNull();

    (global.navigator as any).clipboard = undefined;
    jest.useRealTimers();
  });
});
