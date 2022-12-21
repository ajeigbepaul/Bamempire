import React from 'react'
import "./SelectInput.css"

function SelectSize({name,onChange,value}) {
  return (
    <div className="selectcontainer">
          <select name={name} onChange={onChange} value={value} required>
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