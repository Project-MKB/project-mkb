<<<<<<< HEAD
import React from 'react';

const Details = () => <h1>This is the Details page</h1>

export default Details;
=======
import React from "react";
import Nav2 from "../components/global/Nav2";
import SearchBar from "../components/global/SearchBar";
import Hero from "../components/global/Hero";
import Gallery from "../components/details/Gallery";
import RecipeInstructions from "../components/details/RecipeInstructions";
import Footer from "../components/global/Footer";

const Details = () => {
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
};

export default Details;
>>>>>>> d9de86131d647a15328486f455ebdd17fa0fb405
