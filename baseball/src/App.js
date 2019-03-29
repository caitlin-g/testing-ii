import React, { Component } from "react";

import "./App.css";

import Dashboard from "./components/Dashboard";
import Display from "./components/Display";

class App extends Component {
  state = {
    strike: 0,
    ball: 0,
    foul: 0,
    hit: 0
  };
  addStrike = () => {
    this.setState({ strike: ++this.state.strike });
  };

  addBall = () => {
    this.setState({ ball: ++this.state.ball });
  };

  addFoul = () => {
    this.setState({ foul: ++this.state.foul });
  };

  addHit = () => {
    this.setState({ hit: ++this.state.hit });
  };

  render() {
    return (
      <div className="App">
        <Dashboard
          addStrike={this.addStrike}
          addBall={this.addBall}
          addFoul={this.addFoul}
          addHit={this.addHit}
        />
        <Display
          strike={this.state.strike}
          ball={this.state.ball}
          foul={this.state.foul}
          hit={this.state.hit}
        />
      </div>
    );
  }
}

export default App;
