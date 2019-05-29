import React from "react";
import { storiesOf } from "@storybook/react";
import Tabs from "./tabs.component";

const oneTab = [
  {
    label: "One",
    onClick: () => {}
  }
];

const twoTabs = [
  {
    label: "One",
    onClick: () => {}
  },
  {
    label: "Two",
    onClick: () => {}
  }
];

const threeTabs = [
  {
    label: "One",
    onClick: () => {}
  },
  {
    label: "Two",
    onClick: () => {}
  },
  {
    label: "Three",
    onClick: () => {}
  }
];

storiesOf("Tabs", module)
  .add("One Tab", () => <Tabs tabArray={oneTab} />)
  .add("Two tabs", () => <Tabs tabArray={twoTabs} />)
  .add("Three tabs", () => <Tabs tabArray={threeTabs} />);
