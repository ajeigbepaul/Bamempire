import React from 'react'
import "./Input.css"

function Input({placeholder,type}) {
  return (
    <div className='inputcontainer'>
        <input type={type} placeholder={placeholder}/>
    </div>
  )
}

export default Input