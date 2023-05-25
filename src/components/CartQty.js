import React from 'react'
import "./CartQty.css"
import useAuth from "../hooks/useAuth";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { updateBasket } from "../slice/basketSlice";
import {toast} from 'react-hot-toast'
import { useDispatch } from "react-redux";
import { GrUpdate } from "react-icons/gr";

function CartQty({product}) {
  //  console.log(product);
  //  console.log(product?._id)
  //  const productId = product?._id;
  // console.log('hello there');
  const {qty,setQty} = useAuth()
   const dispatch = useDispatch();
   const handleUpdateCart = () => {
     try {
      if (product && qty >= product.moq) {
        const productId = product?._id;
        dispatch(updateBasket({ productId, qty }));
        toast.success("Updated cart successfully");
      } else {
        toast.error("quantity is below MOQ");
      }
       
     } catch (error) {
       toast.error("Something went wrong");
       toast.dismiss();
     }
   };

  const handleQuantity = (type) => {
   if (type === "desc") {
     if (qty >= 1) {
       setQty((prevQty) => prevQty - 1);
     }
   } else {
     setQty((prevQty) => prevQty + 1);
   }
  };
 
  // const handleUpdate = (type)=>{
  //   handleQuantity(type)
  // }
  return (
    <div className="amountContainer">
      <div className="amountContainer">
        <RemoveIcon className="sub" onClick={() => handleQuantity("desc")} />
        <div className="amount">{qty}</div>
        <AddIcon className="add" onClick={() => handleQuantity("asc")} />
        <button className='update__btn' onClick={handleUpdateCart}><GrUpdate/>{" "}update</button>
      </div>
    </div>
  );
}

export default CartQty