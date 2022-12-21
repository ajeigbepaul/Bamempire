import React from 'react'
import "./SelectInput.css"

function SelectInput({name,onChange,value}) {
  return (
    <div className="selectcontainer">
          <select name={name} onChange={onChange} value={value} required>
            <option value="">Select Category</option>
            <option value="male">male</option>
            <option value="female">female</option>
            <option value="accessories">accessories</option>
            <option value="children">children</option>
            <option value="kitchen">utensils</option>
            <option value="beauty">beauty</option>
          </select>
    </div>
  )
}

export default SelectInput