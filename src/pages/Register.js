import React, { useState } from 'react'
import Input from '../components/Input'
import "./Register.css"
import Error from '../components/Error';
import { register } from "../redux/apiRedux";
import { useNavigate } from 'react-router-dom';
import {useDispatch,useSelector} from "react-redux"
import { toast } from "react-toastify";


function Register() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [comfirmpassword, setComfirmpassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleReg = (e) => {
    e.preventDefault();
    register(dispatch, { firstname, lastname, username, email, password });
    // toast.warning("Thank you for coming onboard", { position: "bottom-left" });
    navigate("/login")
    
  };
  return (
    <div className='reg__container'>
        <div className='reg__formWrapper'>
            <div className='reg__title'>Create An Account</div>
            <form>
            <Input placeholder="firstname" type="text" onChange={e=>setFirstname(e.target.value)}/>
            <Input placeholder="lastname" type="text" onChange={e=>setLastname(e.target.value)}/>
            <Input placeholder="username" type="text" onChange={e=>setUsername(e.target.value)}/>
            <Input placeholder="email" type="email" onChange={e=>setEmail(e.target.value)}/>
            <Input placeholder="password" type="password" onChange={e=>setPassword(e.target.value)}/>
            <Input placeholder="comfirm password" type="password" onChange={e=>setComfirmpassword(e.target.value)}/>
            <div className='agreement'>By Creating an account, I consent to the processing of my personal data
            in accordance with the <b>PRIVACY POLICY</b></div>
            <button className="reg__btn" onClick={handleReg} >CREATE</button>
            {/* {error && <Error/>} */}
            </form>
            
        </div>
    </div>
  )
}

export default Register