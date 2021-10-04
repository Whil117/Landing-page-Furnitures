import styled from "@emotion/styled";
import { colors } from "../../colors";
import { fontsWeight } from "../../fonts";

export const Phrase = styled.p`
  width: 440px;
  height: 42px;
  font-size: medium;
`;

export const EsloganSmall = styled.p`
  margin: 0;
  color: ${colors.green};
  font-size: x-large;
  font-weight: ${fontsWeight.medium};
`;

export const Eslogan = styled.p`
  width: 462px;
  font-size: 48px;
  font-weight: ${fontsWeight.medium};
  margin: 10px 0;
`;
export const BuyNow = styled.a`
  transition: 0.3s;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  width: 110px;
  color: ${colors.white};
  font-weight: ${fontsWeight.bold};
  font-size: medium;
  text-decoration: none;
  background: ${colors.green};
  border-radius: 5px;
  &:hover {
    transition: 0.3s;

    /* border: 1px solid ${colors.green}; */
    outline: 1px solid ${colors.green};
    outline-offset: -2px;
    color: ${colors.green};
    background-color: ${colors.white};
    /* text-decoration: underline; */
  }
`;

export const EHome = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  margin: 120px 0;
  .slider {
    width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (max-width: 600px) {
      width: 500px;
    }
  }
  @media (max-width: 870px) {
    padding: 20px 50px;
  }
`;
