import React from "react";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { TextField } from "../../../components/TextField.js";
import { login } from "../../../store/user";
import { useDispatch } from "react-redux";

import "./Login.scss";

const Login = () => {
  let history = useHistory();
  const dispatch = useDispatch();

  const validate = Yup.object({
    user: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 charaters")
      .required("Password is required"),
  });

  return (
    <div className="wrapper-login">
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <div className="fadeIn mb-4">
            <img
              src="https://smartdev.com/wp-content/uploads/2020/06/SmartDev-Offshore-Software-Outsourcing.svg"
              id="icon"
              alt="User Icon"
            />
          </div>

          <Formik
            initialValues={{
              user: "",
              password: "",
            }}
            validationSchema={validate}
            onSubmit={(values) => {
              dispatch(login(values));
            }}
          >
            {(formik) => (
              <div>
                <h1 className="my-4 font-weight-bold .display-4">Login</h1>
                <Form className="mx-4">
                  <TextField label="User" name="user" type="text" />
                  <TextField label="Password" name="password" type="password" />
                  <button className="btn btn-primary btn-md my-3" type="submit">
                    Login
                  </button>
                </Form>
              </div>
            )}
          </Formik>

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
