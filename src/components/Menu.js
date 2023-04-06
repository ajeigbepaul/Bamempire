import { Badge } from "@mui/material";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import React from "react";
import { Link,useNavigate } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import useAuth from "../hooks/useAuth";
// import { useSelector, useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { logout } from "../redux/userRedux";
// import {clearCart} from "../redux/cartRedux"

import "./Menu.css"
function Menu() {
const logout = useLogout()
const navigate = useNavigate()
const {auth} = useAuth()
// console.log(auth)
const handleLogout = async()=>{
  await logout();
  navigate('/')
  
}
  // const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
  // const currentUser = user && JSON.parse(user).currentUser;
  // const quantity = useSelector((state) => state.cart.quantity);
  // const dispatch = useDispatch()
  // const navigate = useNavigate()
  // const logOut=()=>{
  //   dispatch(logout())
  //   dispatch(clearCart())
  //   navigate("/")
  //   window.location.reload();
  // }
  return (
    <div className="nav__menu">
      <div>
          <Link to="/" className="nav__reg">
            <div className="nav__reg">HOME</div>
          </Link>
      </div>
      {auth ? (
        <>
          <Link className="nav__reg">
            <div className="nav__username" aria-disabled>{auth?.email}</div>
          </Link>
          <Link className="nav__reg">
            {" "}
            <div className="nav__login" onClick={handleLogout}>LOGOUT</div>
          </Link>
        </>
      ) : (
        <>
          <Link to="/register" className="nav__reg">
            <div className="nav__reg">REGISTER</div>
          </Link>
          <Link to="/login" className="nav__reg">
            {" "}
            <div className="nav__login">SIGN IN</div>
          </Link>
        </>
      )}
      {/*  */}

      <div>
        <Link to="/cart">
          <Badge
          badgeContent="4"
            // badgeContent={quantity}
            color="warning"
            className="badge__color"
          >
            <LocalMallOutlinedIcon />
          </Badge>
        </Link>
      </div>
    </div>
  );
}

export default Menu;
