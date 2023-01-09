import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import "./CartQty.css"
import {removeCart} from "../redux/cartRedux"
import { useDispatch } from 'react-redux';

function CartQty({qty, setQty,product}) {
  const dispatch = useDispatch()
  const handleQuantity =(type)=>{
    if(type === "desc"){
     qty > 5 && setQty(qty - 5)
    }else{
     setQty(qty + 5)
    }
   }
   function handleRemove(){
     dispatch(removeCart(product))
   }
  return (
    <div className="amountContainer">
              <RemoveIcon className="sub" onClick={()=>handleQuantity("desc")}/>
              <div className="amountQ">{product.qty}</div>
              <AddIcon className="add" onClick={()=>handleQuantity("asc")}/>
              <DeleteIcon className='delete' onClick={handleRemove}/>
             
            </div>
  )
}

export default CartQty