import { Badge } from "@mui/material";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import {FaCaretDown, FaHome, FaUser} from "react-icons/fa"
import {RiStore2Line} from "react-icons/ri"
import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import useAuth from "../hooks/useAuth";
import "./Menu.css"
import { clearBasket } from "../slice/basketSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectItems } from "../slice/basketSlice";

function Menu() {
const items = useSelector(selectItems);
const [show,setShow] = useState(false)
const logout = useLogout()
const dispatch = useDispatch();
const navigate = useNavigate()
const {auth} = useAuth()
// console.log(auth)
const handleShow = ()=>{
  setShow(!show)
}
const handleLogout = async()=>{
  await logout();
  dispatch(clearBasket());
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

        <div className="menu__account">
          <FaUser className="account__icon" />
          {auth?.email ? (
            <span className="account__span">{auth?.email}</span>
          ) : (
            <span className="account__span">Account</span>
          )}

          <FaCaretDown className="account__icon" onClick={handleShow} />
        </div>

        <div>
          <Link to="/cart">
            {items.length ? (
              <Badge
                badgeContent={items.length}
                color="warning"
                className="badge__color"
              >
                <LocalMallOutlinedIcon />
              </Badge>
            ) : (
              <Badge badgeContent="0" color="warning" className="badge__color">
                <LocalMallOutlinedIcon />
              </Badge>
            )}
          </Link>
        </div>
      </div>
      {show && (
        <div className="account__dropdown">
          {auth?.email ? (
            <button className="account__btn" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <Link to="/login" className="account__btn">
              <button>Sign In</button>
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
