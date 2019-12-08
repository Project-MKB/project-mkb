import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <input className="form-control form-control-dark" type="text" placeholder="Search" aria-label="Search" />
        </div>
      </nav>
    );
  }
}

export default SearchBar;
