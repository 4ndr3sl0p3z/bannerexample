import styled from 'styled-components';
import defaultTheme from '../../theme/defaultTheme';


export const ContainerContent = styled.div`
    margin : 0px 10vw;
    padding : 20px;
    background : #fff;
    height : 100%;
    @media only screen and (max-width : ${defaultTheme.breakpoints[1]}){
        min-height : 100%;
        height : fit-content;
    }
`