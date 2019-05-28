import React from "react";
import * as S from "./primary-button.styled.js";

const PrimaryButton = ({
  backgroundColor = "#d14167",
  color = "#fff",
  children,
  type = "submit",
  onClick,
  disabled = false
}) => {
  return (
    <S.PrimaryButton
      type={type}
      onClick={onClick}
      color={color}
      backgroundColor={backgroundColor}
      disabled={disabled}
    >
      {children}
    </S.PrimaryButton>
  );
};

export default PrimaryButton;
