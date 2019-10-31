import React, { Component } from 'react'
import { connect } from "react-redux";
import { loginUser } from "../redux/actions/userActions";


export class Login extends Component {

  state = {
    email: "",
    password: "",
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    this.props.loginUser(this.state)
  }

  render() {
    const { user } = this.props

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
                  placeholder="Enter email" />
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
                  placeholder="Password" />
              </div>
              <button
                disabled={user.isLoading}
                type="submit"
                className="btn btn-primary">
                {user.isLoading ?
                  <div className="spinner-border text-success" role="status">
                    <span className="sr-only">Loading...</span>
                  </div> : 'Submit'}
              </button>
            </form>
          </div>
          <div className="col"></div>
        </div>

      </div>
    )
  }
}


const mapStateToProps = (state) => ({
  user: state.user
})

const mapActionsToProps = {
  loginUser
}

export default connect(mapStateToProps, mapActionsToProps)(Login)
