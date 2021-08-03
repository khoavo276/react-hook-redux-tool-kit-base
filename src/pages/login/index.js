import React from "react";
import { useDispatch } from "react-redux";
import { Field, Form, Formik } from "formik";
import { login } from "../../store/user";
import "./style.scss";

const Login = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(values) => {
          dispatch(login(values));
        }}
      >
        {({ isSubmitting }) => (
          <div className="container-login100">
            <div className="wrap-login100">
              <Form>
                <div className="d-flex flex-column">
                  <Field type="text" name="username" className="mb-3" />
                  <Field type="password" name="password" className="mb-3" />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary"
                  >
                    Login
                  </button>
                </div>
              </Form>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default Login;
