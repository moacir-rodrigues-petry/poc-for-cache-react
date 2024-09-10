import { act } from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders h1 element', () => {
  act(() => {
    render(<App />);
  });
  const h1Element = screen.getByText(/Hello, TypeScript with React!/i);
  expect(h1Element).toBeInTheDocument();
});
