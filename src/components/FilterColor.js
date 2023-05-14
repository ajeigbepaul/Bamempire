import React from 'react'
import "./FilterColor.css"

function FilterColor({color}) {
  return (
    <>
      {color == "as seen" ? (
        <div className="colors" style={{ backgroundColor: `${color}` }}>{color}</div>
      ) : (
        <div className="colors" style={{ backgroundColor: `${color}` }}></div>
      )}
    </>
  );
}

export default FilterColor