import React from 'react';
import Nav2 from '../components/global/Nav2';
import SearchBar from '../components/global/SearchBar';
import MainHero from '../components/main/MainHero';
import RecipesListing from '../components/global/RecipesListing';
import Footer from '../components/global/Footer';

const Main = () => {
    return (
        <div>
            <Nav2 />
            <SearchBar />
            <MainHero />
            <RecipesListing />
            <div className="container">
                <div className="row">
                    <div className="btn btn-primary">More</div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Main;