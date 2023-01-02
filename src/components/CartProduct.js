import React, { useState } from 'react'
import FitlerColor from "../components/FilterColor";
import CartQty from './CartQty';
function CartProduct({product}) {
  const {_id,image,size,colors,price,instock} = product
  const [qty, setQty]= useState(1)
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
                  {instock === "yes"?<span>instock</span>:<span>sold out</span> }
                  <FitlerColor color={colors} />
                  <span className="productsize">
                    <b>Product Size:</b> {size}
                  </span>
                </div>
              </div>
              <div className="cart__pricedetails">
                <CartQty qty={qty} setQty={setQty} colors={colors} product={product}/>
                <div className="price">{((price*product.qty)).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</div>
              </div>
            </div>
            <hr className="hr" />
    </>
            
  )
}

export default CartProduct