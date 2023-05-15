import React, { useState } from 'react'
import FitlerColor from "../components/FilterColor";
import CartQty from './CartQty';
import { useDispatch } from "react-redux";
import { FaPlus, FaTrash } from "react-icons/fa";
import { addToBasket, removeFromBasket } from "../slice/basketSlice";
import { toast } from "react-hot-toast";
import useAuth from "../hooks/useAuth";
function CartProduct({product}) {
  const {_id,image,size,colors,price,instock} = product
  const { qty, setQty } = useAuth();
  const dispatch = useDispatch();
   function handleRemove() {
     const refreshToastnotify = toast.loading("Loading...");
     dispatch(removeFromBasket({ _id }));
     toast.success("removed from cart!!", { id: refreshToastnotify });
   }
   function handleAdd() {
     const refreshToastnotify = toast.loading("Loading...");
     dispatch(addToBasket({ ...product, qty }));
     toast.success("added to cart!!", { id: refreshToastnotify });
   }
  return (
    <>
      <div className="cart__product">
        <div className="cart__productdetails">
          <img src={image?.url} alt="productimage" />
          <div className="cart__details">
            {/* <span className="productname">
                    <b>Product Name:</b> {title}
                  </span> */}
            <span className="productid">
              <b>ID:</b> {_id}
            </span>
            {instock === "yes" ? <span>instock</span> : <span>sold out</span>}
            <FitlerColor color={colors} />
            <span className="price">
              {/* Price:{" "} */}₦{" "}
              {(price * product.qty)
                .toFixed(2)
                .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
            </span>
            <span className="productsize">
              <b>Product Size:</b> {size}
            </span>
          </div>
        </div>
        <div className="cart__pricedetails">
          <CartQty
            qty={qty}
            setQty={setQty}
            colors={colors}
            product={product}
          />
          <div className="cartbutton">
            <div className="addbtn" onClick={handleAdd}>
              <FaPlus />
              <span>Add</span>
            </div>
            <div className="deletebtn" onClick={handleRemove}>
              <FaTrash />
              <span>Remove</span>
            </div>
          </div>
        </div>
      </div>
      <hr className="hr" />
    </>
  );
}

export default CartProduct