import * as React from 'react';
import { render } from '@testing-library/react';
import Hero from './Hero';


describe('Text should be correct', () => {
  it('renders the correct text in the document', () => {
    const { getByText } = render(<Hero />);
    expect(getByText("Stay tuned, IT world")).toBeInTheDocument();
  });
});
