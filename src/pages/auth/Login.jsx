import { ContainerComponentLogin, ContainerFormLogin, ContainerLogin } from "./login-style"
import Logo from '../../resources/images/AGO.png';
import {
    Form,
    Input
} from 'antd';
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Login = () =>{

    const [ form ] = Form.useForm();
    const { setInfoAGO } = useContext(AuthContext);

    const onFinish = () =>{
        setInfoAGO({ isLogged : true})
    }

    return(
        <ContainerComponentLogin>
            <ContainerLogin>
                <div className="image">
                    <img src={Logo} alt = ""/>
                </div>
                <ContainerFormLogin>
                    <span className="title"> Autenticacion </span>
                    <Form
                        form = { form }
                        layout = "vertical"
                        onFinish={ onFinish }
                    >
                        <Form.Item
                            label = "Email"
                            name = "email"
                        >
                            <Input
                                size="large"
                            />
                        </Form.Item>
                        <Form.Item
                            label = "Contraseña"
                            name = "password"
                        >
                            <Input.Password
                                size="large"
                            />
                        </Form.Item>
                        <Form.Item>
                            <div
                                className="btnAutenticar"
                            >
                                <button>
                                    Autenticar
                                </button>
                            </div>
                        </Form.Item>
                    </Form>
                </ContainerFormLogin>
            </ContainerLogin>
        </ContainerComponentLogin>
    )
}

export default Login;