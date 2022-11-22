import React from "react";
import "./Product.css";
import { Badge } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import SearchIcon from '@mui/icons-material/Search';

function Product({ product }) {
  return (
    <div className="product">
      <div className="product__circle"></div>
      <div className="product__img">
        <img src={product.img} alt="products" />
      </div>
      <div className="product__info">
      <div className="product__icon">
        <div className="product__iconcontainer"><Badge badgeContent={4} color="warning" className="badge__color">
        <FavoriteBorderIcon/>
      </Badge></div>
        <div className="product__iconcontainer"><SearchIcon/></div>
        <div className="product__iconcontainer"><ShoppingBagOutlinedIcon/></div>
      </div>
      </div>
      
    </div>
  );
}

export default Product;
