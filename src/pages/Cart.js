import React from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import "./Cart.css";
import Footer from "../components/Footer";
import CartProduct from "../components/CartProduct";

function Cart() {
  return (
    <div className="cart__container">
      <Navbar />
      <Announcement />
      <div className="cart__wrapper">
        <div className="cart__title">
          <h2>YOUR BAG</h2>
        </div>
        <div className="cart__top">
          <button className="cart__topbutton1">CONTINUE SHOPPING</button>
          <div className="cart__toptexts">
            <span className="cart__toptext">Shopping Bag ( 2 )</span>
            <span className="cart__toptext">Wishlist ( 0 )</span>
          </div>
          <button className="cart__topbutton2">CHECK OUT</button>
        </div>
        <div className="cart__bottom">
          <div className="cart__info">
            <CartProduct img="images/femaleshoe_11.jpg"/>
            <hr className="hr"/>
            <CartProduct img="images/femaleshoe_7.jpg"/>
          </div>
          <div className="cart__summary">
            <div className="summary__title">ORDER SUMMARY</div>
            <div className="summary__items">
                <div className="summary__itemsubtotal">Sub Total</div>
                <div className="summary__itemprice"> 100.00 </div>
            </div>
            <div className="summary__items">
                <div className="summary__itemsubtotal">Extimateds shipping</div>
                <div className="summary__itemprice"> 20.00 </div>
            </div>
            <div className="summary__items">
                <div className="summary__itemsubtotal">Shipping discount</div>
                <div className="summary__itemprice"> -5.00 </div>
            </div>
            <div className="summary__items total">
                <div className="summary__itemsubtotal ">Total</div>
                <div className="summary__itemprice"> 115.00 </div>
            </div>
            <button className="cart_btn">CHECK OUT NOW</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
