import React from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import "./Cart.css";
import Footer from "../components/Footer";
import CartProduct from "../components/CartProduct";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate()
  const cart = useSelector((state) => state.cart);
  const quantity = useSelector(state=>state.cart.quantity)
  // To effect this from db, add discount to the model and do the calculation inside the reduxslice
  // the total calculation is being done.
  
  return (
    <div className="cart__container">
      <Navbar />
      <Announcement />
      <div className="cart__wrapper">
        <div className="cart__title">
          <h2>YOUR BAG</h2>
        </div>
        <div className="cart__top">
          <button className="cart__topbutton1" onClick={()=>navigate("/")}>CONTINUE SHOPPING</button>
          <div className="cart__toptexts">
            <span className="cart__toptext">Shopping Bag {quantity}</span>
            {/* <span className="cart__toptext">Wishlist ( 0 )</span> */}
          </div>
          <Link to="/payment"><button className="cart__topbutton2">CHECK OUT</button></Link>
        </div>
        <div className="cart__bottom">
          <div className="cart__info">
            {cart.products.map((product) => (
              <>
                <CartProduct key={product._id} product={product} />
                <hr className="hr" />
              </>
            ))}
          </div>
          <div className="cart__summary">
            <div className="summary__title">ORDER SUMMARY</div>
            <div className="summary__items">
              <div className="summary__itemsubtotal">Sub Total</div>
              <div className="summary__itemprice"> {(cart.total).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} </div>
            </div>
            <div className="summary__items total">
              <div className="summary__itemsubtotal ">Total</div>
              <div className="summary__itemprice"> {cart.total.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} </div>
            </div>
            <Link to="/payment"><button className="cart_btn">CHECK OUT NOW</button></Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
