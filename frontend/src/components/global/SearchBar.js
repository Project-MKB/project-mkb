import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
          <input className="form-control form-control-dark" type="text" placeholder="Search" aria-label="Search" />
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
