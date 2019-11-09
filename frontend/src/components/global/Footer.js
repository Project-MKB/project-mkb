import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return(
        <footer className="container-fluid">
            <div className="row">
                <div className="col-12 col-md-6 text-center text-md-left">
                    <p>&copy; 2019 Project MKB - All Rights Reserved.</p>
                </div>
                <div className="col-12 col-md-6 text-center text-md-right">
                <a href="https://www.instgram.com"><FontAwesomeIcon icon={ faInstagram } /></a>
                <a href="https://www.facebook.com"><FontAwesomeIcon icon={ faFacebookF } /></a>
                <a href="https://www.twitter.com"><FontAwesomeIcon icon={ faTwitter } /></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
