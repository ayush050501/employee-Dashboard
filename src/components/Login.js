import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import Group3 from "./Group3.png";

function Login(props) {
  const [cred, setCred] = useState([{email:"",password:""}]);
  const data = [{email: "ayush@gmail.com", password: "ayush" },{email:"sioja@gmail.com",password:"sjad"}];
  const navigate = useNavigate();
  function findObject(data, key, value) {
    return data.find(obj => obj[key] === value);
  }
  const onChange = (e) => {
    setCred({ ...cred, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const foundEmail = findObject(data, "email", cred.email);
    const foundPassword = findObject(data, "password", cred.password);
    if(foundEmail && foundPassword){
      navigate("/Home");
      props.showAlert("Loggedin Successfully","success")
    }else{
      props.showAlert("Invalid Credentials","danger");
    }
  };
  return (
    <>
      <div className="dashboard">
        <div className="app">
          <div className="image">
            <img className="Group3" src={Group3} alt="Group3" width="90" />
          </div>
          <div className="from">
            <form onSubmit={handleSubmit}>
              <div className="email">
                <input type="email" placeholder="  E-mail" className="email" onChange={onChange} id="email" name="email" aria-describedby="emailHelp"/>
              </div>
              <div className="password my-4">
                <input type="password" placeholder="  Password" className="password" onChange={onChange} name="password" id="password" />
              </div>
              <button type="submit" className="Login">
                Login
              </button>
              <p className="FP1">
                <Link className="FP" to="/Home">
                  Forgot password
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
