import React from "react";
import { render, fireEvent, cleanup } from "react-testing-library";
import Title from "./title.component";

afterEach(cleanup);

describe("Title Tests", () => {
  test("Renders the provided title correctly", () => {
    
    const { queryByText } = render(<Title title={'Title'}/>);

    expect(queryByText("Title")).toBeTruthy();
  });
});
