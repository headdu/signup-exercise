import React, { useState } from "react";
import * as S from "./base-input.styled.js";

const BaseInput = ({
  placeholder,
  controlledValue,
  onChangeControl,
  disabled,
  type = "text",
  name,
  title,
  className,
  ...rest
}) => {
  const [value, setValue] = useState(controlledValue || "");

  const onChangeOverride = event => {
    setValue(event.currentTarget.value);
    if (onChangeControl) {
      onChangeControl(event);
    }
  };

  return (
    <S.InputContainer className={className}>
      {title ? <S.InputLabel htmlFor={name}>{title}</S.InputLabel> : null}
      <S.BaseInput
        id={name}
        name={name}
        onChange={onChangeOverride}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        type={type}
        {...rest}
      />
    </S.InputContainer>
  );
};

export default BaseInput;
