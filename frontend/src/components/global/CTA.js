import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <h3>Call to Action</h3>
                    </div>
                    <div className="col-12 col-md-6">
                    <button type="button" className="btn btn-secondary btn-lg">Click here</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;