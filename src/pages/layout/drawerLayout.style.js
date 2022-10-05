import styled from 'styled-components';
import defaultTheme from '../../theme/defaultTheme';

export const ContainerFooterDrawer = styled.div`
    display : flex;
    justify-content : center;
    align-items : center;
    cursor: pointer;
    button{
        background : transparent;
        border: 1px solid #fff;
        width : 100%;
        border-radius : 0px;
        :hover{
            background : transparent;
            border: 1px solid #fff;
        }
    }
    span{
        color : #fff;
        font-size : 16px;
        margin-right : 10px;
    }
    svg{
        font-size : 30px;
        color : #fff;
        position : absolute;
        right : 10px;
    }
`

export const ContainerMenuMobile = styled.div`
    .separator{
        height : 50px;
    }
`