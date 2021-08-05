import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./Login.scss";

const Login = () => {
  let history = useHistory();

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
            <div className="d-grid gap-2 px-5 my-4 fadeIn fourth">
              <Button variant="primary" size="md">
                Login
              </Button>
              <Button
                variant="secondary"
                size="md"
                className="mt-3"
                onClick={() => {
                  history.push("/signup");
                }}
              >
                SignUp
              </Button>
            </div>
          </form>

          <div id="formFooter">
            <a
              className="underlineHover"
              onClick={() => {
                history.push("/");
              }}
            >
              Go to the Site
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
