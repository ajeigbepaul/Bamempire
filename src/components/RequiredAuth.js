import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequiredAuth = ({allowedRoles}) => {
  const { auth } = useAuth();
  const location = useLocation();
  // const r = Object.values(auth?.roles);

  console.log(allowedRoles)
  console.log(auth.roles)
  // console.log(r)
  return (
   
    auth?.roles?.find((role) => allowedRoles?.includes(role)) ? (
      <Outlet />
    ) : auth?.email ? (
      <Navigate to="/notallowed" state={{ from: location }} replace />
    ) : (
      <Navigate to="/login" state={{ from: location }} replace />
    )
    
  ) 
};
export default RequiredAuth;
