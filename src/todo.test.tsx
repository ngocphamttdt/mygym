import { render, screen } from '@testing-library/react';
import React from 'react';
import { Todo } from 'todo';

describe('App tests', () => {
  it('should contains the heading 1', () => {
    render(<Todo />);
    const heading = screen.getByText(/hello/i);
    expect(heading).toBeInTheDocument()
  });
});