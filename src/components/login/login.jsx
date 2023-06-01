import React from "react";
import "./login.css";
import Image from "../../assests/images/gov.png";
const Login = () => {
  return (
    <div className="main-container-login">
      <div className="form-container-left">
        <h1>  Login </h1>
        <form action="">
          <div>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="please enter your username"
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Please enter your password"
            />
          </div>
          <div>
            {" "}
            <input type="submit" value="Login" />
          </div>
          <a href="">forgot password?</a>
        </form>
      </div>
      <div className="login-container-right">
        <img src={Image} alt="" />
      </div>
    </div>
  );
};

export default Login;
