import { useEffect, useState} from "react";
import Input from '../../components/Input'
import {useDispatch, useSelector} from "react-redux"
import "../../pages/Login.css"
import { adminlogin } from "../../redux/apiRedux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errormsg, setErrorMsg] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser, isFetching, error } = useSelector((state) => state.user);

  //  useEffect((error)=>{
  //   if(error){
  //     toast.error("wrong credentials")
  //    }
  // },[error])

  // useEffect(()=>{
  //   if(error){
  //     navigate("/adminlogin")
  //   }
  // },[error,navigate])
  // useEffect(()=>{
  //   if(currentUser){
  //     navigate("/admin")
  //   }
  // },[error,navigate])

  const handleClick = (e) => {
     e.preventDefault();
     adminlogin(dispatch, { username, password });
     window.location.reload()
     navigate("/admin")
    //  if(currentUser){
    //   navigate("/admin")
    //   window.location.reload()
    //  }
    
  };
  return (
    <div className='log__container'>
        <div className='log__formWrapper'>
            <div className='log__title'>SIGN IN</div>
            <form>
            <Input placeholder="username" type="text" onChange={(e) => setUsername(e.target.value)} />
            <Input placeholder="password" type="password" onChange={(e) => setPassword(e.target.value)}/>
            <button className="log__btn" onClick={handleClick} >LOGIN</button>
            {errormsg && <p className="error" aria-live="assertive">{errormsg}</p>} 
            {/* <a href="something" className='link'>DO YOU REMEMBER YOUR PASSWORD ?</a>
            <a href="something" className='link'>CREATE A NEW ACCOUNT</a> */}
            </form>
            
        </div>
    </div>
  )
}

export default AdminLogin;
