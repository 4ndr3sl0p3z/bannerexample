import { Avatar, Badge, Menu, Popover } from "antd";
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { ContainerHeader, ContainerIconMenuMobile, ContainerPopoverMenu, ContainerUserAvatar, ContainerUserName, HeaderCustom, WrapperAvatarMenu } from "./headerLayout.style";
import { AuthContext } from "../../context/authContext";
import { FaUserAlt } from 'react-icons/fa'
import { CgMenu } from 'react-icons/cg'
import DrawerLayoutComponent from "./drawerLayout";
import { AiOutlineShoppingCart } from 'react-icons/ai'

const HeaderLayout = () => {

    const [ visibleTrigger, setVisibleTrigger ] = useState(false)
    const { logout } = useContext(AuthContext)
    const [ visibleDrawer, setVisibleDrawer ] = useState(false);

    const getItem = (label, key, icon, children) => {
        return {
          key,
          icon,
          children,
          label,
        };
    }

    return(
        <HeaderCustom>
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
                <div
                    className="containerMenu"
                >
                    <Menu
                        mode="horizontal"
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
                    >
                    </Menu>
                </div>
                <div
                    className="containerUserMenu"
                >
                    <Badge
                        count = { 2 }
                        size  ="small"
                    >
                        <AiOutlineShoppingCart/>
                    </Badge>
                    <ContainerUserName>
                        Hola, Andrés
                    </ContainerUserName>
                    <ContainerPopoverMenu>
                        <Popover
                            placement='bottomRight'
                            trigger="click"
                            className='popoverStyle'
                            content = {
                                <ContainerUserAvatar>
                                    <NavLink
                                        to="/profile"
                                        className={({isActive}) => isActive ? "activeUrl" : ""}
                                        onClick = {()=> setVisibleTrigger(false)}
                                    >
                                        Perfil
                                    </NavLink>

                                    <NavLink
                                        onClick = {()=> logout()}
                                        to="/"
                                    >
                                        Cerrar sesión
                                    </NavLink>
                                </ContainerUserAvatar>                        
                            }
                            title={
                                <WrapperAvatarMenu>
                                    <div className='containerAvatar'>
                                        <Avatar
                                            size = {50}
                                            className='avatar'
                                        >
                                            { 
                                                // infoSSI.avatar ? infoSSI.avatar : 
                                                "AT" 
                                            }
                                        </Avatar>
                                    </div>
                                    <div className='containerInfoUser'>
                                        <div className='username'>
                                            {
                                                // `${infoSSI.firstName} ${infoSSI.secondName} ${infoSSI.firstLastName} ${infoSSI.secondLastName}`
                                                `Andres Felipe Lopez Taborda`
                                            }
                                        </div>
                                        <div className='email'>
                                            {
                                                // infoSSI.email
                                                `Lopez920913@hotmail.com`
                                            }
                                        </div>
                                    </div>
                                </WrapperAvatarMenu>
                            }
                            visible = { visibleTrigger }
                            onVisibleChange = { ()=> setVisibleTrigger(!visibleTrigger)}
                        >
                            <Badge>
                                <Avatar
                                    shape='circle'
                                    icon = {<FaUserAlt/>}
                                    size = {50}
                                    style={{ background : "transparent"}}
                                />
                            </Badge>
                        </Popover>
                    </ContainerPopoverMenu>
                    <ContainerIconMenuMobile
                        onClick={()=> setVisibleDrawer(true)}
                    >
                        <CgMenu/>
                    </ContainerIconMenuMobile>
                </div>
            </ContainerHeader>
            
            <DrawerLayoutComponent
                visibleDrawer = { visibleDrawer }
                setVisibleDrawer = { setVisibleDrawer } 
            />
        </HeaderCustom>
    )
}

export default HeaderLayout;