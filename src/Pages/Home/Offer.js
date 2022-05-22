import React from 'react';
import wheel from '../../images/offer.png'

const Offer = () => {
    return (
        <div className='my-16'>
            <div className='text-center lg:mb-12 mb-5'>
                <h2 className='text-primary text-3xl font-bold mb-2'>Offer!</h2>
                <h4 className='text-xl'>Winter Special Offer!</h4>
            </div>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row p-0 gap-10">
                    <img src={wheel} className="max-w-ms rounded-lg" alt='' />
                    <div className='lg:w-1/2'>
                        <h1 className="lg:text-5xl text-2xl font-bold text-primary mb-2">Flash Deals!</h1>
                        <h1 className="lg:text-3xl text-xl font-bold mb-4">Hurry up and get 25% discount</h1>
                        <div className=''>
                            <span className='text-2xl font-bold mr-3 text-accent'>10 Days,</span>
                            <span className='text-2xl font-bold mr-3 text-accent'>04 Hours,</span>
                            <span className='text-2xl font-bold mr-3 text-accent'>50 Minutes,</span>
                            <span className='text-2xl font-bold text-accent'>22 Seconds</span>
                        </div>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offer;