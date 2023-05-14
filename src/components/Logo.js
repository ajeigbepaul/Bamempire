import React from 'react'
import "./Logo.css"
import logo from "../logo.jpg"
import { Link } from 'react-router-dom';
function Logo() {
  return (
    <Link to="/">
    <div className="nav__wrapper">
      <div className="nav__logo">
        <img src={logo} alt="logo" />
      </div>
      <h1 className="nav__title">BamEmpire</h1>
    </div>
    </Link>
  );
}

export default Logo