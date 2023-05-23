import React from 'react'
import "./CartQty.css"
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