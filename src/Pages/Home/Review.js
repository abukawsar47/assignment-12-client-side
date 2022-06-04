import React from 'react';

const Review = ({ review }) => {

    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <div className="flex items-center">
                    <div className="avatar">
                        <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                            <img src={
                                review?.img
                                    ? review?.img
                                    : "https://foxdogconsultants.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png"
                            } alt="user" />
                        </div>
                    </div>
                    <div>
                        <h4 className='text-xl font-bold'>{review?.name}</h4>
                        <p className='font-bold '>{review?.location}</p>
                    </div>
                </div>
                <p>{review?.review}</p>
            </div>
        </div>
    );
};

export default Review;