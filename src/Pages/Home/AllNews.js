import React from 'react';
import News from './News';
import news1 from '../../images/car-driving-fast-sports-car-18296.jpg'
import news2 from '../../images/automotive-car-coupe-dashboard-498694-600x399.jpg'
import news3 from '../../images/parked-white-coupe-during-night-3354648-768x511.jpg'

const AllNews = () => {
    const allNews = [
        {
            _id: 1,
            name: 'Electric cars',
            description: 'Usually, new cars do not let their owners experience starter problems. However, anything can happen with the starter, and usually, it happens unexpectedly and for more than one person.',
            img: news1
        },
        {
            _id: 2,
            name: 'Enjoy Riding',
            description: 'Usually, new cars do not let their owners experience starter problems. However, anything can happen with the starter, and usually, it happens unexpectedly and for more than one person. ',
            img: news2
        },
        {
            _id: 3,
            name: 'Race cars',
            description: 'Usually, new cars do not let their owners experience starter problems. However, anything can happen with the starter, and usually, it happens unexpectedly and for more than one person. ',
            img: news3
        },
    ];

    return (
        <div className='mb-16'>
            <div className='text-center lg:mb-12 mb-5'>
                <h2 className='text-primary text-3xl font-bold mb-2'>Our Latest News</h2>
                <h4 className='text-xl'>We post the latest article weekly. Stay tuned!</h4>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    allNews.map(news => <News
                        key={news._id}
                        news={news}
                    ></News>)
                }
            </div>
        </div>
    );
};

export default AllNews;