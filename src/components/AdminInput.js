import React from 'react'
import "./AdminInput.css"
import VisibilityIcon from '@mui/icons-material/Visibility';


function AdminInput({placeholder,type,onChange,value,visible,onClick}) {
  return (
    <div className='inputcontainer'>
        <input type={type} placeholder={placeholder} value={value} onChange={onChange} required/>
        {visible && <VisibilityIcon className="eye2" onClick={onClick}/>}
    </div>
  )
}

export default AdminInput