<<<<<<< HEAD
import React from 'react';

const Login = () => <h1>This is the Login page</h1>;

export default Login;
=======
import React, { Component } from "react";
import Nav from "../components/global/Footer";
import { connect } from "react-redux";
import { loginUser } from "../redux/actions/userActions";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.loginUser(this.state, this.props.history);
  };

  render() {
    const { user } = this.props;
    const errorDiv = user.error ? (
      <div className="text-danger mb-3">{user.error.message}</div>
    ) : null;

    return (
      <div id="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-4">
            <h2>Welcome Back</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-md-4">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  name="email"
                  onChange={this.handleInputChange}
                  value={this.state.email}
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  name="password"
                  onChange={this.handleInputChange}
                  value={this.state.password}
                />
              </div>
              <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <a href="http://www.google.com">Forgot your password?</a>
              </div>

              {errorDiv}

              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </form>
          </div>
        </div>
        <Nav />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapActionsToProps = {
  loginUser
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Login);
>>>>>>> d9de86131d647a15328486f455ebdd17fa0fb405
