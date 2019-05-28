import React from 'react';
import { render, fireEvent, cleanup } from "react-testing-library";
import Checkbox from "./checkbox.component";

afterEach(cleanup);

describe("Checkbox Tests", () => {
  test("Renders a checkbox with value", () => {
    const { queryByText } = render(
      <Checkbox name="checkbox" controlledValue={true}/>
    );
    
    
    expect(queryByText("✓")).toBeTruthy();
  });

  test("Should toggle value correctly", () => {
    const { queryByText, getByText } = render(
      <Checkbox name="checkbox" controlledValue={true}/>
    );
    
    
    expect(queryByText("✓")).toBeTruthy();

    fireEvent.click(getByText("✓"));

    expect(queryByText("✓")).toBeFalsy();
  });


  test("Should toggle value correctly and call controlling method", () => {
    const setControlledValue = jest.fn();
    const { queryByText, getByText } = render(
      <Checkbox name="checkbox" controlledValue={true} setControlledValue={setControlledValue}/>
    );
    
    
    expect(queryByText("✓")).toBeTruthy();

    fireEvent.click(getByText("✓"));

    expect(queryByText("✓")).toBeFalsy();
    expect(setControlledValue).toHaveBeenCalled();
  });
});