import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <input class="form-control form-control-dark" type="text" placeholder="Search" aria-label="Search" />
          </div>
        </nav>
      </div>
    );
  }
}

export default SearchBar;
