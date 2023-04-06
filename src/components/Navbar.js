import React from 'react'
import Logo from './Logo'
import Menu from './Menu'
import "./Navbar.css"
function Navbar() {
  return (
    <div className='nav__container'>
        
        <Logo/>
        <Menu/>
    </div>
  )
}

export default Navbar