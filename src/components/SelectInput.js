import React from 'react'
import "./SelectInput.css"

function SelectInput({name,onChange}) {
  return (
    <div className="selectcontainer">
          <select name={name} onChange={onChange} required>
            <option value="">Select Category</option>
            <option value="men">Men</option>
            <option value="women">women</option>
            <option value="accessories">Accessories</option>
            <option value="bags">Bags</option>
          </select>
    </div>
  )
}

export default SelectInput