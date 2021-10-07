import styled from "@emotion/styled";
import { colors } from "../../colors";

export const NavBarTitle = styled.h1`
  font-size: 24px;
  color: ${colors.black};
  span {
    color: ${colors.green};
  }
  @media (max-width: 425px) {
    font-size: 18px;
  }
`;

export const NavBarMenu = styled.button`
  display: none;
  border: none;
  background-color: white;
  @media (max-width: 767px) {
    display: flex;
  }
`;
export const NavBarOptions = styled.div`
  display: flex;
  justify-content: space-between;
  width: 433px;
  margin: 0 0 0 50px;
  font-size: medium;

  a {
    text-decoration: none;
    color: ${colors.black};
  }
  a:hover {
    text-decoration: underline;
    color: ${colors.green};
  }
  @media (max-width: 767px) {
    display: none;
  }
`;

export const StyledNavBar = styled.nav`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  background: #ffffff;
  color: ${colors.black};
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
  margin: 0 0 100px 0;
  top: 0;
  position: sticky;
  z-index: 10;
  @media (max-width: 767px) {
    justify-content: space-between;
  }
`;
