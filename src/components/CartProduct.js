import React, { useState } from "react";
import CartQty from "./CartQty";
import { useDispatch } from "react-redux";
import { FaPlus, FaTrash } from "react-icons/fa";
import { addToBasket, removeFromBasket } from "../slice/basketSlice";
import { toast } from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import FilterColor from "./FilterColor";
import FilterSingleColor from "./FilterSingleColor";
// import QuantityContainer from './QuantityContainer';
function CartProduct({ product }) {
  // console.log(product)
  const { _id, image, size, colors, price, instock, moq, selectedColor } = product;
  const { qty, setQty } = useAuth();
  const dispatch = useDispatch();
  function handleRemove() {
    const refreshToastnotify = toast.loading("Loading...");
    dispatch(removeFromBasket({ _id }));
    toast.success("removed from cart!!", { id: refreshToastnotify });
  }
  function handleAdd() {
    const refreshToastnotify = toast.loading("Loading...");
    dispatch(addToBasket({ ...product, qty}));
    toast.success("added to cart!!", { id: refreshToastnotify });
  }
  // const [selectedColor, setSelectedColor] = useState("");

  // const handleColorClick = (color) => {
  //   setSelectedColor(color);
  // };
  console.log(colors)
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
            {instock === "yes" ? (
              <span
                style={{
                  backgroundColor: "plum",
                  padding: "5px",
                  fontWeight: 600,
                  fontSize: "12px",
                  width: "50px",
                }}
              >
                instock
              </span>
            ) : (
              <span
                style={{
                  backgroundColor: "plum",
                  padding: "5px",
                  fontWeight: 600,
                  fontSize: "12px",
                  width: "50px",
                }}
              >
                sold out
              </span>
            )}
            <div className="cartfilter">
              <span>Color</span>
              <div className="cart__color">
                {selectedColor ? (
                  <FilterColor color={selectedColor} />
                ) : (
                  <FilterSingleColor color={colors} />
                )}
              </div>
            </div>
            <p>
              MOQ: {moq}
              <span style={{ color: "red" }}>*</span>{" "}
              <span style={{ color: "red", fontSize: "12px" }}>
                (You cannot buy less than this MOQ. click on update if a change
                is made)
              </span>
            </p>
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
          {/* <QuantityContainer /> */}
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

export default CartProduct;
