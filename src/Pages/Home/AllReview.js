import React, { useEffect, useState } from 'react';
import Review from './Review';

const AllReview = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    return (
        <div className='my-20'>
            <div className='text-center lg:mb-12 mb-5'>
                <h2 className='text-primary text-3xl font-bold mb-2'>View Our All Reviews</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews?.slice(0, 6).map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default AllReview;