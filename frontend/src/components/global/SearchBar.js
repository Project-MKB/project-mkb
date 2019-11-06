import React, { Component } from 'react';

class SearchBar extends Component {
    render(){
        return(
           <nav className="navbar fixed-top flex-md-nowrap p-0 shadow">
                <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="/">Company name</a>
                <input className="form-control form-control-dark" type="text" placeholder="Search" aria-label="Search" />
            </nav>
        );
    }
}

export default SearchBar;