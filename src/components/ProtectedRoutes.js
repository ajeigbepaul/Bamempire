
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
function ProtectedRoute({ allowedRoles}) {
    const { auth } = useAuth();
    const location = useLocation();
    const roles = auth?.roles ? Object.values(auth.roles) : [];
   const isAuthorized = roles.some((role) => allowedRoles?.includes(role));
   const isLoggedIn = Boolean(auth?.email);

  if (isAuthorized) {
    return <Outlet />;
  }

  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Navigate to="/notallowed" state={{ from: location }} replace />;
}

export default ProtectedRoute