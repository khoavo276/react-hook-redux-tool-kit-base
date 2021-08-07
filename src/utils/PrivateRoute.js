import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getToken } from "./Common";
import PropTypes from "prop-types";

// handle the private routes
function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        getToken() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
}

PrivateRoute.propTypes = {
  component: PropTypes.any,
  location: PropTypes.any
};

export default PrivateRoute;
