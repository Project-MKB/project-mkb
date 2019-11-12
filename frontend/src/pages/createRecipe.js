import React, { Component } from "react";
import Badge from "../components/global/Badge";
import LoadingButton from "../components/global/LoadingButton";
import { connect } from "react-redux";
import { createRecipe } from "../redux/actions/recipeActions";

export class CreateRecipe extends Component {
  state = {
    title: "",
    ingredient: "",
    ingredients: [],
    direction: "",
    directions: [],
    prepTime: 0,
    cookTime: 0,
    servingSize: 0,
    category: "",
    cuisine: "",
    footNote: "",
    difficulty: 0,
    mainImage: "",
    images: [],
    tag: "",
    tags: []
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createRecipe(this.state, this.props.history);
  };

  addItemToArr = (name, item) => {
    const newItem = item.trim().toLowerCase();
    if (newItem) {
      this.setState(prevState => {
        if (prevState[name].indexOf(newItem) > -1) {
          alert(`${item} already exists`);
          return prevState;
        } else {
          return {
            [name]: [...prevState[name], newItem]
          };
        }
      });
    }
  };

  removeItemFromArr = (name, itemToRemove) => {
    this.setState(prevState => {
      return {
        [name]: prevState[name].filter(item => item !== itemToRemove)
      };
    });
  };

  handleIngrAdd = () => {
    this.addItemToArr("ingredients", this.state.ingredient);
  };
  handleIngrRemove = itemToRemove => {
    this.removeItemFromArr("ingredients", itemToRemove);
  };

  handleDirecAdd = () => {
    this.addItemToArr("directions", this.state.direction);
  };
  handleDirecRemove = itemToRemove => {
    this.removeItemFromArr("directions", itemToRemove);
  };

  handleTagAdd = () => {
    this.addItemToArr("tags", this.state.tag);
  };
  handleTagRemove = itemToRemove => {
    this.removeItemFromArr("tags", itemToRemove);
  };

  render() {
    const { recipe } = this.props;
    const errorDiv = recipe.error ? (
      <div className="text-danger mb-3">{recipe.error.message}</div>
    ) : null;

    return (
      <div className="mt-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-4">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  onChange={this.handleChange}
                  value={this.state.title}
                />
              </div>

              <div className="form-group">
                <label htmlFor="ingredient">Ingredients</label>
                <input
                  type="text"
                  className="form-control"
                  id="ingredient"
                  onChange={this.handleChange}
                  value={this.state.ingredient}
                />
                <button
                  type="button"
                  onClick={this.handleIngrAdd}
                  className="btn btn-outline-success"
                >
                  ADD
                </button>
              </div>

              {this.state.ingredients.map((ingr, i) => (
                <Badge
                  key={i}
                  item={ingr}
                  handleItemRemove={this.handleIngrRemove}
                />
              ))}

              <div className="form-group">
                <label htmlFor="direction">Directions</label>
                <input
                  type="text"
                  className="form-control"
                  id="direction"
                  onChange={this.handleChange}
                  value={this.state.direction}
                />
                <button
                  type="button"
                  onClick={this.handleDirecAdd}
                  className="btn btn-outline-success"
                >
                  ADD
                </button>
              </div>

              {this.state.directions.map((direction, i) => (
                <Badge
                  key={i}
                  item={direction}
                  handleItemRemove={this.handleDirecRemove}
                />
              ))}

              <div className="form-group">
                <label htmlFor="prepTime">Preparation Time</label>
                <input
                  type="text"
                  className="form-control"
                  id="prepTime"
                  onChange={this.handleChange}
                  value={this.state.prepTime}
                />
              </div>

              <div className="form-group">
                <label htmlFor="cookTime">Cook Time</label>
                <input
                  type="text"
                  className="form-control"
                  id="cookTime"
                  onChange={this.handleChange}
                  value={this.state.cookTime}
                />
              </div>

              <div className="form-group">
                <label htmlFor="servingSize">Serving Size</label>
                <input
                  type="text"
                  className="form-control"
                  id="servingSize"
                  onChange={this.handleChange}
                  value={this.state.servingSize}
                />
              </div>

              <div className="form-group">
                <label htmlFor="category">Category</label>
                <input
                  type="text"
                  className="form-control"
                  id="category"
                  onChange={this.handleChange}
                  value={this.state.category}
                />
              </div>

              <div className="form-group">
                <label htmlFor="cuisine">Cuisine</label>
                <input
                  type="text"
                  className="form-control"
                  id="cuisine"
                  onChange={this.handleChange}
                  value={this.state.cuisine}
                />
              </div>

              <div className="form-group">
                <label htmlFor="footNote">Foot Notes</label>
                <input
                  type="text"
                  className="form-control"
                  id="footNote"
                  onChange={this.handleChange}
                  value={this.state.footNote}
                />
              </div>

              <div className="form-group">
                <label htmlFor="difficulty">Difficulty</label>
                <input
                  type="text"
                  className="form-control"
                  id="difficulty"
                  onChange={this.handleChange}
                  value={this.state.difficulty}
                />
              </div>

              <div className="form-group">
                <label htmlFor="mainImage">Main Image</label>
                <input
                  type="text"
                  className="form-control"
                  id="mainImage"
                  onChange={this.handleChange}
                  value={this.state.mainImage}
                />
              </div>

              {/* Not included the part of adding multiple images for now */}

              <div className="form-group">
                <label htmlFor="tag">Tags</label>
                <input
                  type="text"
                  className="form-control"
                  id="tag"
                  onChange={this.handleChange}
                  value={this.state.tag}
                />
                <button
                  type="button"
                  onClick={this.handleTagAdd}
                  className="btn btn-outline-success"
                >
                  ADD
                </button>
              </div>

              {this.state.tags.map((tag, i) => (
                <Badge
                  key={i}
                  item={tag}
                  handleItemRemove={this.handleTagRemove}
                />
              ))}

              {errorDiv}

              <div>
                <LoadingButton isLoading={recipe.isLoading} />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  recipe: state.recipe
});

const mapDispatchToProps = {
  createRecipe
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateRecipe);
