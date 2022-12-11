import React from 'react'
import "./Input.css"

function Input({placeholder,type,onChange,value}) {
  return (
    <div className='inputcontainer'>
        <input type={type} placeholder={placeholder} value={value} onChange={onChange} required/>
    </div>
  )
}

export default Input