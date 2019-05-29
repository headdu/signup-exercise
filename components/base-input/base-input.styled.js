import styled from "@emotion/styled";

const baseColor = "#ed6879";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BaseInput = styled.input`
  color: #333;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: 1px solid ${baseColor};
  padding: 8px 0;

  &::placeholder {
    color: ${baseColor};
  }

  &:disabled {
    background-color: #fff;
    border-color: lightgray;
    ::placeholder {
      color: lightgray;
    }
  }

  :hover:not(:disabled) {
    ::placeholder {
      color: #d14167;
    }
    border-color: #d14167;
  }

  :active:not(:disabled) {
    opacity: 0.7;
  }
`;

export const InputLabel = styled.label`
  font-size: 24px;
  color: ${baseColor};
`;
