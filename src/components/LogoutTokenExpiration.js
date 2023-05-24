import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import useAuth  from "../hooks/useAuth";
import { toast } from "react-hot-toast";

function LogoutOnTokenExpiration() {
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();
  const token = auth?.accessToken;

  const isTokenExpired = (token) => {
    try {
      const decodedToken = jwt_decode(token);
      const currentTime = Math.floor(Date.now() / 1000); // Convert milliseconds to seconds
      return decodedToken.exp < currentTime;
    } catch (error) {
      return true;
    }
  };

  useEffect(() => {
   if (token && isTokenExpired(token)) {
     setAuth(null); // Clear the authentication state
     navigate("/login"); // Redirect to the login or home page
     toast.success("session timeout");
   }
  }, [token, setAuth, navigate]);

  return null; // or you can return some UI if needed
}

export default LogoutOnTokenExpiration;
