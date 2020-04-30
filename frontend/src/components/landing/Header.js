import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../global/Hero';


const Header = () => {
    return(
        <div id="header">
            <Hero 
                title="Project MKB"
                content="This is a modified jumbotron that occupies the entire horizontal space of its parent."
            />
            <div className="container hero-button">
                <div className="row col-12">
                    <Link to="/register">
                        <button type="button" className="btn btn-primary btn-lg">Register</button>
                    </Link>
                    <Link to="/login">  
                        <button type="button" className="btn btn-secondary btn-lg">Log In</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Header;