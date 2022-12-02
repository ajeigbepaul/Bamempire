import React from 'react'
import "./FilterColor.css"

function FilterColor({color}) {
  return (
    <div className='colors' style={{ backgroundColor: `${color}`}}></div>
  )
}

export default FilterColor