import React from 'react';

class Counter extends React.Component {

  render() {
    return (
      <div className="counter-buttons">
      <button onClick={this.props.ball}>Ball</button>
      <button onClick={this.props.strike}>Strike</button>
      <button onClick={this.props.hit}>Hit</button>
      <button onClick={this.props.foul}>Foul</button>
    </div>
    )
  }
}

export default Counter;