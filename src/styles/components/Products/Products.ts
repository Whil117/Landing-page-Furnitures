import styled from "@emotion/styled";
import { colors } from "../../colors";
import { fontsWeight } from "../../fonts";

export const Title = styled.h3`
  font-size: 36px;
  top: -100px;
`;
type Active = {
  active: Boolean;
};

export const DData = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const DCategory = styled.div`
  display: flex;
  justify-content: space-around;
  width: 400px;
  div {
    input {
      display: none;
    }
  }
`;

export const Navegation = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0 100px;
  flex-wrap: wrap;
  align-items: center;
`;

export const LabelOption = styled.label<Active>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 50px;
  font-weight: ${({ active }) =>
    active ? fontsWeight.medium : fontsWeight.regular};
  height: 20px;
  color: ${({ active }) => (active ? colors.white : colors.black)};
  background: ${({ active }) => (active ? colors.green : colors.gray)};
  border-radius: 5px;
  transition: 0.3s;
`;
export const Card = styled.a`
  width: 250px;
  margin: 20px;
  color: ${colors.black};
  text-decoration: none;
  transition: 0.3s;
  padding: 10px;
  border-radius: 5px;
  img {
    width: 250px;
    height: 250px;
  }
  div {
    display: flex;
    justify-content: space-between;
    div {
      display: flex;
    }
  }
  &:hover {
    transition: 0.3s;
    transform: scale(1.1, 1.1);
    background: #ffffff;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
  }
`;

interface Color {
  color: string;
}
export const ColorCircle = styled.div<Color>`
  background-color: ${({ color }) => color};
  outline: 1px solid ${({ color }) => (color === "#FFFFFF" ? "black" : "none")};
  outline-offset: -1px;
  width: 30px;
  height: 30px;
  border-radius: 50px;
`;
export const Price = styled.p`
  font-weight: ${fontsWeight.bold};
`;

export const ProductsDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const ProductsLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 177px;
  border: 1px solid ${colors.green};
  box-sizing: border-box;
  border-radius: 5px;
  text-decoration: none;
  color: ${colors.green};
  font-weight: ${fontsWeight.bold};
`;
