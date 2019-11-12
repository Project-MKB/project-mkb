import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const AuthenticatedRoute = ({
  component: Component,
  isAuthenticated,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated
});

export default connect(mapStateToProps)(AuthenticatedRoute);
