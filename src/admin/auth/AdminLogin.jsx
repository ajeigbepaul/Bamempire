import { useEffect, useState} from "react";
import Input from '../../components/Input'
import {useDispatch, useSelector} from "react-redux"
import "../../pages/Login.css"
import { adminlogin } from "../../redux/apiRedux";
import { useNavigate } from "react-router-dom";
import { publicRequest, userRequest } from "../../requestMethods";
import { toast } from "react-toastify";
// import { toast } from "react-toastify";
const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const userToLower = username.toLowerCase()
  // console.log(userToLower)
  const [ispasswordshown, setIsPasswordShown]= useState(false)
  const toggladmineye = ()=>{
    setIsPasswordShown(!ispasswordshown)
  }
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = async(e) => {
     e.preventDefault();
     adminlogin(dispatch, { userToLower, password });
     navigate("/admin")
    //  window.location.reload()
    // e.preventDefault();
    // try {
    //     const {data} = await publicRequest.post('/auth/adminlogin', { username, password })
    //     if  (data){
    //         toast.success('logged in')
    //         navigate("/admin")
    //     }
    //     console.log(data);
    // } catch (error) {
    //     toast.error(error);
    // }
    
  };
  return (
    <div className='log__container'>
        <div className='log__formWrapper'>
            <div className='log__title'>SIGN IN</div>
            <form>
            <Input placeholder="username" type="text" onChange={(e) => setUsername(e.target.value)} />
            <Input placeholder="password" type={ispasswordshown ? "text" : "password"} onChange={(e) => setPassword(e.target.value)} onClick={toggladmineye}/>
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
