import React from 'react'
import FitlerColor from "../components/FilterColor";
import QuantityContainer from "../components/QuantityContainer";
const price = 500
function CartProduct({img}) {
  return (
    <div className="cart__product">
              <div className="cart__productdetails">
                <img src={img} alt="productimage" />
                <div className="cart__details">
                  <span className="productname">
                    <b>Product Name:</b> Kiddies Shoe
                  </span>
                  <span className="productid">
                    <b>ID:</b> K0013478Yf
                  </span>
                  <FitlerColor color="black" />
                  <span className="productsize">
                    <b>Product Size:</b> 37.5
                  </span>
                </div>
              </div>
              <div className="cart__pricedetails">
                <QuantityContainer />
                <div className="price">{price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</div>
              </div>
            </div>
  )
}

export default CartProduct