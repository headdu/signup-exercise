import React from "react";
import { render, fireEvent, cleanup } from "react-testing-library";
import PrimaryButton from "./primary-button.component";

afterEach(cleanup);

describe("Primary Button Tests", () => {
  test("Renders the provided children correctly", () => {
    const { queryByText } = render(<PrimaryButton>Test Button</PrimaryButton>);

    expect(queryByText("Test Button")).toBeTruthy();
  });

  test("When clicked, the method passed as prop should be called", () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <PrimaryButton onClick={onClick}>Test Button</PrimaryButton>
    );

    fireEvent.click(getByText("Test Button"));

    expect(onClick).toHaveBeenCalled();
  });

  test("If disabled, when clicked, the method passed as prop should not be called", () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <PrimaryButton disabled={true} onClick={onClick}>
        Test Button
      </PrimaryButton>
    );

    fireEvent.click(getByText("Test Button"));

    expect(onClick).not.toHaveBeenCalled();
  });
});
