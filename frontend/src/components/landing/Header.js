import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return(
        <div id="header">
            <div className="jumbotron jumbotron-fluid"></div>
            <div className="overlay"></div>
            <div className="container">
                <h1 className="display-4">Project MKB</h1>
                <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                <Link to="/register">
                    <button type="button" className="btn btn-primary btn-lg">Sign Up</button>
                </Link>
            </div>
        </div>
    );
}

export default Header;