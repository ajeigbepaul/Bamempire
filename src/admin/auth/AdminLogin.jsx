import { useState } from "react";
import Input from '../../components/Input'
import {useDispatch, useSelector} from "react-redux"
import "../../pages/Login.css"
// import Error from '../../components/Error';
import { adminlogin } from "../../redux/apiRedux";
import { useNavigate } from "react-router-dom";
const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  // const { isFetching, error } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    adminlogin(dispatch, { username, password });
    navigate("/admin")
  };
  return (
    <div className='log__container'>
        <div className='log__formWrapper'>
            <div className='log__title'>SIGN IN</div>
            <form>
            <Input placeholder="username" type="text" onChange={(e) => setUsername(e.target.value)} />
            <Input placeholder="password" type="password" onChange={(e) => setPassword(e.target.value)}/>
            <button className="log__btn" onClick={handleClick} >LOGIN</button>
            {/* {error && <Error>Something went wrong...</Error>} */}
            <a href="something" className='link'>DO YOU REMEMBER YOUR PASSWORD ?</a>
            <a href="something" className='link'>CREATE A NEW ACCOUNT</a>
            </form>
            
        </div>
    </div>
  )
}

export default AdminLogin;
