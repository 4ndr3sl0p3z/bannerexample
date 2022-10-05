import { useLocation } from 'react-router-dom';
import { Layout } from 'antd';
import { Content, Footer } from 'antd/lib/layout/layout';
import HeaderLayout from './headerLayout';
import { ContainerContent } from './layoutProvider.style';


const LayoutProvider = ({ children }) => {

    const location = useLocation();

    return(
        <>
            { (location.pathname === '/login' ) ?
                <> { children} </>
                :
                <Layout
                    style={{
                        display : "flex",
                        flexDirection : "column",
                        height : "100vh",
                        alignItems : "center"
                    }}
                >
                    <HeaderLayout/>
                    <Content
                        style={{ 
                            marginTop : 84, 
                            flex : 1, 
                            width : "100%",
                            overflowX : "auto"
                        }}
                    >
                        <ContainerContent>
                            { children }
                        </ContainerContent>
                    </Content>
                    <Footer
                        style={{ textAlign : "center", fontWeight : "bold"}}
                    >
                        AGO Soluciones Informáticas ©2022
                    </Footer>
                </Layout>
            }
        </>
    )
}

export default LayoutProvider;