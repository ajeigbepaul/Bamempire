import React, { useEffect, useState } from 'react'
import Input from '../components/Input'
import {useDispatch, useSelector} from "react-redux"
import "./Login.css"
import { login } from "../redux/apiRedux";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
function Login() {
  const {isFetching,error,currentUser} = useSelector(state=>state.user)
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [errormsg, setErrormsg] = useState("")
  useEffect(()=>{
    if(!currentUser){
        toast.error("please login correctly else it won't login thanks!!!")
    }
    if(currentUser){
      navigate("/")
      toast.success("logged in successfully")
    }
  },[error,navigate,currentUser])
  const [ispasswordshown, setIsPasswordShown]= useState(false)
  const toggleye = ()=>{
    setIsPasswordShown(!ispasswordshown)
  }
  const dispatch = useDispatch();
  const handleClick = (e) => {
      e.preventDefault();
      login(dispatch, { username, password });
      // navigate("/")
      // if(!error){
      //   navigate("/")
      // }
      // if(error){
      //     navigate("/login")
      //     toast.error("wrong credentials")
      // }
      
   
   
    // window.location.reload()
  };
  return (
    <div className='log__container'>
        <div className='log__formWrapper'>
            <div className='log__title'>SIGN IN</div>
            <form>
            <Input placeholder="username" type="text" onChange={(e) => setUsername(e.target.value)} />
            <div>
            <Input placeholder="password" type={ispasswordshown ? "text" : "password"} onChange={(e) => setPassword(e.target.value)} visible={true} onClick={toggleye}/>
            </div>
            
            <button className="log__btn" onClick={handleClick} >LOGIN</button>
            {/* {errormsg && <div className="error">{errormsg}</div>} */}
            <a href="something" className='link'>DO YOU REMEMBER YOUR PASSWORD ?</a>
            <Link to="/register" className='link'>CREATE A NEW ACCOUNT</Link>
            </form>
            
        </div>
    </div>
  )
}

export default Login