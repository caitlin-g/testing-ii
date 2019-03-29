import React from "react";

function Display(props) {
  return (
    <>
      <h3>Strikes: {props.strike} </h3>
      <h3>Balls: {props.ball} </h3>
      <h3>Fouls: {props.foul} </h3>
      <h3>Hits {props.hit} </h3>
    </>
  );
}

export default Display;
