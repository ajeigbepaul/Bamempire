import React, { useState } from "react";
import Input from "../components/Input";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "../api/axios";
import useAuth from "../hooks/useAuth";

function Login() {
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [ispasswordshown, setIsPasswordShown] = useState(false);
  const toggleye = () => {
    setIsPasswordShown(!ispasswordshown);
  };
  const handleClick = async (e) => {
   
    e.preventDefault();
    try {
      const res = await axios.post("/auth", { email, password });
      const accessToken = res?.data?.accessToken;
      const roles = res?.data?.roles;
      const id = res?.data?._id;
      setAuth({ id, email, roles, accessToken });
      navigate(from, { replace: true });
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };
 
  return (
    <div className="log__container">
      <div className="log__formWrapper">
        <div className="log__title">SIGN IN</div>
        <form>
          <Input
            placeholder="email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div>
            <Input
              placeholder="password"
              type={ispasswordshown ? "text" : "password"}
              onChange={(e) => setPassword(e.target.value)}
              visible={true}
              onClick={toggleye}
            />
          </div>
          {error && <div className="error">{error}</div>}
          <button className="log__btn" onClick={handleClick}>
            LOGIN
          </button>
          <Link to="/updatepassword" className="link">
            FORGOTTEN PASSWORD ? click here!!
          </Link>
          <Link to="/register" className="link">
            CREATE A NEW ACCOUNT
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
