import styled from "@emotion/styled";

const buttonHeight = 40;
const selectedColor = "#4c5b9b";
const unselectedColor = "#fff";

export const TabsContainer = styled.div`
  width: max-content;
`;

export const Tab = styled.button`
  height: ${buttonHeight}px;
  line-height: ${buttonHeight}px;
  ${props =>
    props.selected
      ? `
        background: ${selectedColor};
        color: ${unselectedColor};
        `
      : `
        color: ${selectedColor};
        background: ${unselectedColor};
        `}
  :hover {
    background-color: #6579d3;
  }
  :active {
    opacity: 0.7;
  }
  border: 0;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  cursor: pointer;
`;
