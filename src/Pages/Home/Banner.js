import React from 'react';
import bannerImg from '../../images/banner/banner-main.jpg';

const Banner = () => {
    return (
        <div className='position-relative'>
            <img className='img-fluid' src={bannerImg} alt="" />
        </div>
    );
};

export default Banner;