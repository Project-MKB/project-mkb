import React from "react";
import { Link } from "react-router-dom";
// components
import Nav from "../components/global/Nav";
import Hero from "../components/global/Hero";
import RecipeIntroduction from "../components/details/RecipeIntroduction";
import RecipeInstructions from "../components/details/RecipeInstructions";
import Footer from "../components/global/Footer";
// redux
import { connect } from "react-redux";
import { getRecipe } from "../redux/actions/recipeActions";
import '../styles/details.scss';

class Details extends React.Component {
  componentDidMount() {
    this.props.getRecipe(this.props.match.params.id);
  }

  render() {
    const { recipe } = this.props;
    console.log(recipe);

    return (
      <div id="detailsPage">
        <Nav />
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <Hero
                title={recipe.title}
                className="heroBanner"
              />

              {/* When pressing edit icon, it redirects to recipe update form page with the recipe id */}
              <Link to={`/recipe/update/${recipe._id}`}>
                <button className="btn btn-success">Update Recipe</button>
              </Link>
              <RecipeIntroduction recipe={recipe} />
              <RecipeInstructions recipe={recipe} />
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
