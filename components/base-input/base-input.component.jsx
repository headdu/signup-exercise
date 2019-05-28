import React, { useState } from "react";
import * as S from "./base-input.styled.js";

const BaseInput = ({
  placeholder,
  controlledValue,
  onChangeControl,
  disabled,
  type = "text",
  name,
  title
}) => {
  const [value, setValue] = useState(controlledValue || "");

  const onChangeOverride = event => {
    setValue(event.currentTarget.value);
    if (onChangeControl) {
      onChangeControl(event);
    }
  };

  return (
    <S.InputContainer>
      {title ? <S.InputLabel htmlFor={name}>{title}</S.InputLabel> : null}
      <S.BaseInput
        id={name}
        name={name}
        onChange={onChangeOverride}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        type={type}
      />
    </S.InputContainer>
  );
};

export default BaseInput;
