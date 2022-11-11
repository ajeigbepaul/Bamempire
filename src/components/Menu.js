import { Badge } from '@mui/material'
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import React from 'react'

function Menu() {
  return (
    <div className='nav__menu'>
      <div className="nav__reg">REGISTER</div>
      <div className="nav__login">SIGN IN</div>
      <div>
      <Badge badgeContent={4} color="warning" className="badge__color">
           <LocalMallOutlinedIcon/>
      </Badge>
      </div>
    </div>
  )
}

export default Menu