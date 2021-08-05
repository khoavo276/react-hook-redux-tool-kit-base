import React from "react";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { TextField } from "../../../components/TextField.js";
import "./SignUp.scss";

const SignUp = () => {
  let history = useHistory();

  const validate = Yup.object({
    user: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 charaters")
      .required("Password is required"),
  });

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

          <Formik
            initialValues={{
              email: "",
              user: "",
              password: "",
            }}
            validationSchema={validate}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {(formik) => (
              <div>
                <h1 className="my-4 font-weight-bold .display-4">SignUp</h1>
                <Form className="mx-4">
                  <TextField label="Email" name="email" type="email" />
                  <TextField label="User" name="user" type="text" />
                  <TextField label="Password" name="password" type="password" />
                  <button className="btn btn-primary btn-md my-3" type="submit">
                    Sign Up
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

export default SignUp;
