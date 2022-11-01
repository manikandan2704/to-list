import React, { useState, useNavigate } from "react";
import "./Login.css";
import "./Json.js"

const Login = () => {
  const [input, setinput] = React.useState({ email: "", passwd: "" });
  const handlechange = (ev) => {
    setinput({ ...input, [ev.target.name]: ev.target.value });
  };
  const submitter = () => {
    console.log(input);
  };

  return (
    <div className="">
      <h2>Login Page</h2>
      <br></br>
      <div class="login">
        <form id="login" method="get" action="login.php">
          <label>
            <b>User Name</b>
          </label>
          <input
            type="text"
            name="email"
            id="Uname"
            placeholder="Username"
            onChange={handlechange}
          ></input>
          <br></br>
          <label>
            <b>Password</b>
          </label>
          <input
            type="Password"
            name="Passwd"
            id="Pass"
            placeholder="Password"
            onChange={handlechange}
          ></input>
          <br></br>
          <input
            type="button"
            name="log"
            id="log"
            value="Log In"
            onClick={submitter}
          ></input>
          <br></br>
          <input type="checkbox" id="check"></input>
          <span>Remember me</span>
          <br></br>
        </form>
      </div>
    </div>
  );
};
export default Login;
