import styled from "@emotion/styled";
import { colors } from "../../colors";
import { fontsWeight } from "../../fonts";

export const HomeSliderImg = styled.img`
  width: 550px;
  height: 350px;
  border-radius: 5px;
`;

export const HomeEsloganBox = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const HomePhrase = styled.p`
  width: 440px;
  height: 42px;
  font-size: medium;
  @media (max-width: 768px) {
    width: auto;
    text-align: center;
  }
`;

export const HomeEsloganSmall = styled.p`
  margin: 0;
  color: ${colors.green};
  font-size: x-large;
  font-weight: ${fontsWeight.medium};
`;

export const HomeEslogan = styled.p`
  width: 462px;
  font-size: 48px;
  font-weight: ${fontsWeight.medium};
  margin: 10px 0;
  span {
    color: ${colors.green};
  }
  @media (max-width: 768px) {
    width: auto;
    text-align: center;
  }
`;
export const HomeBuy = styled.a`
  transition: 0.3s;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 110px;
  color: ${colors.white};
  font-weight: ${fontsWeight.bold};
  font-size: medium;
  text-decoration: none;
  background: ${colors.green};
  border-radius: 5px;
  outline-offset: -1px;

  &:hover {
    transition: 0.3s;
    outline: 1px solid ${colors.green};
    color: ${colors.green};
    background-color: ${colors.white};
  }
`;
export const StyledHome = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;

  @media (max-width: 768px) {
    height: 700px;
  }
  @media (max-width: 425px) {
    height: 800px;
  }
  @media (max-width: 320px) {
    height: 900px;
  }
`;

export const HomeSlider = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  @media (max-width:1024px){
    width: 460px;
  }
  @media (max-width: 425px) {
    width: 405px;
  }
  @media (max-width: 375px) {
    width: 355px;
  }
  @media (max-width: 320px) {
    width: 300px;
  }
`;
