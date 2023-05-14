import React, { useState } from 'react'
import Input from '../components/Input'
import "./Register.css"
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";
import PasswordChecklist from "react-password-checklist";
import { toast } from 'react-hot-toast';


function Register() {
  const [validate, setValidated] = useState(false);
  const [error, setError] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");

  const navigate = useNavigate();
  const handleReg = async (e) => {
    const refreshToastnotify = toast.loading("Loading...");
    e.preventDefault();
    try {
      const { data: res } = await axios.post("/users", {
        firstname,
        lastname,
        username,
        email,
        password,
      });
      console.log(res);
       toast.success("Registered!!", { id: refreshToastnotify });
      navigate("/login");
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
    <div className="reg__container">
      <div className="reg__formWrapper">
        <div className="reg__title">Create An Account</div>
        <form className="form_container">
          <Input
            placeholder="firstname"
            type="text"
            name="firstname"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
          <Input
            placeholder="lastname"
            type="text"
            name="lastname"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
          <Input
            placeholder="Username"
            type="text"
            name="username"
            value={lastname}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="password"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            placeholder="re-password"
            type="password"
            name="repassword"
            value={repassword}
            onChange={(e) => setRePassword(e.target.value)}
          />
          {error && <div className="error">{error}</div>}
          <div className="passwordcheck">
            <span>Password Must contain</span>
            <PasswordChecklist
              rules={["minLength", "specialChar", "number", "capital", "match"]}
              minLength={6}
              value={password}
              valueAgain={repassword}
              onChange={(isValid) => {
                setValidated(isValid);
              }}
              messages={{
                minLength: "more than 5 characters",
                specialChar: "a special characters (#@$.!&%?)",
                number: "a number",
                capital: "an uppercase letter",
                match: "must match confirm password",
              }}
            />
          </div>
          <div className="agreement">
            By Creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </div>
          <button className="reg__btn" onClick={handleReg}>
            CREATE
          </button>
          {/* {error && <Error/>} */}
        </form>
      </div>
    </div>
  );
}

export default Register