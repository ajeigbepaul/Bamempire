import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import "./Quantity.css"

function QuantityContainer() {
  return (
    <div className="amountContainer">
              <AddIcon className="sub"/>
              <div className="amount">1</div>
              <RemoveIcon className="add"/>
            </div>
  )
}

export default QuantityContainer