import React from "react";
import { storiesOf } from "@storybook/react";
import PrimaryButton from "./primary-button.component";
import { action } from "@storybook/addon-actions";

storiesOf("Primary Button", module)
  .add("Regular", () => (
    <PrimaryButton onClick={action("clicked")}>Hello Button</PrimaryButton>
  ))
  .add("Regular with changed color", () => (
    <PrimaryButton
      onClick={action("clicked")}
      color="red"
      backgroundColor="black"
    >
      Hello Button
    </PrimaryButton>
  ))
  .add("Disabled", () => (
    <PrimaryButton onClick={action("clicked")} disabled={true}>
      Hello Button
    </PrimaryButton>
  ));
