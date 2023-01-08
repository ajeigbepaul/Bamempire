import React from 'react'
import "./Input.css"
import VisibilityIcon from '@mui/icons-material/Visibility';


function Input({placeholder,type,onChange,value,visible,onClick}) {
  return (
    <div className='inputcontainer'>
        <input type={type} placeholder={placeholder} value={value} onChange={onChange} required/>
        {visible && <VisibilityIcon className="eye" onClick={onClick}/>}
    </div>
  )
}

export default Input