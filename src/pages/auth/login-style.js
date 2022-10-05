import styled from "styled-components";
import defaultTheme from "../../theme/defaultTheme";

export const ContainerComponentLogin = styled.div`
    display : flex;
    box-sizing : border-box;
    background : #0c3954;
    height : 100vh;
    width : 100%;
    justify-content : center;
    align-items : center;
    
`

export const ContainerLogin = styled.div`
    width : 40vw;
    height : 80vh;
    background : #fff;
    border-radius : 30px;
    box-sizing : border-box;
    padding : 20px 80px 20px 80px;
    display : flex;
    flex-direction : column;
    position : relative;
    overflow : hidden;

    .image{
        display : flex;
        justify-content : center;
        align-items : center;
        height : 30%;
        img{
            width : 100%;
        }
    }
    
    @media only screen and (max-width : ${defaultTheme.breakpoints[2]}){
        width : 80vw;
    }    
    @media only screen and (max-width : ${defaultTheme.breakpoints[1]}){
        width : 90vw;
        padding : 50px 40px;
        height : 70vh;
        min-height : 70vh;
    } 
`

export const ContainerFormLogin = styled.div`
    flex-grow : 1;
    box-sizing : border-box;
    display : flex;
    justify-content: center;    
    align-items : center;
    flex-direction : column;
    position : relative;

    form{
        width : 100%;
        margin-top : 40px;
    }

    .title{
        top : 10px;
        font-weight : bold;
        font-size : 30px;
        color : #000;
        font-family : "Neuropol";
    }

    .btnAutenticar{
        margin-top : 20px;
        width : 100%;
        button{
            width : 100%;
            background : ${defaultTheme.primary[0]};
            border : 1px solid ${defaultTheme.primary[0]};
            color : ${defaultTheme.primary[1]};
            font-weight : bold;
            :hover{
                background : ${defaultTheme.primary[1]};
                border : 1px solid ${defaultTheme.primary[1]};
                color : ${defaultTheme.primary[0]};
            }
        }
    }
`