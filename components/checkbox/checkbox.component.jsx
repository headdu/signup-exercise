import React, { useState } from "react";
import * as S from "./checkbox.styled.js";

const Checkbox = ({ controlledValue, name, disabled, setControlledValue }) => {
  const [value, setValue] = useState(
    controlledValue !== undefined ? controlledValue : false
  );

  const toggleValue = event => {
    setValue(!value);

    if (setControlledValue) {
      setControlledValue(!value);
    }
  };

  return (
    <S.CheckboxContainer
      type="button"
      onClick={toggleValue}
      disabled={disabled}
    >
      <S.CheckboxInput
        id={name}
        name={name}
        type="checkbox"
        value={value}
        disabled={disabled}
      />
      {value ? <>&#10003;</> : ""}
    </S.CheckboxContainer>
  );
};

export default Checkbox;
