import styled from 'styled-components';
import defaultTheme from '../../theme/defaultTheme';

export const ContainerOptionsContact = styled.div`
    display : flex;
    flex-direction : column;
    gap : 5px;
    border-right : 1px solid #f2f2f2;
    padding-right : 5px;
    height : 100%;
    div{
        width : 100%;
        padding : 10px;
        cursor : pointer;
        display : flex;
        position : relative;
        align-items : center;
        border-bottom : 1px solid #f2f2f2;
        border-top : 1px solid #f2f2f2;
    }
    span{
        margin-left : 10px;
        font-weight : bold;
        color : #000;
    }
    .selected{
        /* background : ${defaultTheme.backgroundPrimary[0]};     */
        color : ${defaultTheme.backgroundPrimary[0]};
        ::before{
            display : flex;
            content : '';
            height : 100%;
            width : 5px;
            background : ${defaultTheme.backgroundPrimary[0]};
            position : absolute;
            left : 0px;
            border-top-left-radius : 10px;
            border-bottom-left-radius : 10px;
        }
    }

    @media only screen and (max-width: ${defaultTheme.breakpoints[2]}){
        flex-direction : row;
        gap : 0px;
        margin-bottom : 20px;  
        border-right : none;     
    }
`

export const ContainerIndexContact = styled.div`
    display : flex;
    height : 100%;
    gap : 10px;
    .left{
        flex : 6;
    }
    .right {
        flex : 16;
    }
    @media only screen and (max-width : ${defaultTheme.breakpoints[2]}){
        flex-direction : column;
        .left{
            flex : none;
        }
        .right{
            
        }
    }
`