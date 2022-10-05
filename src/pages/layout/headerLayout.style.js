import styled from 'styled-components';
import defaultTheme from '../../theme/defaultTheme';

export const HeaderCustom = styled.header`
    position : fixed;
    z-index : 1;
    width : 100%;
    background : ${defaultTheme.backgroundPrimary[0]};
    display : flex;
    padding : 10px;
    justify-content : center;
    height : 64px;
`

export const ContainerHeader = styled.div`
    display : flex;
    width : 80vw;
    gap : 10px;
    box-sizing : border-box;
    position : relative;
    overflow : hidden;
    .containerTitleHeader{
        display : flex;
        flex-direction : column;
        justify-content : center;
        height : 100%;
        line-height : 25px;
        span{
            color : #fff;
            font-weight : bold;
            font-family : "Space Age";
            ::selection{
                background : transparent;
            }
        }
        .title {
            font-size : 50px;
            color : #FFCE4C;
        }
        .subtitle {
            font-size : 20px;
        }
    }
    .containerMenu{
        flex: 1;
    }
    .containerUserMenu{
        display : flex;
        align-items : center;
        justify-content : flex-end;
        gap : 0px;
        .ant-avatar {
            cursor: pointer;            
        }
        .ant-badge{
            margin-right : 15px;
            cursor: pointer;
        }
        svg{
            font-size : 25px;
            color : #fff;
        }
    }
    @media only screen and (max-width: ${defaultTheme.breakpoints[2]}){
        display : flex;
        .containerMenu{
            visibility : collapse;
            width : 0px;
        }
        .containerTitleHeader{
            flex: 1;
        }
        .containerUserMenu{
            flex : 1;       
            .ant-badge{
                margin-right : 0px;
            }     
        }
    }
    @media only screen and (max-width: ${defaultTheme.breakpoints[1]}){
        transition : 1s all;
        .containerTitleHeader{
            flex: 1;
            line-height : 22px;
        }
    }
`

export const ContainerUserName = styled.div`
    color : #fff;
    font-size : 16px;
    font-weight : bold;

    @media only screen and (max-width: ${defaultTheme.breakpoints[2]}){
        width : 0px;
        visibility : hidden;
    }
`

export const ContainerUserAvatar = styled.div`
    display : flex;
    flex-direction : column;
    a{
        margin-bottom : 5px;
        padding : 10px;
        font-weight : 500;
        :hover{
            background : ${defaultTheme.primary[0]};
            a{
                color : ${defaultTheme.primary[1]};
            }
        }
    }
    .activeUrl{
        border-right : 3px solid ${defaultTheme.primary[1]};
        background : ${defaultTheme.primary[0]};
        color : ${defaultTheme.primary[1]};
    }
`   

export const WrapperAvatarMenu = styled.div`
    display : flex;
    align-items : center;
    padding  : 15px 0px;
    .containerAvatar{
        width : 50px;
        margin-right : 10px;
        .ant-avatar{
            background : black;
        }
    }
    .containerInfoUser{
        flex : 1;
        .username{
            font-size : 1rem;
            font-weight : bolder;
        }
        .email{
            font-size: 12px;
        }
    }
    /* @media only screen and (max-width: ${defaultTheme.breakpoints[2]}){
        .containerAvatar{
            width : 0px;
        }
    } */
`

export const ContainerPopoverMenu = styled.div`
    margin-left : 20px;
    @media only screen and (max-width: ${defaultTheme.breakpoints[2]}){
        width : 0px;
        visibility : hidden;
        margin-left : 0px;
    }
`

export const ContainerIconMenuMobile = styled.div`
    visibility : hidden;
    width : 0px;
    svg{
        cursor: pointer;
        color : #fff;
        font-size : 25px;
    }

    @media only screen and (max-width: ${defaultTheme.breakpoints[2]}){
        visibility : visible;
        width : 50px;
        display : flex;
        align-items : center;
        justify-content : flex-end;
    }
`