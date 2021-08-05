import React from "react";
import "./Login.scss";

const Login = () => {
  return (
    <div className="wrapper-login">
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <div className="fadeIn first mb-4">
            <img
              src="https://smartdev.com/wp-content/uploads/2020/06/SmartDev-Offshore-Software-Outsourcing.svg"
              id="icon"
              alt="User Icon"
            />
          </div>

          <form>
            <input
              type="text"
              id="login"
              className="fadeIn second"
              name="login"
              placeholder="UserName"
            />
            <input
              type="password"
              id="password"
              className="fadeIn third"
              name="login"
              placeholder="Password"
            />
            <input
              type="submit"
              className="fadeIn fourth mt-4"
              value="Log In"
            />
          </form>

          <div id="formFooter">
            <a className="underlineHover" href="/">
              Go to the Site
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
