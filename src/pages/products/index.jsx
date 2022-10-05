import { Input } from "antd";
import { ContainerIndexProducts, IndexProductsLeft, IndexProductsRight } from "./index.style";
import { FaCog } from 'react-icons/fa';

const IndexProducts = () => {
    return(
        <ContainerIndexProducts>
            {/* <IndexProductsLeft>
                <div
                    className="formSearch"
                >
                    <Input
                        placeholder= "hello"
                    />
                </div>
            </IndexProductsLeft>
            <IndexProductsRight>
                
            </IndexProductsRight> */}
            <div className="torre2"></div>
            <div className="torre6">
                <div className="torre1"></div>
                <div className="torre4">
                    <div className="torre5">
                        <div className="abajo">
                        </div>
                        <div className="arriba">
                            <FaCog className="icon1"/>
                        </div>
                    </div>
                </div>
                <div className="torre3"></div>
            </div>
        </ContainerIndexProducts>
    )
}

export default IndexProducts;