import React, { Component } from 'react';

class Contact extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            firstName: '',
            lastName: '',
            message: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });

        console.log(event.target.value);
      }

      handleSubmit(event) {
        console.log(event.target.value);
        event.preventDefault();
      }

    render() {
        return(
            <div className="container-fluid" id="contact">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <h3>
                            Get In Touch
                        </h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam quaerat maiores recusandae excepturi, eius temporibus totam odit obcaecati autem impedit eos dolorum reiciendis eum consectetur, fuga sed facilis in exercitationem.</p>
                    </div>
                    <div className="col-12 col-md-6">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name="email" onChange={this.handleInputChange.bind(this)} value={this.state.email}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">First Name</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="John" name="firstName" onChange={this.handleInputChange.bind(this)} value={this.state.firstName}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Last Name</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Roberts" name="lastName" onChange={this.handleInputChange.bind(this)} value={this.state.lastName}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlTextarea1">Message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="message" onChange={this.handleInputChange.bind(this)} value={this.state.message}></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;