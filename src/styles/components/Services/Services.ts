import styled from "@emotion/styled";
import { fontsWeight } from "../../fonts";
import { colors } from "../../colors";

export const StyledServices = styled.div`
  margin: 0 0 100px 0;

`
export const ServicesTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-weight: ${fontsWeight.medium};
    font-size: 36px;
    margin: 10px;
    span {
      color: ${colors.green};
    }
  }
  p {
    font-size: 14px;
    margin: 0;
  }
  /* @media (max-width:425px){
    h1{
      text-align:center;
      width:376px;
    }
    p{
            text-align:center;
      width:376px;
    }
  } */
    @media (min-width: 425px) and (max-width: 768px) {
          h1{
      text-align:center;
      width:auto;
    }
    p{
      text-align:center;
      width:auto;

    }
  }
  @media (min-width: 375px) and (max-width: 425px) {
       h1{
      text-align:center;
      width:auto;
    }
    p{
      text-align:center;
      width:auto;

    }
  }
  @media (min-width: 320px) and (max-width: 375px) {
    h1{
      text-align:center;
      width:auto;
    }
    p{
      text-align:center;
      width:auto;

    }
  }
    /* @media (min-width: 768px) and (max-width:1024px) {
    width: 520px;
  } */
`;

export const ServicesCards = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 20px 0;
`;

export const ServicesCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 21px 25px;
  height: 158px;
  width:177px;
  background: #ffffff;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  transition: 0.3s;
  transform: scale(0.9, 0.9);
  @media (min-width: 375px) and (max-width: 425px) {
    padding:5px;

  }
    @media (min-width: 425px) and (max-width: 768px) {
      padding:11px 15px;
  }
`;
export const ServicesCardDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  h2 {
    margin: 10px 0;
  }
  p {
    margin: 0;
  }
`;
