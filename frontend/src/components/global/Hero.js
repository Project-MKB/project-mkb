import React from "react";

const Hero = props => {
    return (
        <div className="jumbotron jumbotron-fluid">
        <div className="overlay">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="display-4">{props.title}</h1>
                        <p className="lead">{props.content}</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Hero;