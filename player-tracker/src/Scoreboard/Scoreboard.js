import React from 'react';

class Scoreboard extends React.Component {

  state = {
    balls: 0,
    strikes: 0,
  }

  ball = () => {
    if (this.state.balls < 4) {
      this.setState(prevState => {
        return {balls: prevState.balls + 1 }
      })
    } else if (this.state.balls === 4) {
      this.setState(prevState => {
        return {balls: 0 }
      })
    }
  }

  strike = () => {
    if (this.state.strikes < 3) {
      this.setState(prevState => {
        return {strikes: prevState.strikes + 1 }
      })
    } else if (this.state.strikes === 3) {
      this.setState(prevState => {
        return {strikes: 0 }
      })
    }
  }

  foul = () => {
    if (this.state.strikes < 2) {
      this.setState(prevState => {
        return {strikes: prevState.strikes + 1 }
      })
    } else if (this.state.strikes === 2) {
      return null
    }
  }

  hit = () => {
    this.setState({ balls: 0, strikes: 0 })
  }

  render() {
    return(
      <>
        <h2>Scoreboard!</h2>

        <div className="display">
          <p data-testid="ball-count">Balls: {this.state.balls}</p>
          <p data-testid="strike-count">Strikes: {this.state.strikes}</p>
        </div>

        <div className="dashboard">
          <button onClick={this.ball}>Ball</button>
          <button onClick={this.strike}>Strike</button>
          <button onClick={this.hit}>Hit</button>
          <button onClick={this.foul}>Foul</button>
        </div>
      </>
    )
  }
}

export default Scoreboard;