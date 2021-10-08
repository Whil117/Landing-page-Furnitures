import styled from "@emotion/styled";
import { colors } from "../../colors";
import { fontsWeight } from "../../fonts";
interface Color {
  color: string;
}

export const StyledProducts = styled.div`
  margin: 0 0 100px 0;
`;

export const ProductsNavBar = styled.nav`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between;
  align-items: center; */
  padding: 0 50px;
  flex-wrap: wrap;
`;
export const ProductsNavBarTitle = styled.h3`
  font-size: 36px;
`;

export const Products = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const Product = styled.a`
  width: 200px;
  margin: 25px;
  color: ${colors.black};
  text-decoration: none;
  transition: 0.3s;
  padding: 10px;
  border-radius: 5px;
  img {
    width: 200px;
    height: 200px;
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
  @media (max-width:768px) {
    margin: 5px;
    padding: 0px;
  }
`;
export const ProductColors = styled.div<Color>`
  background-color: ${({ color }) => color};
  outline: 1px solid ${({ color }) => (color === "#FFFFFF" ? "black" : "none")};
  outline-offset: -1px;
  width: 30px;
  height: 30px;
  border-radius: 50px;
`;

export const ProductPrice = styled.p`
  font-weight: ${fontsWeight.bold};
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

export const ProductBoxLink = styled.div`
  display: flex;
  justify-content: center;
`;
