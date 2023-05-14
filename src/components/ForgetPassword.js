import React, { useState } from 'react'
import Input from "../components/Input";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "../api/axios";
import useAuth from "../hooks/useAuth";
import { toast } from 'react-hot-toast';
function ForgetPassword() {
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");
  const [ispasswordshown, setIsPasswordShown] = useState(false);
  const toggleye = () => {
    setIsPasswordShown(!ispasswordshown);
  };
  const handleClick = async (e) => {
     const refreshToastnotify = toast.loading("Loading...");
    e.preventDefault();
    try {
      const res = await axios.put("/users/update-password", {
        email,
        newPassword,
      });
       toast.success("Password updated!!", { id: refreshToastnotify });
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
        <div className="log__title">UPDATE PASSWORD</div>
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
              type="password"
              onChange={(e) => setNewPassword(e.target.value)}
            //   visible={true}
              onClick={toggleye}
            />
          </div>
          {error && <div className="error">{error}</div>}
          <button className="log__btn" onClick={handleClick}>
            UPDATE PASSWORD!
          </button>
        </form>
      </div>
    </div>
  );
}


export default ForgetPassword