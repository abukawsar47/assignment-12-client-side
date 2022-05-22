import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const navigate = useNavigate();

    const navigateToCarDetail = id => {
        navigate(`/product/${id}`);
    }
    return (
        <div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <figure className="px-5 pt-5">
                    <img src={product?.img} alt="Shoes" className="rounded-xl w-full" />
                </figure>
                <div className="card-body items-start">
                    <h2 className="card-title">{product?.name}</h2>
                    <p>{product?.description}</p>
                    <p>Available Quantity: <span className='font-bold text-primary'>{product?.availableQuantity}</span></p>
                    <p>Minimum Order Quantity: <span className='font-bold text-primary'>{product?.minimumOrderQuantity}</span></p>
                    <p>Price Per Unit: <span className='font-bold text-primary'>${product?.pricePerUnit}</span></p>
                </div>
                <button onClick={() => navigateToCarDetail(product?._id)} className='btn btn-primary text-white'>Purchase</button>
            </div>
        </div>
    );
};

export default Product;