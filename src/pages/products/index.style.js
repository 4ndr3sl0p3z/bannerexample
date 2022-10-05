import styled, { keyframes } from 'styled-components';

const animation = keyframes`
    from {
        transform : rotate(0deg);
    }
    to{
        transform : rotate(360deg);        
    }
`

const animation2 = keyframes`
    from {
        transform : rotate(0deg);
    }
    to{
        transform : rotate(360deg);        
    }
`

export const ContainerIndexProducts = styled.div`
    display : flex;
    flex-direction : column;
    height : 100%;
    position : relative;
    box-sizing : border-box;
    overflow : hidden;
    border-top-left-radius : 100px;
    border-top-right-radius : 100px;

    .torre1{
        width : 120px;
        height : 100%;
        background : gray;
    }
    .torre2{
        width : 100%;
        height : 120px;
        background : gray;
    }
    .torre3{
        width : 120px;
        height : 100%;
        background : gray;
    }
    .torre4{
        background : gray;
        flex: 1;
        display : flex;
        position : relative;

    }
    .torre5{
        width : 100%;
        height : 100%;
        background : white;
        border-top-left-radius : 100px;
        border-top-right-radius : 100px;
        display : flex;
        position : relative;
        justify-content : center;
        align-items : center;
        
    }
    .torre6{
        display: flex;
        width : 100%;
        background : red;
        height : 100%;
    }
    .abajo{
        display : flex;
        justify-content : center;
        align-items : center;
        padding : 20px;
        border-radius : 50%;
        height : 100px;
        width : 100px;
        position : absolute;
    }

    .arriba{
        display : flex;
        justify-content : center;
        align-items : center;
        padding : 20px;
        border-radius : 50%;
        height : 10px;
        width  : 10px;
        position : absolute;
        z-index :1;
        animation: ${animation} 5s linear infinite;
        .icon1{
            font-size : 50px;
            color : blue;
            position : absolute;
            left : -25px;
            animation : ${animation2} 10s linear infinite;
        }
    }

`

export const IndexProductsLeft = styled.div`
    display : flex;
    width : 300px;
    position : sticky;
    top : 0px;
    
`

export const IndexProductsRight = styled.div`
    flex : 1;
    background : green;
`