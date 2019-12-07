import React, { Component } from 'react';

class Recipe extends Component {
    
    render(){
        const Recipe = this.props.recipes
        return(
            <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                    <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><rect width="100%" height="100%" fill="#55595c"></rect></svg>
                    <div className="card-body">
                    <h3>{this.props.recipe.title}</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default Recipe;