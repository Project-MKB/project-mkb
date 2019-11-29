import React from 'react';
import imageAbout from '../../images/about.jpg';

const About = () => {
    return(
        <div className="container-fluid" id="about">
            <div className="row py-5">
                <div className="col-12 col-md-4 offset-md-2 about-content">
                    <h2>
                        About Project MKB
                    </h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam quaerat maiores recusandae excepturi, eius temporibus totam odit obcaecati autem impedit eos dolorum reiciendis eum consectetur, fuga sed facilis in exercitationem.</p>
                </div>
                <div className="col-12 col-md-4">
                    <img src={imageAbout} alt="About us section" className="img-fluid"/>
                </div>
            </div>
        </div>
    );
}

export default About;