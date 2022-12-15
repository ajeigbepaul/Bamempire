import React from "react";
import { useNavigate } from "react-router-dom";
import {clearCart} from "../redux/cartRedux"
import { useDispatch } from "react-redux";

import "./Success.css"
const Success = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
 const logout = ()=>{
  dispatch(clearCart())
  navigate("/")
 }
  return (
    <div className="success">
      <h2>Your Order is being processed...</h2>
      <p>Thanks you for Patronizing us</p>
      <span>You will be contacted within 24hrs</span>
      <button onClick={logout}>back Home</button>
    </div>
  );
};

export default Success;
