import { createContext, useCallback, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [ infoAGO, setInfoAGO ] = useState(localStorage.getItem("infoAGO") ? JSON.parse(localStorage.getItem("infoAGO")) : {} )
    const [ shoppingCart, setShoppingCart ] = useState([]);

    const logout = useCallback(()=>{
        localStorage.removeItem("infoAGO");
        setInfoAGO({});
    },[])

    return(
        <AuthContext.Provider
            value={{
                infoAGO, setInfoAGO,
                logout,
                shoppingCart, setShoppingCart
            }}
        >
            { children }
        </AuthContext.Provider>
    )
}

export default AuthProvider;