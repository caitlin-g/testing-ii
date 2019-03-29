import React from "react";
import { render, fireEvent, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";

import Dashboard from "./Dashboard";

afterEach(cleanup);

describe("<Dashboard />", () => {
  it("should fire addBall function when button is clicked", () => {
    const onClick = jest.fn();
    const { getByTestId } = render(<Dashboard addBall={onClick} />);
    const add_ball = getByTestId("addBall");
    fireEvent.click(add_ball);
    expect(onClick).toHaveBeenCalled();
  });

  it("should fire addStrike function when button is clicked", () => {
    const onClick = jest.fn();
    const { getByTestId } = render(<Dashboard addStrike={onClick} />);
    const add_strike = getByTestId("addStrike");
    fireEvent.click(add_strike);
    expect(onClick).toHaveBeenCalled();
  });
});

//erwjgnjkwrngjkhrneg
