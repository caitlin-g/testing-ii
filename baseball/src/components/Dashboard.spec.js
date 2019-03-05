import React from "react";
import { render, fireEvent } from "react-testing-library"; // aded this
import "jest-dom/extend-expect"; // added this

import Dashboard from "./Dashboard";

describe("<Dashboard />", () => {
  it("calls the addBall function when clicked", () => {
    const { getByText } = render(<Dashboard />);

    const addBallButton = getByText(/ball/i);
    fireEvent.click(addBallButton);

    expect(addBallButton).toHaveBeenCalled();
  });
});
