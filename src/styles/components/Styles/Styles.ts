import styled from "@emotion/styled";
import { colors } from "../../../styles/colors";

interface Color {
  color: string;
}
export const Dimentions = styled.div`
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
export const Texture = styled.img`
  height: 40px;
`;

export const ColorsBox = styled.div`
  div {
    display: flex;
  }
`;

export const Colors = styled.div<Color>`
  width: 40px;
  height: 40px;
  border-radius: 5px;
  outline: 1px solid ${({ color }) => (color === "white" ? "black" : "none")};
  background-color: ${({ color }) => color};
  outline-offset: -2px;
  margin: 1px;
`;

export const TextInformation = styled.p`
  width: 602px;
  font-size: 14px;
`;

export const Style = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px 100px;
`;
export const StyleDivDetails = styled.div`
  width: 602px;
  h2 {
    font-size: 36px;
    span {
      color: ${colors.green};
    }
  }
`;
export const ChecksDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 200px);
`;

export const Check = styled.article`
  display: flex;
  margin: 5px;
  img {
    width: 24px;
    height: 44px;
  }
  p {
    font-size: 12px;
  }
`;
export const StyleDetails = styled.aside`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding: 16px 23px;
  width: 370px;
  background: #ffffff;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;
