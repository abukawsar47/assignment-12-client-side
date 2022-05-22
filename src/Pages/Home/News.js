import React from 'react';

const News = ({ news }) => {
    return (
        <div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={news?.img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{news?.name}</h2>
                    <p>{news?.description}</p>
                </div>
                <button className='btn btn-primary text-white'>Read More</button>
            </div>
        </div>
    );
};

export default News;