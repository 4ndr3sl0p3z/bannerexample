import { lazy } from "react";

const ProtectedRoutes = [
    {
        Component : lazy(()=> import("../pages/home/home")),
        path : "/"    
    },
    {
        Component : lazy(()=> import("../pages/contacts/index")),
        path : "/contacts"    
    },
    {
        Component : lazy(()=> import("../pages/products/index")),
        path : "/products"    
    },
    {
        Component : lazy(()=> import("../pages/error404")),
        path : "/*"
    },
]

export default ProtectedRoutes;