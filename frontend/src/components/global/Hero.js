import React from "react";

const Hero = props => {
    return (
        <div className="container-fluid">
            <div className="jumbotron jumbotron-fluid">
                <div className="container text-center">
                    <h1 className="display-4">{props.title}</h1>
                    <p className="lead">{props.content}</p>
                </div>
            </div>
         </div>
    );
}

export default Hero;