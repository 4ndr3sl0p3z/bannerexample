import { useState } from "react";
import FormContactComponent from "./formContact";
import { ContainerIndexContact, ContainerOptionsContact } from "./index.style";
import ListContactComponent from "./listContactComponent";

const IndexContacts = () => {

    const [ selectedOption, setSelectedOption ] = useState(0)

    return(
        <ContainerIndexContact
        >
            
            <div className="left">
                <ContainerOptionsContact>
                    <div
                        className={ selectedOption === 0 ? "selected" : ""}
                        onClick = {()=> setSelectedOption(0)}
                    >
                        <span> 
                            Nuevo 
                        </span>
                    </div>
                    <div
                        className={ selectedOption === 1 ? "selected" : ""}
                        onClick = {()=> setSelectedOption(1)}
                    >
                        <span> 
                            Contactos 
                        </span>
                    </div>
                </ContainerOptionsContact>
            </div>
            <div className="right">
                {
                    selectedOption === 0 ? 
                    <FormContactComponent/>
                    :
                    <ListContactComponent/>
                }
            </div>
        </ContainerIndexContact>
    )
}

export default IndexContacts;