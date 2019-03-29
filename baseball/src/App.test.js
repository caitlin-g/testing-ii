import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
// import { render, fireEvent } from "react-testing-library";

import "jest-dom/extend-expect";

import App from "./App";

describe("<App />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it.skip("matches snapshot", () => {
    const tree = renderer.create(<App />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});

describe("mocking", () => {
  it("is mocking me", () => {
    const mock = jest.fn();

    const actual = mock("smile");

    expect(actual).toBeUndefined();
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledTimes(1);
  });
});
