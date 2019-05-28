import React from "react";
import { storiesOf } from "@storybook/react";
import BaseInput from "./base-input.component";
import { action } from "@storybook/addon-actions";

storiesOf("Base Input", module)
  .add("Regular", () => (
    <BaseInput name="input-story" placeholder="Story placeholder" />
  ))
  .add("With title", () => (
    <BaseInput
      name="input-story"
      controlledValue="I have initial value"
      placeholder="Story placeholder"
      title="Story title"
    />
  ))
  .add("With value", () => (
    <BaseInput
      name="input-story"
      controlledValue="I have initial value"
      placeholder="Story placeholder"
    />
  ))
  .add("Controlled by parent", () => (
    <BaseInput
      name="input-story"
      controlledValue="I have value and on change control"
      onChangeControl={action("control")}
      placeholder="Story placeholder"
    />
  ))
  .add("Disabled", () => (
    <BaseInput
      name="input-story"
      placeholder="Story placeholder"
      disabled={true}
    />
  ));
