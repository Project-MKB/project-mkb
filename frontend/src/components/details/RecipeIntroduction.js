import React, { Component } from "react";

class RecipeIntroduction extends Component {
  render() {
    const { prepTime, cookTime, servingSize, category, difficulty } = this.props.recipe
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-3 offset-2">
            <p><strong>Category:</strong> { category }</p>
          </div>
          <div className="col-12 col-md-3">
            <p><strong>Difficulty:</strong> { difficulty }</p>
          </div>
          <div className="col-12 col-md-3">
            <p><strong>Serving Size:</strong> { servingSize }</p>
          </div>
        </div>
        <div className="row">
            <div className="col-12 col-md-3 offset-2">
                <p><strong>Prep Time:</strong> { prepTime } mins</p>
            </div>
            <div className="col-12 col-md-3">
                <p><strong>Cooking Time</strong> { cookTime } mins</p>
            </div>
            <div className="col-12 col-md-3">
                <p><strong>TotalTime:</strong> { prepTime + cookTime } mins</p>
            </div>
        </div>
        <hr />
      </div>
    );
  }
};

export default RecipeIntroduction;
