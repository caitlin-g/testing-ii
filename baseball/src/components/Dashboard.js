import React from "react";

const Dashboard = props => {
  return (
    <div className="Dashboard">
      <h2>Baseball Dashboard</h2>
      <button onClick={props.addStrike}>Strike</button>
      <button onClick={props.addBall}>Ball</button>
      <button onClick={props.addFoul}>Foul</button>
      <button onClick={props.addHit}>Hit</button>
    </div>
  );
};

export default Dashboard;
