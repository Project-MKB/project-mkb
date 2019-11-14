<<<<<<< HEAD
import React from 'react';

const Register = () => <h1>This is the Register page</h1>;

export default Register;
=======
import React, { Component } from "react";
import { connect } from "react-redux";
import { registerUser } from "../redux/actions/userActions";

export class Register extends Component {
  state = {
    email: "",
    password: "",
    confirmPassword: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.props.registerUser(this.state, this.props.history);
  };

  render() {
    const { user } = this.props;

    const errorDiv = user.error ? (
      <div className="text-danger mb-3">{user.error.message}</div>
    ) : null;

    return (
      <div className="container">
        <div className="row">
          <div className="col"></div>
          <div className="col mt-5">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  required
                  onChange={this.handleChange}
                  value={this.state.email}
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  required
                  onChange={this.handleChange}
                  value={this.state.password}
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  required
                  onChange={this.handleChange}
                  value={this.state.confirmPassword}
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  placeholder="Password"
                />
              </div>

              {errorDiv}

              <button
                disabled={user.isLoading}
                type="submit"
                className="btn btn-success"
              >
                {user.isLoading ? (
                  <div className="spinner-border text-light" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                ) : (
                  "Submit"
                )}
              </button>
            </form>
          </div>
          <div className="col"></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapActionsToProps = {
  registerUser
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Register);
>>>>>>> d9de86131d647a15328486f455ebdd17fa0fb405
