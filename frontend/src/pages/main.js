import React from "react";
import { Link } from "react-router-dom";
// components
import Nav from "../components/global/Nav";
import Hero from "../components/global/Hero";
import SearchBar from '../components/global/SearchBar';
import RecipesListing from "../components/global/RecipesListing";
import Footer from "../components/global/Footer";
// redux
import { connect } from "react-redux";
import { listRecipe } from "../redux/actions/recipeActions";
import '../styles/main.scss'

class Main extends React.Component {

  componentDidMount() {
    this.props.listRecipe();
  }

  render() {
    const recipes = this.props.recipe;
    console.log(recipes);
    if (recipes.isLoading) {
      return null
    }

    return (
      <div id="mainPage">
        <Nav />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <Hero
                title="A selection of popular recipes!"
                content="This is a modified jumbotron that occupies the entire horizontal space of its parent."
              />
              <SearchBar />
              {/* When pressing edit icon, it redirects to recipe update form page with the recipe id */}
              <Link to={"/recipe/create"}>
                <button className="btn btn-success">Create Recipe</button>
              </Link>
              <RecipesListing recipes={recipes.recipes}/>
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
  listRecipe
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
