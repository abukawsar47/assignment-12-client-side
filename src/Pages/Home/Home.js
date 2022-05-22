import React from 'react';
import AllNews from './AllNews';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Offer from './Offer';
import Products from '../Purchase/Products';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner />
            <Products />
            <BusinessSummary />
            <Reviews />
            <AllNews />
            <Offer />
        </div>
    );
};

export default Home;