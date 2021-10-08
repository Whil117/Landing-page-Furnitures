import styled from '@emotion/styled'
import { colors } from '../../colors'

export const ClientsNavBar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    h3{
        font-size: 36px;
        span{
            color:${colors.green};
        }
    }
    @media (max-width:425px){
        h3{
            text-align:center;
        }
        p{
            text-align:center;
        }
    }
    /* justify-content: center; */
`

export const Clients = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    @media (max-width:768px){
        justify-content: space-around;
    }
`

export const ClientsCardDesc = styled.div`
    width: 268px;
    padding: 5px;
`
export const ClientsCard = styled.div`
    /* width: 455px; */
    display: flex;
    flex-wrap: wrap;
    @media (max-width:768px){
        /* align-items: center; */
        /* justify-content: space-around; */
        align-items: center;
        flex-direction: column;
    }
`
export const StyledClients = styled.div`
    margin:0 0 100px;
`