import { Badge } from "@mui/material";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/userRedux";
import {clearCart} from "../redux/cartRedux"

import "./Menu.css"
function Menu() {
  const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
  const currentUser = user && JSON.parse(user).currentUser;
  const quantity = useSelector((state) => state.cart.quantity);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const logOut=()=>{
    dispatch(logout())
    dispatch(clearCart())
    navigate("/")
    window.location.reload();
  }
  return (
    <div className="nav__menu">
      <div>
          <Link to="/" className="nav__reg">
            <div className="nav__reg">HOME</div>
          </Link>
      </div>
      {currentUser ? (
        <>
          <Link className="nav__reg">
            <div className="nav__username" aria-disabled>{currentUser.username}</div>
          </Link>
          <Link className="nav__reg">
            {" "}
            <div className="nav__login" onClick={logOut}>LOGOUT</div>
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
            badgeContent={quantity}
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
