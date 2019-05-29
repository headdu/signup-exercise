import styled from "@emotion/styled";

const baseColor = "#ed6879";
const checkboxDimension = 14;

export const CheckboxInput = styled.input`
  display: none;
`;

export const CheckboxContainer = styled.button`
  box-sizing: content-box;
  border-radius: 4px;
  border: 1px solid ${baseColor};
  min-width: ${checkboxDimension}px;
  min-height: ${checkboxDimension}px;
  max-width: ${checkboxDimension}px;
  max-height: ${checkboxDimension}px;
  line-height: ${checkboxDimension}px;
  text-align: center;
  font-size: 12px;
  cursor: pointer;
  color: ${baseColor};
  user-select: none;
  padding: 0;
  margin: 0;
  display: block;

  :hover:not(:disabled) {
    color: #d14167;
    border-color: #d14167;
  }

  :active:not(:disabled) {
      opacity: 0.7;
  }

  :disabled {
      color: lightgray;
      border-color: lightgray;
      cursor: default;
  }
`;
