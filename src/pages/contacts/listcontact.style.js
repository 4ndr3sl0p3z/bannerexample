import styled from 'styled-components';
import defaultTheme from '../../theme/defaultTheme';

export const ContainerListContact = styled.div`
`;

export const WrapperSearch = styled.div`
    span{
        font-weight: bold;
    }
`

export const ContainerListContactData = styled.div`
    display : flex;
    flex-wrap : wrap;
    gap : 10px;
    margin-top : 20px;
    >*{
        flex : 1 1 250px;
    }
    @media only screen and (max-width: ${defaultTheme.breakpoints[1]}) {
        gap : 0px;
        >*{
            flex : 1 1 100%;
        }
    }
`

export const CardContactInfo = styled.div`
    border : 1px solid #f2f2f2;
    padding : 20px;
    position : relative;
    .title{
        font-weight : bold;
    }
`

export const ActionContactCard = styled.div`
    display : flex;
    flex-direction : column;
    gap : 5px;
    position : absolute;
    right : 5px;
    top : 5px;
`