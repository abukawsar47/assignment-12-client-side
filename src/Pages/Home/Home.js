import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Offer from './Offer';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner />
            <BusinessSummary />
            <Reviews />
            <Offer />
        </div>
    );
};

export default Home;