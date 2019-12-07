import React, { Component } from "react";
import Nav from "../components/global/Nav";
import SearchBar from "../components/global/SearchBar";
import Hero from "../components/global/Hero";
import RecipesListing from "../components/global/RecipesListing";
import Footer from "../components/global/Footer";
import { Link } from "react-router-dom";

let recipes = [
  {
    "title": "Baked Cheese Manicotti"
  },
  {
    "title": "Best Baked Macaroni and Cheese"
  }
]

class Main extends Component {
  render(){
    return (
      <div>
        <Nav />
        <SearchBar />
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <Hero
                title="A selection of popular recipes!"
                content="This is a modified jumbotron that occupies the entire horizontal space of its parent."
              />
              {/* When pressing edit icon, it redirects to recipe update form page with the recipe id */}
              <Link to={"/recipe/create"}>
                <button className="btn btn-success">Create Recipe</button>
              </Link>
              {/* loop recipe */}
              <RecipesListing />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
};

export default Main;
