import React from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import "./Cart.css";
import Footer from "../components/Footer";
import CartProduct from "../components/CartProduct";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { selectItems, selectTot } from "../slice/basketSlice";
import useAuth from "../hooks/useAuth";

function Cart() {
  const { auth } = useAuth();
  const items = useSelector(selectItems);
  const total = useSelector(selectTot);
  console.log(total);
  const navigate = useNavigate();

  return (
    <div className="cart__container">
      <Announcement />
      <Navbar />
      <div className="cart__wrapper">
        <div className="cart__title">
          <h2>YOUR BAG</h2>
        </div>
        <div className="cart__top">
          <button className="cart__topbutton1" onClick={() => navigate("/")}>
            CONTINUE SHOPPING
          </button>
          <div className="cart__toptexts">
            <span className="cart__toptext">Shopping Bag {items?.length}</span>
          </div>
          {auth ? (
            <Link to="/payment">
              <button className="cart__topbutton2">CHECK OUT NOW</button>
            </Link>
          ) : (
            <button
              className="cart__topbutton2"
              onClick={() => navigate("/login")}
            >
              LOGIN TO PROCEED
            </button>
          )}
        </div>
        <div className="cart__bottom">
          <div className="cart__info">
            {items?.map((product,i) => (
              <CartProduct key={i} product={product} />
            ))}
          </div>
          <div className="cart__summary">
            <div className="summary__title">ORDER SUMMARY</div>
            <div className="summary__items">
              <div className="summary__itemsubtotal">Sub Total</div>
              <div className="summary__itemprice">
                {" "}
                {/* {(items?.total)
                  .toFixed(2)
                  .replace(/\d(?=(\d{3})+\.)/g, "$&,")}{" "} */}
                0
              </div>
            </div>
            <div className="summary__items total">
              <div className="summary__itemsubtotal ">Total</div>

              <div className="summary__itemprice">
                ₦ {total?.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}
              </div>
            </div>
            {auth ? (
              <Link to="/payment">
                <button className="cart_btn">CHECK OUT NOW</button>
              </Link>
            ) : (
              <button className="cart_btn" onClick={() => navigate("/login")}>
                LOGIN TO PROCEED
              </button>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
