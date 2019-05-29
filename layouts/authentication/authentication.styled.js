import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";
import Title from "../../components/title/title.component";
import Tabs from "../../components/tabs/tabs.component";
import BaseInput from "../../components/base-input/base-input.component";
import Checkbox from "../../components/checkbox/checkbox.component";

const imageHeight = 72;
const arrowDetailHeight = 72;
const topGradientColor = "#d14167";
const bottomGradientColor = "#ea5669";

const rotationDisappearAnimation = keyframes`
  0% {
    opacity: 1;
    transform: rotate(0deg);
  }

  100% {
    opacity: 0;
    transform: rotate(180deg);
  }
`;

const rotationAppearAnimation = keyframes`
  0% {
    opacity: 0;
    transform: rotate(180deg);
  }

  100% {
    opacity: 1;
    transform: rotate(0deg);
  }
`;

// Styled components
export const Container = styled.div`
  background: url("/static/background.jpg");
  padding: 128px 72px;
  height: 100%;
  width: 100%;
  display: flex;

  transition: padding 0.2s ease-out;

  @media screen and (max-width: 1024px) {
    padding: 32px; 16px;
  }
`;

export const Card = styled.div`
  border-radius: 2px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  flex: 1;
  display: flex;
  overflow: hidden;
`;

export const ArrowDetail = styled.div`
  height: ${arrowDetailHeight}px;
  width: ${arrowDetailHeight}px;
  right: -${arrowDetailHeight / 2}px;
  border-radius: 50%;
  top: calc(50% - ${arrowDetailHeight / 2}px);
  position: absolute;
  background: ${topGradientColor};
  text-align: center;
  font-size: 44px;
  line-height: ${arrowDetailHeight}px;
  color: #fff;
  animation: ${rotationAppearAnimation} 0.2s ease-out forwards;

  @media screen and (max-width: 1024px) {
    animation: ${rotationDisappearAnimation} 0.2s ease-out forwards;
  }
`;

export const TitleSection = styled.section`
  background: linear-gradient(
    to bottom,
    ${topGradientColor} 60%,
    ${bottomGradientColor} 100%
  );
  padding: 32px;
  position: relative;
  flex: 1;

  img {
    min-height: ${imageHeight}px;
    height: ${imageHeight}px;
    width: auto;
  }

  transition: all 0.2s ease-out;

  @media screen and (max-width: 1024px) {
    flex: 0;
    padding: 0;

    img {
      display: none;
    }
  }
`;

export const FormSection = styled.section`
  flex: 2;
  background: #ffffff;
  padding: 16px 32px;
`;

export const Form = styled.form`
  padding-left: 32px;
  padding-right: 32px;
`;

export const SeparatedInput = styled(BaseInput)`
  margin-bottom: 16px;
`;

export const SeparatedCheckbox = styled(Checkbox)`
  margin-right: 8px;
`;

export const TermsContainer = styled.div`
  display: flex;
  color: #ed6879;
  font-size: 16px;
  margin-bottom: 32px;
  align-items: center;
`;

export const TermsAnchor = styled.a`
  cursor: pointer;
`;

export const TermsHighlight = styled.span`
  text-decoration: underline;
`;

export const CenteredTitle = styled(Title)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

export const AlignedTabs = styled(Tabs)`
  margin-left: auto;
  margin-bottom: 16px;
`;
