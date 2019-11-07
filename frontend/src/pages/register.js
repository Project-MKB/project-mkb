import React, { Component } from 'react';
import Footer from '../components/global/Footer';

class Register extends Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });

        console.log(event.target.value);
        event.preventDefault();
      }

      handleSubmit = (event) => {
        const data = this.state;
        console.log(data);
        event.preventDefault();
      }

    render(){
        return(
            <div id="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-4">
                        <h2>Let's Get Started</h2>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-4">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="email" onChange={this.handleInputChange} value={this.state.email} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name="password" onChange={this.handleInputChange} value={this.state.password} />
                            </div>
                            <div className="form-group form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <a href="http://www.google.com">I agree to the terms of services and privacy policy.</a>
                            </div>
                            <button type="submit" className="btn btn-primary">Login</button>
                        </form>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}


export default Register;