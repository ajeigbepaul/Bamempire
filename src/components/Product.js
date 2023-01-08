import React from "react";
import "./Product.css";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

function Product({ product }) {
  return (
    <div className="product">
      <div className="product__circle"></div>
      <div className="product__img">
        <img src={product.image.url} alt="products" />
        <div className="product__inf">
          <div className="product__pristock">
            <span className="prod__price">
              {" "}
              ₦ {product.price?.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}
            </span>{" "}
            <span className="prod__moq">MOQ of {product.moq}</span>{" "}
            {product.instock === "yes" ? (
              <span className="prod__instock">instock</span>
            ) : (
              <span className="prod__instock">sold out</span>
            )}
          </div>
          <Link to={`/product/${product._id}`}>
            <div className="product__iconcontainer">
              <ShoppingBagOutlinedIcon className="shopicon" />
            </div>
          </Link>
        </div>
      </div>
      {/* <div className="product__inf">
        Hello there
      </div> */}

      {/* <div className="product__info">
      // <div className="product__icon">
      // <Link to={`/product/${product._id}`}><div className="product__iconcontainer"><SearchIcon/></div>
      //   <div className="product__iconcontainer"><ShoppingBagOutlinedIcon/></div>
      // </Link>
      // <div className="product__iconcontainer">{product.instock === "yes"?<span>instock</span>:<span>sold out</span> }</div>
      // </div>
      </div>  */}
    </div>
  );
}

export default Product;
