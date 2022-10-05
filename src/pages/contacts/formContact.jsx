import { Col, Form, Input, Row, Select } from "antd";
import { ContainerActionButtonContact, ContainerFormContact } from "./formContact.style";

const FormContactComponent = () => {
    const [ form ] = Form.useForm();

    const onFinish = ( values ) =>{
    
    }

    return(
        <ContainerFormContact>
            <Form
                layout="vertical"
                form={ form }
                onFinish = { onFinish }
            >
                <Row
                    gutter={[10,10]}
                >
                    <Col
                        xs={ 24 }
                        md={ 12 }
                    >
                        <Form.Item
                            name = "tipoDocumentoId"
                            label = "Tipo documento"
                            
                        >
                            <Select/>
                        </Form.Item>
                    </Col>
                    <Col
                        xs={ 24 }
                        md={ 12 }
                    >
                        <Form.Item
                            name = "numeroDocumento"
                            label = "Número documento"
                        >
                            <Input/>
                        </Form.Item>
                    </Col>
                    <Col
                        xs={ 24 }
                        md={ 12 }
                    >
                        <Form.Item
                            name = "primerNombre"
                            label = "Primer nombre"
                        >
                            <Input/>
                        </Form.Item>
                    </Col>
                    <Col
                        xs={ 24 }
                        md={ 12 }
                    >
                        <Form.Item
                            name = "segundoNombre"
                            label = "Segundo nombre"
                        >
                            <Input/>
                        </Form.Item>
                    </Col>
                    <Col
                        xs={ 24 }
                        md={ 12 }
                    >
                        <Form.Item
                            name = "primerApellido"
                            label = "Primer apellido"
                        >
                            <Input/>
                        </Form.Item>
                    </Col>
                    <Col
                        xs={ 24 }
                        md={ 12 }
                    >
                        <Form.Item
                            name = "segundoApellido"
                            label = "Segundo apellido"
                        >
                            <Input/>
                        </Form.Item>
                    </Col>
                    <Col
                        xs={ 24 }
                        md={ 12 }
                    >
                        <Form.Item
                            name = "correoElectronico"
                            label = "Correo electrónico"
                        >
                            <Input/>
                        </Form.Item>
                    </Col>
                    <Col
                        xs={ 24 }
                        md={ 12 }
                    >
                        <Form.Item
                            name = "fechaNacimiento"
                            label = "Fecha nacimiento"
                            
                        >
                            <Input
                                type="date"
                            />
                        </Form.Item>
                    </Col>
                    <Col
                        xs={ 24 }
                    >
                        <Form.Item
                            name = "direccion"
                            label = "Dirección"
                        >
                            <Input/>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
            <ContainerActionButtonContact>
                <button
                    className="primaryButton"
                >   
                    Guardar
                </button>
            </ContainerActionButtonContact>
        </ContainerFormContact>
    )
}

export default FormContactComponent;