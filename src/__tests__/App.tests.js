import React from "react";
import App from "../App";
import { create } from "react-test-renderer";

describe("snapshot app component", () => {
  test("testing app component", () => {
    let tree = create(<App />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
