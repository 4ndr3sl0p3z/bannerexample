import { Col, Input, Row } from "antd";
import { ActionContactCard, CardContactInfo, ContainerListContact, ContainerListContactData, WrapperSearch } from "./listcontact.style";
import { FaUserEdit } from 'react-icons/fa';
import { AiTwotoneDelete } from 'react-icons/ai'

const data = [
    {
        tipoDocumentoId : {
            id : 1,
            initial : "CC"
        },
        numeroDocumento : "1144055354",
        primerNombre: "Andres",
        segundoNombre : "Felipe",
        primerApellido : "Lopez",
        segundoApellido : "Taborda",
        correoElectronico : "Lopez920913@hotmail.com",
    },
    {
        tipoDocumentoId : {
            id : 1,
            initial : "CC"
        },
        numeroDocumento : "123456789",
        primerNombre: "Jon",
        segundoNombre : "",
        primerApellido : "Doe",
        segundoApellido : "",
        correoElectronico : "JonDoe@hotmail.com",
    }
]

const ListContactComponent = () =>{
    return(
        <ContainerListContact>
            <WrapperSearch>
                <span>
                    Nombre o apellido que desea consultar
                </span>
                <Input
                    placeholder="Texto"
                />
            </WrapperSearch>
            <ContainerListContactData>
                { data.length &&
                    data.map((x, index)=>(
                        <CardContactInfo
                            key={ index }
                        >
                            <Row>
                                <Col
                                    xs = {24}
                                >
                                    <span className="title"> Nombre:</span>
                                </Col>
                                <Col
                                    xs = {24}
                                >
                                    <span
                                        className="value"
                                    >
                                        {`${x.primerNombre} ${x.primerApellido}`}
                                    </span>
                                </Col>
                                <Col
                                    xs = {24}
                                >
                                    <span className="title"> Identificación:</span>
                                </Col>
                                <Col
                                    xs = {24}
                                >
                                    <span
                                        className="value"
                                    >
                                        {`${x.tipoDocumentoId.initial} ${x.numeroDocumento}`}
                                    </span>
                                </Col>
                                <Col
                                    xs = {24}
                                >
                                    <span className="title"> Correo:</span>
                                </Col>
                                <Col
                                    xs = {24}
                                >
                                    <span
                                        className="value"
                                    >
                                        {`${x.correoElectronico}`}
                                    </span>
                                </Col>
                            </Row>
                            <ActionContactCard>
                                <button
                                    className="warning"
                                >
                                    <FaUserEdit/>
                                </button>
                                <button
                                    className="danger"
                                >
                                    <AiTwotoneDelete/>
                                </button>
                            </ActionContactCard>
                        </CardContactInfo>
                    ))
                }
            </ContainerListContactData>
        </ContainerListContact>
    )
}

export default ListContactComponent;