import { Suspense, useContext } from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./context/authContext"
import Login from "./pages/auth/Login";
import LayoutProvider from "./pages/layout/layoutProvider";
import ProtectedRoutes from "./routes/protectedRoutes.routes";


const App = () => {
  const { infoAGO } = useContext(AuthContext);
  const { isLogged } = infoAGO;

  // if(!isLogged) logout();

  return(
    <Suspense
      fallback = { null}
    >
      <BrowserRouter>
        <LayoutProvider>
          <Routes>
            {
              ProtectedRoutes.map(({ path, Component, admin }) => {
                console.log(path, isLogged)
                return(
                  isLogged ? 
                  <Route
                    key  = { path }
                    path = { path }
                    element = { <Component/> }
                  />
                  :
                  <Route
                    key  = { path }
                    path = { path }
                    element = { <Navigate to="/login"/> }
                  />
                )
              })
            }
            <Route
              path="login"
              element = { isLogged === undefined ? <Login/> : <Navigate to="/"/>}
            />
          </Routes>
        </LayoutProvider>
      </BrowserRouter>
    </Suspense>
  )
}

export default App;