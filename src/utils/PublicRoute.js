import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getToken } from "./Common";
import PropTypes from "prop-types";

// handle the public routes
function PublicRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        !getToken() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/error" }} />
        )
      }
    />
  );
}

PublicRoute.propTypes = {
  component: PropTypes.any
};

export default PublicRoute;
