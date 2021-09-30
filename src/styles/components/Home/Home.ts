import styled from "@emotion/styled";
import { colors } from "../../colors";
import { fontsWeight } from "../../fonts";

export const Eslogan = styled.p`
    width: 462px;
    font-size: 48px;
    font-weight: ${fontsWeight.medium};
`
export const BuyNow = styled.a`
cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px;
    width: 110px;
    color:${colors.white};
    font-weight: ${fontsWeight.bold};
    font-size: medium;
    text-decoration: none;
    background: #6BC742;
    border-radius: 5px;
    &:hover{
        text-decoration: underline;
    }
`