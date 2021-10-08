import styled from "@emotion/styled";
import { colors } from "../../../styles/colors";
import Image from "next/image";

interface Color {
  color: string;
}

export const StyleImg = styled.img`
  width: 350px;
  height: 350px;
  @media (min-width: 320px) and (max-width: 375px) {
    width: 285px;
    height: 285px;
  }
`;

export const StyleTextures = styled.div`
  p {
    margin: 12px 0;
  }
`;
export const StyleDimentions = styled.div`
  div {
    outline: 1px solid black;
    outline-offset: -2px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    border-radius: 5px;
  }
  p {
    font-size: 13px;
    padding: 5px;
  }
`;
export const StyleTexture = styled.img`
  height: 40px;
`;

export const StyleColors = styled.div`
  div {
    display: flex;
  }
`;

export const StyleColor = styled.div<Color>`
  width: 40px;
  height: 40px;
  border-radius: 5px;
  outline: 1px solid ${({ color }) => (color === "white" ? "black" : "none")};
  background-color: ${({ color }) => color};
  outline-offset: -1px;
  margin: 1px;
`;

export const StylePrayer = styled.p`
  width: 590px;
  font-size: 14px;
  @media (max-width: 1024px) {
    width: auto;
  }
  @media (min-width: 425px) and (max-width: 768px) {
    width: auto;
    text-align: center;
  }
  @media (max-width: 425px) {
    width: auto;
    text-align: center;
  }
`;
export const StyledStyle = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: space-around;
  margin: 0 0 100px 0;
  @media (max-width:768px){
    height: 1030px;
  }
`;
export const StyleInfo = styled.div`
  width: 602px;
  h2 {
    font-size: 36px;
    span {
      color: ${colors.green};
    }
  }
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  @media (min-width: 425px) and (max-width: 768px) {
    h2 {
      width: auto;
      text-align: center;
    }
  }
  @media (max-width: 425px) {
    h2 {
      width: auto;
      text-align: center;
    }
  }
`;
export const StyleChecks = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 200px);
  @media (min-width: 425px) and (max-width: 768px) {
    justify-content: center;
  }
  @media (max-width: 425px) {
    justify-content: center;
  }
  @media (min-width: 320px) and (max-width: 425px) {
    display: flex;
    flex-direction: column;
    margin: 0 0 0 50px;
  }
`;

export const StyleCheck = styled.article`
  display: flex;
  align-items: center;
  margin: 5px;
  img {
    width: 24px;
    height: 44px;
  }
  p {
    font-size: 13px;
  }
`;
export const StyleDetails = styled.aside`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding: 10px;
  width: 370px;
  background: #ffffff;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  @media (max-width: 425px) {
    width: auto;
    margin: 20px;
  }
`;
