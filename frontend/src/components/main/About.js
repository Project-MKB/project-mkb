import React, { Component } from 'react';

class About extends Component {
    render() {
        return(
            <div className="container-fluid" id="about">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <h3>
                            About Project MKB
                        </h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam quaerat maiores recusandae excepturi, eius temporibus totam odit obcaecati autem impedit eos dolorum reiciendis eum consectetur, fuga sed facilis in exercitationem.</p>
                    </div>
                    <div className="col-12 col-md-6">
                        <img src="https://via.placeholder.com/300" alt="" className="img-fluid"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;