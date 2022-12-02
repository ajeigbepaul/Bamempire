import React from 'react'
import Input from '../components/Input'
import "./Login.css"

function Login() {
  return (
    <div className='log__container'>
        <div className='log__formWrapper'>
            <div className='log__title'>SIGN IN</div>
            <form>
            <Input placeholder="username" type="text" />
            <Input placeholder="password" type="text" />
            <button className="log__btn">LOGIN</button>
            <a href="something" className='link'>DO YOU REMEMBER YOUR PASSWORD ?</a>
            <a href="something" className='link'>CREATE A NEW ACCOUNT</a>
            </form>
            
        </div>
    </div>
  )
}

export default Login