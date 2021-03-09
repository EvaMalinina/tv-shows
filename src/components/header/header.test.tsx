import * as React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';


describe('Text should be correct', () => {
  it('renders the correct text in the document', () => {
    const { getByText } = render(<Header />);
    expect(getByText("find your movie")).toBeInTheDocument();
  });
});
