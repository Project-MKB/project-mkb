import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div className="container-fluid" id="contact">
        <div className="row">
          <div className="col-12 col-md-6">
            <h3>Get In Touch</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              quaerat maiores recusandae excepturi, eius temporibus totam odit
              obcaecati autem impedit eos dolorum reiciendis eum consectetur,
              fuga sed facilis in exercitationem.
            </p>
          </div>
          <div className="col-12 col-md-6">
            <form>
              <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlInput1">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="John"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Roberts"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Message</label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
