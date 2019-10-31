import React, { Component } from 'react'
import axios from 'axios'

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

    await axios.get('/users/signin')

    console.log('user logged in')
  }


  render() {
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
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
          <div className="col"></div>
        </div>

      </div>
    )
  }
}

export default Login
