import { useEffect, useState} from "react";
import Input from '../../components/Input'
import {useDispatch, useSelector} from "react-redux"
import "../../pages/Login.css"
import { adminlogin } from "../../redux/apiRedux";
import { useNavigate } from "react-router-dom";
import { publicRequest, userRequest } from "../../requestMethods";
import { toast } from "react-toastify";
import AdminInput from "../../components/AdminInput";
// import { toast } from "react-toastify";
const AdminLogin = () => {
  const {isFetching,error,currentUser} = useSelector(state=>state.user)
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // console.log(userToLower)
  const [ispasswordshown, setIsPasswordShown]= useState(false)
  const toggladmineye = ()=>{
    setIsPasswordShown(!ispasswordshown)
  }
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(()=>{
    if(!currentUser){
        toast.error("please make sure you login correctly thanks!!!")
    }
    if(currentUser){
      navigate("/admin")
      toast.success("logged in successfully")
    }
  },[error,navigate,currentUser])
  const handleClick = async(e) => {
     e.preventDefault();
     adminlogin(dispatch, { username, password });
    
    
  };
  return (
    <div className='log__container'>
        <div className='log__formWrapper'>
            <div className='log__title'>SIGN IN</div>
            <form>
            <AdminInput placeholder="username" type="text" onChange={(e) => setUsername(e.target.value)} />
            <AdminInput placeholder="password" type={ispasswordshown ? "text" : "password"} onChange={(e) => setPassword(e.target.value)} onClick={toggladmineye} visible={true}/>
            <button className="log__btn" onClick={handleClick} >LOGIN</button>
            {/* {errormsg && <p className="error" aria-live="assertive">{errormsg}</p>}  */}
            {/* <a href="something" className='link'>DO YOU REMEMBER YOUR PASSWORD ?</a>
            <a href="something" className='link'>CREATE A NEW ACCOUNT</a> */}
            </form>
            
        </div>
    </div>
  )
}

export default AdminLogin;
