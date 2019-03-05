import React, { Component } from "react";

class Dashboard extends Component {
  state = {
    strike: 0,
    ball: 0,
    foul: 0,
    hit: 0
  };

  render() {
    return (
      <div className="Dashboard">
        <h2>Baseball Dashboard</h2>
        <button onClick={this.addStrike}>Strike</button>
        <button onClick={this.addBall}>Ball</button>
        <button onClick={this.addFoul}>Foul</button>
        <button onClick={this.addHit}>Hit</button>
      </div>
    );
  }
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
}

export default Dashboard;
