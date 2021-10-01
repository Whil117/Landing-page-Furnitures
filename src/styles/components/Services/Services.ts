import styled from "@emotion/styled";
import { colors } from "../../colors";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 21px 30px;
  width: 260px;
  height: 181px;
  background: #ffffff;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  cursor: pointer;
  margin: 10x;
  transition: 0.3s;
  transform: scale(0.9,0.9);
  &:hover {
    transform: scale(1,1);
    color: white;
    background-color: ${colors.green};
  }
  img{

    background-color:white;
    padding:5px;
    border-radius:5px;
    svg{
      path{
        fill: white;
      }
    }
  }
  .CardBlock {
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
      margin: 10px 0;
    }
    p {
      margin: 0;
    }
  }
`;
