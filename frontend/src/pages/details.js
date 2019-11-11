import React from 'react';
import Nav2 from '../components/global/Nav2';
import SearchBar from '../components/global/SearchBar';
import DetailsHero from '../components/details/DetailsHero';
import Gallery from '../components/details/Gallery';
import RecipeInstructions from '../components/details/RecipeInstructions';
import Footer from '../components/global/Footer';

const Details = () => {
    return (
        <div>
            <SearchBar />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-11">
                        <DetailsHero />
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
    )
}

export default Details;
