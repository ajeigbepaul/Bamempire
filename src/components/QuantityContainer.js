import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import "./Quantity.css"
import useAuth from "../hooks/useAuth";


function QuantityContainer({product,setQty,qty}) {
  console.log(product)
  // const { qty, setQty } = useAuth();
  // const [qty, setQty] = useState(1);
 const handleQuantity = (type) => {
  if (type === "desc") {
    if (qty >= 1) {
      setQty((prevQty) => prevQty - 1);
    }
  } else {
    setQty((prevQty) => prevQty + 1);
  }
 };
  return (
    <div className="amountContainer">
              <RemoveIcon className="sub" onClick={()=>handleQuantity("desc")}/>
              <div className="amount">{qty}</div>
              <AddIcon className="add" onClick={()=>handleQuantity("asc")}/>
             
            </div>
  )
}

export default QuantityContainer