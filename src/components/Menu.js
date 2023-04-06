import { Badge } from "@mui/material";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import {FaCaretDown, FaHome, FaUser} from "react-icons/fa"
import {RiStore2Line} from "react-icons/ri"
import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import useAuth from "../hooks/useAuth";
// import { useSelector, useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { logout } from "../redux/userRedux";
// import {clearCart} from "../redux/cartRedux"

import "./Menu.css"
function Menu() {
const [show,setShow] = useState(false)
const logout = useLogout()
const navigate = useNavigate()
const {auth} = useAuth()
// console.log(auth)
const handleShow = ()=>{
  setShow(!show)
}
const handleLogout = async()=>{
  await logout();
  navigate('/')
  
}
  return (
    <>
      <div className="nav__menu">
        <div>
          <Link to="/" className="nav__reg">
            <FaHome className="home__icon" />
            <div className="nav__reg">HOME</div>
          </Link>
        </div>
        {/* {auth?.email ? (
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
      )} */}
        {/*  */}
        <div className="menu__account">
          <FaUser className="account__icon" />
          {auth?.email ? (
            <span className="account__span">{auth?.name}</span>
          ) : (
            <span className="account__span">Account</span>
          )}

          <FaCaretDown className="account__icon" onClick={handleShow} />
        </div>

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
      {show && (
        <div className="account__dropdown">
          {auth?.email ? (
            <button className="account__btn">Logout</button>
          ) : (
            <Link to="/login" className="account__btn">
              <button >Sign In</button>
            </Link>
          )}

          <hr />
          <div className="account__order">
            <RiStore2Line className="order__icon" />
            <span>Orders</span>
          </div>
        </div>
      )}
    </>
  );
}

export default Menu;
