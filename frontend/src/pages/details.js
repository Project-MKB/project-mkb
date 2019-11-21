import React from "react";
import { Link } from "react-router-dom";
// components
import Nav2 from "../components/global/Nav2";
import SearchBar from "../components/global/SearchBar";
import Hero from "../components/global/Hero";
import Gallery from "../components/details/Gallery";
import RecipeInstructions from "../components/details/RecipeInstructions";
import Footer from "../components/global/Footer";
// redux
import { connect } from "react-redux";
import { getRecipe } from "../redux/actions/recipeActions";
import checkWhyRerender from "../util/checkWhyRerender";

class Details extends React.Component {
  componentDidMount() {
    this.props.getRecipe(this.props.match.params.id);
  }
  componentDidUpdate(prevProps, prevState) {
    checkWhyRerender(prevProps, prevState, this.props, null);
  }

  render() {
    const { recipe } = this.props;
    console.log(recipe);

    return (
      <div>
        <SearchBar />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-11">
              <Hero
                title="Recipes"
                content="This is a modified jumbotron that occupies the entire horizontal space of its parent."
              />

              {/* When pressing edit icon, it redirects to recipe update form page with the recipe id */}
              <Link to={`/recipe/update/${recipe._id}`}>
                <button
                  className="btn btn-success"
                  onClick={this.handleRecipeUpdate}
                >
                  Update Recipe
                </button>
              </Link>

              <Gallery />
              <RecipeInstructions />
            </div>
            <div className="col-md-1">
              <Nav2 />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  recipe: state.recipe
});

const mapDispatchToProps = {
  getRecipe
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
