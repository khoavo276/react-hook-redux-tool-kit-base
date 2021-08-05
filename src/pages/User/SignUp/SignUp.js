import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./SignUp.scss";

const SignUp = () => {
  let history = useHistory();

  return (
    <div className="wrapper-signup">
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <div className="fadeIn mb-4">
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
              className="fadeIn first"
              name="login"
              placeholder="UserName"
            />
            <input
              type="password"
              id="password"
              className="fadeIn second"
              name="login"
              placeholder="Password"
            />

            <input
              type="text"
              id="fullname"
              className="fadeIn third"
              name="fullname"
              placeholder="FullName"
            />

            <input
              type="text"
              id="email"
              className="fadeIn fourth"
              name="email"
              placeholder="Email"
            />

            <div className="d-grid gap-2 px-5 my-4 fadeIn">
              <Button variant="primary" size="md">
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

export default SignUp;
