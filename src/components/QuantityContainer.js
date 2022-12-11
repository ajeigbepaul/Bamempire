import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import "./Quantity.css"

function QuantityContainer({qty, setQty,product}) {
  const handleQuantity =(type)=>{
    if(type === "desc"){
     qty > 1 && setQty(qty - 1)
    }else{
     setQty(qty + 1)
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