import React, { Component } from 'react';
import './App.css';

import Dashboard from "./Dashboard/Dashboard"
import Counter from "./Counter/Counter"

class App extends Component {

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
    return (
      <div className="App">
        <h2>Scoreboard!</h2>
        <Dashboard balls={this.state.balls} strikes={this.state.strikes}/>
        <Counter hit={this.hit} foul={this.foul} ball={this.ball} strike={this.strike}/>
      </div>
    );
  }
}

export default App;
