import { act } from 'react';
import { render, screen } from '@testing-library/react';
import Users from './Users';

test('renders h1 element', () => {
  act(() => {
    render(<Users />);
  });
  const h1Element = screen.getByText(/Hello Users and Members!/i);
  expect(h1Element).toBeInTheDocument();
});
