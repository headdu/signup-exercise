import React from "react";
import PrimaryButton from "../../components/primary-button/primary-button.component";
import * as S from "./authentication.styled";

const AuthenticationLayout = () => {
  const tabs = [
    {
      label: "SIGN UP",
      onClick: () => {}
    },
    {
      label: "LOGIN",
      onClick: () => {}
    }
  ];
  return (
    <S.Container>
      <S.Card>
        <S.TitleSection>
          <img src="/static/logo.png" alt="logo" />

          <S.CenteredTitle title="Sign Up" />
          <S.ArrowDetail>></S.ArrowDetail>
        </S.TitleSection>
        <S.FormSection>
          <S.AlignedTabs tabArray={tabs} />
          <S.Form>
            <S.SeparatedInput
              placeholder="Enter your full name"
              name="full-name"
              title="FULL NAME"
            />
            <S.SeparatedInput
              placeholder="Enter your password"
              name="password"
              title="Password"
              type="password"
            />
            <S.SeparatedInput
              placeholder="Enter your email"
              name="email"
              title="Email"
            />
            <S.TermsContainer>
              <S.SeparatedCheckbox name="terms-and-conditions" />
              <S.TermsAnchor>
                I agree all statement in&nbsp;
                <S.TermsHighlight>term of service</S.TermsHighlight>
              </S.TermsAnchor>
            </S.TermsContainer>
            <PrimaryButton onClick={e => e.preventDefault()}>
              SIGN UP
            </PrimaryButton>
          </S.Form>
        </S.FormSection>
      </S.Card>
    </S.Container>
  );
};

export default AuthenticationLayout;
