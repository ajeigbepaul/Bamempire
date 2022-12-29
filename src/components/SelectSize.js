import React from 'react'
import "./SelectInput.css"

function SelectSize({name,onChange,value}) {

  return (
    <div className="selectcontainer">
          <select name={name} onChange={onChange} value={value}>
            <option value="">Select Size</option>
            <option value="none">None</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
            <option value="14-24">14-24</option>
            <option value="25-30">25-30</option>
            <option value="31-36">31-36</option>
            <option value="35-41">35-41</option>
            <option value="37-42">37-42</option>
            <option value="39-44">39-44</option>
            <option value="40-47">40-47</option>
            <option value="50-62">50-62</option>
            
          </select>
    </div>
  )
}

export default SelectSize