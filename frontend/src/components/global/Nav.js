import React, { Component } from "react";
import { Link } from "react-router-dom";
import Signout from "./Signout";

class Nav extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg fixed-top">
        <Link className="navbar-brand" to="/landing">Basil</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Log In
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Signout />
              </li>
            </ul>
          </div>
        </nav>
    );
  }
}

export default Nav;