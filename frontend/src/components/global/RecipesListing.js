import React, { Component } from 'react';
import Recipe from './Recipe';

class RecipesListing extends Component {
    render(){
        const recipes = this.props.recipes
        console.log(recipes)
        return(
            <div className="album py-5">
                <div className="container">
                    <div className="row">
                       {recipes.map((recipe) => {
                           return <Recipe key={recipe._id} recipe={recipe} />
                       })}
                    </div>
                </div>
            </div>
        )
    }
}

export default RecipesListing;