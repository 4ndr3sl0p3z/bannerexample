import { createGlobalStyle } from 'styled-components';
import defaultTheme from './defaultTheme';

const GlobalStyle = createGlobalStyle`

    body {
        margin: 0;
        padding: 0;
        overflow-x: hidden;
        -webkit-tap-highlight-color: transparent;
        font-family : 'Open Sans';
    }

    @keyframes sizeIcon {
        0%{ transform: scale(1);}
        100%{ transform: scale(1.5);}
    }

    button{
        height : 40px;
        max-height : 40px;
        padding : 9px;
        cursor: pointer;
        display : flex;
        justify-content : center;
        align-items : center;
        position : relative;
        :disabled{
            border : none !important;
        }
    }

    .warning{
        background : ${defaultTheme.warning[0]};
        border : 1px solid ${defaultTheme.warning[0]};
        border-radius : 50%;
        width : 40px;
        svg{
            font-size : 20px;     
            color : ${defaultTheme.warning[1]};
        }
        :hover{
            box-shadow: ${defaultTheme.warning[1]} 0px 8px 24px;
        }
    }  

    .danger{
        background : ${defaultTheme.error[0]};
        border : none;
        border-radius : 50%;
        width : 40px;
        svg{
            font-size : 20px;
            color : ${defaultTheme.error[1]};
        }
        :hover{
            box-shadow: ${defaultTheme.error[1]} 0px 8px 24px;
        }
    }

    .success{
        background : ${defaultTheme.success[0]};
        border : 1px solid ${defaultTheme.success[0]};
        border-radius : 50%;
        width : 40px;
        svg{
            font-size : 20px;
            color : ${defaultTheme.success[1]};
        }
        :hover{
            /* border : 1px solid #1E8449; */
            box-shadow: ${defaultTheme.success[1]} 0px 8px 24px;
        }
    }

    .dangerButton{
        border : 1px solid ${defaultTheme.error[1]};
        background : ${defaultTheme.error[1]};
        color : #fff;
        border-radius : 5px;
        :hover{
            border : 1px solid ${defaultTheme.error[1]};
            background : ${defaultTheme.error[0]};
            color : ${defaultTheme.error[1]};
        }
    }

    .primaryButton {
        border : 1px solid ${defaultTheme.primary[1]};
        background : ${defaultTheme.primary[1]};
        color : #fff;
        border-radius : 5px;
        gap : 10px;
        :hover{
            border : 1px solid ${defaultTheme.primary[1]};
            background : ${defaultTheme.primary[0]};
            color : ${defaultTheme.primary[1]};
        }
    }

    .successButton{
        border : 1px solid ${defaultTheme.success[1]};
        background : ${defaultTheme.success[1]};
        color : #fff;
        border-radius : 5px;
        svg{
            margin-right : 5px;
            font-size : 16px;
        }
        :hover{
            border : 1px solid ${defaultTheme.success[1]};
            color : ${defaultTheme.success[1]};
            background : ${defaultTheme.success[0]};
        }
    }

    .warningButton{
        border : 1px solid ${defaultTheme.warning[1]};
        background : ${defaultTheme.warning[1]};
        color : #fff;
        border-radius : 5px;
        svg{
            margin-right : 5px;
            font-size : 16px;
        }
        :hover{
            border : 1px solid ${defaultTheme.warning[1]};
            color : ${defaultTheme.warning[1]};
            background : ${defaultTheme.warning[0]};
            svg{
                animation : sizeIcon 0.5s linear infinite;
                animation-iteration-count : 3;
            }
        }
    }

    .ant-layout-sider{
        background : #0D47A1;
    }

    .ant-drawer-body{
        background : ${defaultTheme.backgroundPrimary[0]};
        /* .ant-menu{
            background : transparent !important;
            border : none;
            a{
                color : #fff;
            }
            .ant-menu-item-active{
                background : ${defaultTheme.primary[0]};
                a{
                    color : #000;
                }            
            }
            .ant-menu-item-selected{
                background : ${defaultTheme.primary[0]} !important;
                span{
                    a{
                        color : #000;
                    }
                }
                svg{
                    fill : #000;
                }
            }
            .ant-menu-submenu, .ant-menu-submenu-active, .ant-menu-submenu-selected, .ant-menu-submenu-inline{
                span{
                    color : #fff;
                }
                i{
                    color : #fff;
                }
                :hover{
                    i{
                        color : #fff;
                    }
                }
                .ant-menu-submenu-title{
                    :hover{
                        i{
                            color : #fff;
                        }
                    }
                }
            }
        } */
    }

    .ant-drawer-header{
        background : ${defaultTheme.backgroundPrimary[0]};
        height : 65px;
        border-radius : 0px;
        .titleDrawer{
            font-size : 40px;
            display : flex;
            justify-content : center;
            align-items: center;
            color : #fff;
            cursor: pointer;
        }
    }

    .ant-drawer-footer{
        background : ${defaultTheme.backgroundPrimary[0]};
        border : none;
    }
    
    .ant-drawer-left.ant-drawer-open .ant-drawer-content-wrapper {
         box-shadow : none;
    }

    .ant-modal-header{
        border-top-left-radius : 10px;
        border-top-right-radius : 10px;
        display : flex;
        justify-content : center;
        align-items : center;
        background : ${defaultTheme.primary[1]};
        span, .ant-modal-title, h2, h3{
            color : #fff;
        } 
    }

    .ant-modal-content{
        border-radius : 10px;
        .ant-modal-close{
            position : absolute;
            top : 8px;
            right : 8px;
            border-radius: 50%;
            height : 40px;
            width : 40px;
            svg{
                fill : #fff;
            }
            :hover{
                background : #fff;
                svg{
                    fill : #000;
                }
            }
            transition : 0.5s;
        }
    }

    .linkActive{
        background : ${defaultTheme.primary[0]};
        a{
            color : #000;
        }  
    }

    .ant-table, .ant-table-empty, .ant-table-wrapper, .ant-table-container, .ant-table-content, .ant-spin-nested-loading, .ant-table-content{
        height : 100%;
    }

    .ant-spin-container{
        position : relative;
        box-sizing : border-box;
        display : flex;
        flex-direction : column;
        max-height : 100%;
    }    

    .ant-select-selector{
        .ant-select-selection-item{
            span{
                text-transform : capitalize !important;
            }
            text-transform : capitalize !important;
        }
    }

    .tableSpan{
        text-transform : capitalize !important;
        color : #000;
    }
`;


export default GlobalStyle
