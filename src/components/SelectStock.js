import React from 'react'
import "./SelectInput.css"

function SelectStock({name,onChange}) {
  return (
    <div className="selectcontainer">
          <select name={name} onChange={onChange} required>
            <option value="">Instock?</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
    </div>
  )
}

export default SelectStock