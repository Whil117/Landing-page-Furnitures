import styled from "@emotion/styled";
import { fontsWeight } from "../../fonts";
import { colors } from "../../colors";

export const EServices = styled.div`
  margin: 120px 0;
`;
export const DivTitle = styled.div`
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
`;

export const Cards = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 20px 0;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 21px 25px;
  /* width: 260px; */
  height: 181px;
  background: #ffffff;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  /* margin: 10x; */
  transition: 0.3s;
  transform: scale(0.9, 0.9);
`;
export const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    margin: 10px 0;
  }
  p {
    margin: 0;
  }
`;
