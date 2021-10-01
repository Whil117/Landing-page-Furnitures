import styled from "@emotion/styled";
import { fontsWeight } from "../../fonts";
import { colors } from "../../colors";



export const EServices = styled.div`
    margin:150px 0 ;
    .EServicesBlock1 {
        display: flex;
        flex-direction: column;
        align-items: center;
        h1{
            font-weight: ${fontsWeight.medium};
            font-size: 36px;
            margin: 10px;
            span{
                color:${colors.green};
            }
        }
        p{
            font-size: 14px;
            margin:0;
        }
    }
    .EServicesBlock2{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        margin: 20px 0;
    }
` 