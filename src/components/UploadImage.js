import React from 'react'
import "./Input.css"

function UploadImage({placeholder,type,onChange,value}) {
  return (
    <div className='inputcontainer'>
        <input type={type} placeholder={placeholder} value={value} onChange={onChange}/>
    </div>
  )
}

export default UploadImage