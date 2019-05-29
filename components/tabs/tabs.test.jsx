import React from "react";
import { render, fireEvent, cleanup } from "react-testing-library";
import { matchers } from 'jest-emotion'
import Tabs from "./tabs.component";

expect.extend(matchers)

afterEach(cleanup);

describe("Tabs Tests", () => {
  test("Renders the provided tabs correctly", () => {
    const twoTabs = [{
        label: 'One',
        onClick: () => {}
    },
    {
        label: 'Two',
        onClick: () => {}
    }];
    
    const { queryByText } = render(<Tabs tabArray={twoTabs}/>);

    expect(queryByText("One")).toBeTruthy();
    expect(queryByText("Two")).toBeTruthy();
  });

  test("The selected element should change on click", () => {
    const twoTabs = [{
        label: 'One',
        onClick: () => {}
    },
    {
        label: 'Two',
        onClick: () => {}
    }];
    
    const { queryByText } = render(<Tabs tabArray={twoTabs}/>);

    expect(queryByText("One")).not.toHaveStyleRule('background', '#fff');
    expect(queryByText("Two")).toHaveStyleRule('background', '#fff');

    fireEvent.click(queryByText("Two"));

    expect(queryByText("One")).toHaveStyleRule('background', '#fff');
    expect(queryByText("Two")).not.toHaveStyleRule('background', '#fff');
  });
});
