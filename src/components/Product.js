import React from "react";
import "./Product.css";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";

function Product({ product }) {
  return (
    <div className="product">
      <div className="product__circle"></div>
      <div className="product__img">
        <img src={product.image.url} alt="products" />
      </div>
      <div className="product__info">
      <div className="product__icon">
      <Link to={`/product/${product._id}`}><div className="product__iconcontainer"><SearchIcon/></div>
        <div className="product__iconcontainer"><ShoppingBagOutlinedIcon/></div>
      </Link>
      <div className="product__iconcontainer">{product.instock === "yes"?<span>instock</span>:<span>sold out</span> }</div>
      </div>
      </div>
      
    </div>
  );
}

export default Product;
