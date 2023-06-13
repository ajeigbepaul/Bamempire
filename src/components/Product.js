import React, { useState } from "react";
import "./Product.css";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
// import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slice/basketSlice";
import useAuth from "../hooks/useAuth";
import { toast } from "react-hot-toast";
import { BsHandIndexThumb } from "react-icons/bs";
function Product({ product }) {
  const dispatch = useDispatch();
  const { qty } = useAuth();
  const handleAddToCart = (e) => {
    const addTo = toast.loading("Loading...");
    e.preventDefault();
    dispatch(addToBasket({ ...product, qty }));
    toast.success("added to cart!!", { id: addTo });
  };
  // console.log(product);
  return (
    <div className="product">
      <div className="product__circle"></div>
      <div className="product__img">
        <Link to={`/product/${product._id}`}>
          <img src={product.image.url} alt="products" />
        </Link>{" "}
        <div className="product__inf flex-column px-0">
          <div className="col-md-12 col-sm-12 align-items-start descr px-2">
            {product?.description}
          </div>
          <span className="col-md-12 col-sm-12 align-items-start prod__price px-2">
            {" "}
            ₦ {product.price?.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}
          </span>

          <div className="col-md-12 col-sm-12 px-2 product__pristock d-flex align-items-center justify-content-between">
            <div className="col-md-auto d-flex align-items-center">
              <span className="prod__moq">MOQ of {product.moq}</span>
              <div className="col-md-auto">
                {product.instock === "yes" ? (
                  <span className="d-flex align-items-center prod__instock">
                    instock
                  </span>
                ) : (
                  <span className="d-flex align-items-center prod__instock">
                    sold out
                  </span>
                )}
              </div>
            </div>

            <div className="col-md-auto">
              {Array.isArray(product?.colors) &&
              product?.colors.length === 1 ? (
                <ShoppingBagOutlinedIcon
                  className="shopicon"
                  onClick={handleAddToCart}
                />
              ) : // <span>{product?.colors}</span>
              Array.isArray(product?.colors) && product?.colors.length > 0 ? (
                <Link to={`/product/${product._id}`}>
                  <BsHandIndexThumb className="shopicon" size={20} />
                </Link>
              ) : (
                ""
              )}
            </div>
            {/* <span className="prod__moq">MOQ of {product.moq}</span>{" "}
            {product.instock === "yes" ? (
              <span className="prod__instock">instock</span>
            ) : (
              <span className="prod__instock">sold out</span>
            )}
            <div className="product__iconcontainer">
              {Array.isArray(product?.colors) &&
              product?.colors.length === 1 ? (
                <ShoppingBagOutlinedIcon
                  className="shopicon"
                  onClick={handleAddToCart}
                />
              ) : // <span>{product?.colors}</span>
              Array.isArray(product?.colors) && product?.colors.length > 0 ? (
                <Link to={`/product/${product._id}`}>
                  <BsHandIndexThumb className="shopicon" size={20} />
                </Link>
              ) : (
                ""
              )} */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
