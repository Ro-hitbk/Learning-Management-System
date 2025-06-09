import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "./authcontext";

const ProtectedRoutes = () => {
  const {user} = useAuth();
  return user? <Outlet/> : <Navigate to="/"/>
}

export default ProtectedRoutes;