import React, { Component } from "react";

class RecipeInstructions extends Component {
  render() {
    const { ingredients, directions } = this.props.recipe
    console.log(ingredients)
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 offset-2">
            <h3>Ingredients </h3>
             
          </div>
          <div className="col-12 col-md-4">
            <h3>Directions</h3>
            <p>{ directions }</p>
          </div>
        </div>
      </div>
    );
  }
};

export default RecipeInstructions;
