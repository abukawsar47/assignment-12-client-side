import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner />
            <BusinessSummary />
            <Reviews />
        </div>
    );
};

export default Home;