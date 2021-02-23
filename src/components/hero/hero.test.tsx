import * as React from 'react';
import { render } from '@testing-library/react';
// got issue Hero.tsx is not a module
// what prevented success compilation
// that's why added
// @ts-ignore
import Hero from './Hero.tsx';


describe('Text should be correct', () => {
  it('renders the correct text in the document', () => {
    const { getByText } = render(<Hero />);

    // @ts-ignore
    expect(getByText("Stay tuned, IT world")).toBeInTheDocument();
  });
});
