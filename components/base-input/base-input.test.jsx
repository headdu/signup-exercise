import React from "react";
import { render, fireEvent, cleanup } from "react-testing-library";
import BaseInput from "./base-input.component";

afterEach(cleanup);

describe("Base Input Tests", () => {
  test("Renders the placeholder correctly", () => {
    const { queryByPlaceholderText } = render(
      <BaseInput placeholder="Test placeholder" />
    );

    expect(queryByPlaceholderText("Test placeholder")).toBeTruthy();
  });

  test("Renders the label correctly", () => {
    const { queryByLabelText } = render(
      <BaseInput
        name="test-input"
        placeholder="Test placeholder"
        title="Label"
      />
    );

    expect(queryByLabelText("Label")).toBeTruthy();
  });

  test("Renders a given value correctly", () => {
    const { queryByDisplayValue } = render(
      <BaseInput
        placeholder="Test placeholder"
        controlledValue={"test value"}
      />
    );

    expect(queryByDisplayValue("test value")).toBeTruthy();
  });

  test("The value is changed correctly", () => {
    const { queryByDisplayValue, queryByPlaceholderText } = render(
      <BaseInput placeholder="Test placeholder" />
    );

    fireEvent.input(queryByPlaceholderText("Test placeholder"), {
      target: { value: "test value" }
    });

    expect(queryByDisplayValue("test value")).toBeTruthy();
  });

  test("The value is changed correctly and calls controlled onChange", () => {
    const onChangeControl = jest.fn();
    const { queryByDisplayValue, queryByPlaceholderText } = render(
      <BaseInput
        placeholder="Test placeholder"
        onChangeControl={onChangeControl}
      />
    );

    fireEvent.input(queryByPlaceholderText("Test placeholder"), {
      target: { value: "test value" }
    });

    expect(queryByDisplayValue("test value")).toBeTruthy();
    expect(onChangeControl).toHaveBeenCalled();
  });
});
