import React from "react";
import { render, fireEvent } from "react-testing-library"; // aded this
import "jest-dom/extend-expect"; // added this

import Dashboard from "./Dashboard";

describe("<Dashboard />", () => {
  //   it("should fire addBall function when button is clicked", () => {
  //     const onClick = jest.fn();
  //     const { getByTestId } = render(<Dashboard addBall={onClick} />);
  //     const add_ball = getByTestId("addBall");
  //     fireEvent.click(add_ball);
  //     expect(onClick).toHaveBeenCalled();
  //   });

  it("should fire addStrike function when button is clicked", () => {
    const onClick = jest.fn();
    const { getByTestId } = render(<Dashboard addStrike={onClick} />);
    const add_strike = getByTestId("addStrike");
    fireEvent.click(add_strike);
    expect(onClick).toHaveBeenCalled();
  });
});
