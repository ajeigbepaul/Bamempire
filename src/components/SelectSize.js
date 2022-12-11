import React from 'react'
import "./SelectInput.css"

function SelectSize({name,onChange}) {
  return (
    <div className="selectcontainer">
          <select name={name} onChange={onChange} required>
            <option value="">Select Size</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            
          </select>
    </div>
  )
}

export default SelectSize