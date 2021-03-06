import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch('https://safe-wildwood-72648.herokuapp.com/product')
            .then(res => res.json())
            .then(data => {
                const reversedData = data.reverse();
                setProducts(reversedData)
            });
    }, [])
    return (
        <div className='my-16'>
            <div className='text-center lg:mb-12 mb-5'>
                <h2 className='text-primary text-3xl font-bold mb-2'>All Of Our Products</h2>
                <h4 className='text-xl'>All best seller product are now available.</h4>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    products.slice(0, 6).map((product) => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
            <div className='mt-12 text-center'>
                <Link to='/products' className='btn btn-primary text-white '>View All Purchase</Link>
            </div>
        </div>
    );
};
export default Products;