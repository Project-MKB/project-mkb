import React, { Component } from 'react';
import Recipe from './Recipe';

class RecipesListing extends Component {
    
    render(){
        const recipes = this.props.recipes
        return(
            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row">
                        {/* loop recipes array and call <Recipe /> */}
                            {this.props.recipes.map((reciepe) => {
                                return <Recipe recipes={reciepe} />
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default RecipesListing;