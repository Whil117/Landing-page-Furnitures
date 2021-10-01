import styled from "@emotion/styled";
import { colors } from "../../colors";

type Active = {
    active:Boolean
}

export const LabelOption = styled.label<Active>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 50px;
  height: 20px;
  color:${({active})=> active ? colors.white : colors.black};
  background: ${({active})=> active? colors.green : colors.gray};
  border-radius: 5px;
`;
