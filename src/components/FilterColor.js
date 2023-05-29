import React from 'react'
import "./FilterColor.css"
import { FaCheck } from 'react-icons/fa';

function FilterColor({ color, onClick, selected }) {
  return (
    <div className='c'>
      <div
        className="colors"
        style={{ backgroundColor: color }}
        onClick={onClick}
      >
        {selected ? <FaCheck color="white" /> : ""}
      </div>
    </div>
  );
}

export default FilterColor