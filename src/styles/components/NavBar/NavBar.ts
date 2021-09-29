import styled from "@emotion/styled";
import { colors } from "../../colors";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding: 20px 100px;
  width: 1500px;
  height: 91px;
  background: #ffffff;
  color: ${colors.black};
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
`;
export const Nav_Options = styled.div`
  display: flex;
  justify-content: space-between;
  width: 433px;
  margin: 0 0 0 50px;
  font-size: large;
  a {
    text-decoration: none;
    color: ${colors.black};
  }
  a:hover {
    text-decoration: underline;
    color: ${colors.green};
  }
`;
