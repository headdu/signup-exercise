import React from "react";
import { storiesOf } from "@storybook/react";
import Checkbox from "./checkbox.component";
import { action } from "@storybook/addon-actions";

storiesOf("Checkbox", module)
  .add("Regular", () => <Checkbox name="input-story" controlledValue={true} />)
  .add("Disabled", () => (
    <Checkbox name="input-story" controlledValue={false} disabled={true} />
  ));
