import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContextProvider";

function PrivateRoute({ children }) {
  const { authState } = useContext(AuthContext);

  if (!authState.isAuth) {
    return <Navigate to="/home" />;
  }

  return children;
}

export default PrivateRoute;
