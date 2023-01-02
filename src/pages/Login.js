import React, { useEffect, useState } from 'react'
import Input from '../components/Input'
import {useDispatch, useSelector} from "react-redux"
import "./Login.css"
import { login } from "../redux/apiRedux";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
function Login() {
  const {isFetching,error} = useSelector(state=>state.user)
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
 
  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
    navigate("/")
    // window.location.reload()
  };
  return (
    <div className='log__container'>
        <div className='log__formWrapper'>
            <div className='log__title'>SIGN IN</div>
            <form>
            <Input placeholder="username" type="text" onChange={(e) => setUsername(e.target.value)} />
            <Input placeholder="password" type="password" onChange={(e) => setPassword(e.target.value)}/>
            <button className="log__btn" onClick={handleClick} >LOGIN</button>
            <a href="something" className='link'>DO YOU REMEMBER YOUR PASSWORD ?</a>
            <Link to="/register" className='link'>CREATE A NEW ACCOUNT</Link>
            </form>
            
        </div>
    </div>
  )
}

export default Login