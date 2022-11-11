import React from 'react'
import Logo from './Logo'
import Menu from './Menu'
import "./Navbar.css"
import Search from './Search'
function Navbar() {
  return (
    <div className='nav__container'>
        <Search/>
        <Logo/>
        <Menu/>
    </div>
  )
}

export default Navbar