import React from 'react'
import "./Logo.css"
import logo from "../logo.jpg"
function Logo() {
  return (
    <div className='nav__logo'><img src={logo} alt="logo"/></div>
  )
}

export default Logo