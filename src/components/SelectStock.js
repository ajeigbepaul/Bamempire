import React from 'react'
import "./SelectInput.css"

function SelectStock({name,onChange,value}) {
  return (
    <div className="selectcontainer">
          <select name={name} onChange={onChange} value={value} required>
            <option value="">Instock?</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
    </div>
  )
}

export default SelectStock