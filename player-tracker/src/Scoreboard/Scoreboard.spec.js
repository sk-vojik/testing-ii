import React from 'react';
import { render, getByText, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Scoreboard from './Scoreboard';

describe('<Scoreboard />', () => {
  it('should start off with 0 balls at the beginning of an at bat', () => {

    const { getByText } = render(<Scoreboard />);
    
    expect(getByText(/balls: 0/i)).toBeInTheDocument();
  })

  it('should start off with 0 strikes at the beginning of an at bat', () => {

    const { getByText } = render(<Scoreboard />);
    
    expect(getByText(/strikes: 0/i)).toBeInTheDocument();
  })

  
  
});