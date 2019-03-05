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

  it('should never have more than 4 balls', () => {
    const { getByText, getByTestId } = render(<Scoreboard />);

    const balls = getByTestId('ball-count');
    const ballButton = getByText(/ball/i);
    fireEvent.click(ballButton)

    expect(balls).toHaveTextContent(0);
  })

  it('should never have more than 3 strikes', () => {
    
    const { getByText, getByTestId } = render(<Scoreboard />);

    const strikes = getByTestId('strike-count');
    const strikebutton = getByText(/strike/i);
    fireEvent.click(strikebutton);
    
   

    expect(strikes).toHaveTextContent(0);
  })

  it('should never go to three strikes via foul ball button', () => {
    const { getByText, getByTestId } = render(<Scoreboard />);

    const strikes = getByTestId('strike-count');
    const foulbutton = getByText(/foul/i);
    fireEvent.click(foulbutton)

    expect(strikes).toHaveTextContent(0);
  })

    
});