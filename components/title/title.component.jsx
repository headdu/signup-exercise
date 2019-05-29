import React from "react";
import * as S from "./title.styled";

const Title = ({ title, className }) => {
  return (
    <S.TitleContainer className={className}>
      <S.Title>{title}</S.Title>
      <S.Underline />
    </S.TitleContainer>
  );
};

export default Title;
