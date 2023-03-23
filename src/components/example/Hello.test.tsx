import { render, screen } from '@testing-library/react';
import { Hello } from './Hello';

it('should contains the heading 1', () => {
  render(<Hello />);
  const myElement = screen.getByText(/ngocpham/i);
  expect(myElement).toBeInTheDocument()
});