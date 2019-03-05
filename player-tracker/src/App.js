import React, { Component } from 'react';
import './App.css';

import Scoreboard from "./Scoreboard/Scoreboard"

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Hello World</h2>
        <Scoreboard />
      </div>
    );
  }
}

export default App;
