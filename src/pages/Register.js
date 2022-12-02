import React from 'react'
import Input from '../components/Input'
import "./Register.css"

function Register() {
  return (
    <div className='reg__container'>
        <div className='reg__formWrapper'>
            <div className='reg__title'>Create An Account</div>
            <form>
            <Input placeholder="firstname" type="text"/>
            <Input placeholder="lastname" type="text"/>
            <Input placeholder="username" type="text"/>
            <Input placeholder="email" type="email"/>
            <Input placeholder="password" type="password"/>
            <Input placeholder="comfirm password" type="password"/>
            <div className='agreement'>By Creating an account, I consent to the processing of my personal data
            in accordance with the <b>PRIVACY POLICY</b></div>
            <button className="reg__btn">CREATE</button>
            </form>
            
        </div>
    </div>
  )
}

export default Register