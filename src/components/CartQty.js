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
  //  function handleRemove(){
  //    dispatch(removeCart(product))
  //  }
  return (
    <div className="amountContainer">
      <div className="amountContainer">
        <div className="dash" />
        <div className="amountQ">{product.qty}</div>
        <div className="dash" />
      </div>
      {/* <DeleteIcon className='delete' onClick={handleRemove}/> */}
    </div>
  );
}

export default CartQty