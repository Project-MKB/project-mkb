import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render(){
        return(
            <div className="container-fluid">
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">Project MKB</h1>
                        <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                        <Link to="/register">
                            <button type="button" className="btn btn-primary btn-lg">Sign Up</button>
                        </Link>
                        <Link to="/login">  
                            <button type="button" className="btn btn-secondary btn-lg">Log In</button>
                        </Link>
                    </div>
                </div>
             </div>
        );
    }
}

export default Header;