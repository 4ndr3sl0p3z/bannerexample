import { Drawer, Menu } from "antd"
import { ContainerFooterDrawer, ContainerMenuMobile } from "./drawerLayout.style";
import { ContainerHeader } from "./headerLayout.style";
import { IoExitOutline } from 'react-icons/io5';
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { NavLink } from "react-router-dom";


const DrawerLayoutComponent = ({ visibleDrawer, setVisibleDrawer }) =>{

    const { logout } = useContext(AuthContext);

    const getItem = (label, key, icon, children) => {
        return {
          key,
          icon,
          children,
          label,
        };
    }

    return(
        <Drawer
            visible = { visibleDrawer }
            width = "90%"
            placement="left"
            onClose={()=> setVisibleDrawer(false)}
            closeIcon = { false }
            title = { 
                <ContainerHeader>
                    <div
                        className="containerTitleHeader"
                    >
                        <span
                            className="title"
                        >
                            AGO
                        </span>
                        <span
                            className="subtitle"
                        >
                            Soluciones
                        </span>
                    </div>
                </ContainerHeader>
            }
            footer = {
                <ContainerFooterDrawer>
                    <button
                        className="primaryButton"
                        onClick={ ()=> logout()}
                    >
                        <span>
                            Cerrar sesión
                        </span>
                        <IoExitOutline/>
                    </button>
                </ContainerFooterDrawer>
            }
        >
            {/* <ContainerMenuMobile>
                <span>
                    Perfil
                </span>
                <div className="separator"/>
                <span>
                    Productos
                </span>
                <span>
                    Usuarios
                </span>
                <span>
                    Contactos
                </span>
            </ContainerMenuMobile> */}
            <ContainerMenuMobile>
                <Menu
                    mode="vertical"
                    theme="dark"
                    style={{ background: "transparent"}}
                    items = {[
                        getItem(
                            <NavLink
                                to={"/profile"}
                            >
                                Perfil
                            </NavLink>, 
                            "Perfil"
                        )
                    ]}
                    onClick={()=> setVisibleDrawer(false)}
                >
                </Menu>
                <div className="separator"/>
                <Menu
                    mode="vertical"
                    theme="dark"
                    style={{ background: "transparent"}}
                    items = {[
                        getItem(
                            <NavLink
                                to={"/products"}
                            >
                                Productos
                            </NavLink>, 
                            "Products"
                        ),
                        getItem(
                            <NavLink
                                to={"/users"}
                            >
                                Usuarios
                            </NavLink>,
                            "Users"
                        ),
                        getItem(
                            <NavLink
                                to={"/contacts"}
                            >
                                Contactos
                            </NavLink>, 
                            "Contacts"
                        )
                    ]}
                    onClick={()=> setVisibleDrawer(false)}
                >
                </Menu>
            </ContainerMenuMobile>
        </Drawer>
    )
};

export default DrawerLayoutComponent;