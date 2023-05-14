import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import "./Quantity.css"
import useAuth from "../hooks/useAuth";


function QuantityContainer() {
  const { qty, setQty } = useAuth();
  const handleQuantity =(type)=>{
    if(type === "desc"){
     qty > 5 && setQty(qty - 5)
    }else{
     setQty(qty + 5)
    }
   }
  return (
    <div className="amountContainer">
              <RemoveIcon className="sub" onClick={()=>handleQuantity("desc")}/>
              <div className="amount">{qty}</div>
              <AddIcon className="add" onClick={()=>handleQuantity("asc")}/>
             
            </div>
  )
}

export default QuantityContainer