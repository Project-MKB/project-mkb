import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Recipe extends Component {
    render(){
        const { title, mainImage, _id } = this.props.recipe
        return(
            <div className="col-sm-6 col-md-4">
                <div className="card mb-4 shadow-sm">
                    <img src={mainImage} alt={title} className="recipeImg" />
                    <div className="card-body">
                        <Link to={`/details/${_id}`}>
                            <h4>{title}</h4>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Recipe;