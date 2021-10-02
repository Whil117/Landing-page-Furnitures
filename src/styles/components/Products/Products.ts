import styled from "@emotion/styled";
import { colors } from "../../colors";
import { fontsWeight } from "../../fonts";

type Active = {
    active:Boolean
}

export const LabelOption = styled.label<Active>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 50px;
  font-weight: ${({active})=>active ? fontsWeight.medium : fontsWeight.regular};
  height: 20px;
  color:${({active})=> active ? colors.white : colors.black};
  background: ${({active})=> active? colors.green : colors.gray};
  border-radius: 5px;
  transition: 0.3s;
`;
export const Card = styled.div`
  width: 265px;
  margin: 20px;
  /* height: 412px; */
`