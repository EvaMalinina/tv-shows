import React from 'react';
import { render } from '@testing-library/react';

import Title from './Title';

describe('Title component', () => {
  it('It should render Title component', () => {
    const { asFragment } = render(<Title/>);
    expect(asFragment()).toMatchSnapshot();
  })
});