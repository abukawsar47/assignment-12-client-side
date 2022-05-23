import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';


const PurchaseDetail = () => {
    const [user, loading, error] = useAuthState(auth);
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const { _id, name, pricePerUnit } = product;


    useEffect(() => {
        const url = `http://localhost:5000/product/${productId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [productId])

    const handleBooking = event => {
        event.preventDefault();
        const order = {
            productId: _id,
            product: name,
            pricePerUnit,
            customer: user?.email,
            customerName: user?.displayName,
            quantity: event?.target?.quantity?.value,
            phone: event?.target?.phone?.value,
            address: event?.target?.address?.value,

        }
        console.log(order);

        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.success)
                    toast.success('Successfully added Order');

                else {
                    toast.error('Something is wrong')
                }
            })
    }

    return (
        <div className='card lg:max-w-lg bg-base-100 shadow-xl my-16 mx-auto'>
            <div>
                <h2 className='text-3xl font-bold text-primary text-center my-3'>Welcome To Purchase Page</h2>
            </div>
            <figure className="px-5 pt-5">
                <img src={product?.img} alt="Shoes" className="rounded-xl w-full" />
            </figure>
            <div className="card-body items-start p-5">
                <h2 className="card-title">{product?.name}</h2>
                <p>{product?.description}</p>
                <p>Available Quantity: <span className='font-bold text-primary'>{product?.availableQuantity}</span></p>
                <p>Minimum Order Quantity: <span className='font-bold text-primary'>{product?.minimumOrderQuantity}</span></p>
                <p>Price Per Unit: <span className='font-bold text-primary'>${product?.pricePerUnit}</span></p>
            </div>
            <div className='w-full px-5 pb-5'>
                <div className="">
                    <form onClick={handleBooking} className=' grid grid-cols-1 gap-3 justify-items-center mt-2'>
                        <label className="text-left w-full font-bold">Product Name</label>
                        <input type="email" name="email" disabled value={product?.name || ''} className="input input-bordered w-full" />
                        <label className="text-left w-full font-bold">Quantity <span className='text-red-500'>*</span></label>
                        <input type="number" name="quantity" placeholder="Quantity" className="input input-bordered w-full" required />
                        <label className="text-left w-full font-bold">Contact Number <span className='text-red-500'>*</span></label>
                        <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full" required />
                        <label className="text-left w-full font-bold">Address</label>
                        <input type="text" name="address" placeholder="Address" className="input input-bordered w-full" />
                        <label className="text-left w-full font-bold">Customer Name</label>
                        <input type="text" name="name" disabled value={user?.displayName || ''}
                            className="input input-bordered w-full" />
                        <label className="text-left w-full font-bold">Customer Email</label>
                        <input type="email" name="email" disabled value={user?.email || ''} className="input input-bordered w-full" />

                        <input type="submit" value="Order" className="btn btn-secondary text-white w-full mt-2" />
                    </form>
                </div>
            </div>
        </div>
    );
};
export default PurchaseDetail;