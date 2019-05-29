import React, { useState } from "react";
import * as S from "./tabs.styled";

const Tabs = ({ tabArray, className }) => {
  const [selected, setSelected] = useState(0);

  const getOnTabClick = (tab, index) => event => {
    setSelected(index);
    tab.onClick();
  };

  return (
    <S.TabsContainer className={className}>
      {tabArray.map((t, idx) => (
        <S.Tab
          key={idx}
          selected={selected === idx}
          onClick={getOnTabClick(t, idx)}
        >
          {t.label}
        </S.Tab>
      ))}
    </S.TabsContainer>
  );
};

export default Tabs;
