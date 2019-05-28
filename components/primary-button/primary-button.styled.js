import styled from "@emotion/styled";

const buttonHeight = 64;

export const PrimaryButton = styled.button`
  padding: 0 32px;
  background-color: ${props => props.backgroundColor};
  font-size: 24px;
  border-radius: 2px;
  color: ${props => props.color};
  font-weight: bold;
  cursor: pointer;
  border: 0;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  height: ${buttonHeight}px;
  line-height: ${buttonHeight}px;

  &:hover:not(:disabled) {
    color: ${props => props.backgroundColor};
    background-color: ${props => props.color};
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }

  :active:not(:disabled) {
    opacity: 0.7;
  }

  &:disabled {
    background-color: lightgray;
    cursor: default;
    box-shadow: unset;
  }
`;
