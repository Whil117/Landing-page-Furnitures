import styled from "@emotion/styled";
import { colors } from "../../colors";


export const FoooterOptions = styled.div`
    display: flex;
`
export const FooterCopyright = styled.p`
  margin: 0;
  text-align: center;
`;

export const FooterLink = styled.li`
    margin: 15px 0;
  a {
    color: ${colors.white};
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
`;
export const FooterBody = styled.div`
margin: 0 0 20px 0;
  h1 {
    span {
      color: ${colors.green};
    }
  }
  @media (max-width:425px){
      display: flex;
      flex-direction: column;
      align-items: center;
  }
`;

export const StyledFooter = styled.footer`
  /* height: 300px; */
  padding:20px;
  color: ${colors.white};

  background-color: ${colors.black};
  ul {
    li {
      list-style: none;
    }
  }
  @media (max-width:425px){
      display: flex;
      flex-direction: column;
      align-items: center;
  }
`;
