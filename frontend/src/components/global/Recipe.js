import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Recipe extends Component {
    
    render(){
        const { title, mainImage, _id } = this.props.recipe
        return(
            <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                    <img src={mainImage} alt={title} />
                    <div className="card-body">
                    <Link to={`/details/${_id}`}>
                        <h3>{title}</h3>
                    </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Recipe;