import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import auth from '../firebase.init';

const Order = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const { register, formState: { errors }, handleSubmit } = useForm();

    useEffect(() => {
        fetch('https://safe-wildwood-72648.herokuapp.com/product/' + id, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            }
        })
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id]);
    const [user] = useAuthState(auth);

    const handlePurchase = handleSubmit(async (data, e) => {
        e.preventDefault();
        console.log(data);
        console.log(localStorage.getItem('accessToken'));
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result?.insertedId) {
                    toast.success('Successfully placed your order!')
                }
                e.target.reset();
            })
    });

    return (
        <section className='py-10 px-2'>
            <div className="mx-auto card lg:w-2/3 w-full card-side bg-base-100 shadow-xl flex lg:flex-row flex-col items-center">
                <figure><img src={product?.image} className='lg:h-80 lg:w-fit w-48 mx-auto mt-3' alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl text-primary">{product?.name}</h2>
                    <div className='flex flex-col gap-3'>
                        <p>{product?.description}</p>
                        <p>Available Quantity: <b>{product?.availableQuantity}</b> </p>
                        <p>Minimum Order: <b>{product?.minimumOrderQuantity}</b> </p>
                        <p>Price Per Unit: <b>{product?.pricePerUnit}</b> </p>
                    </div>
                </div>
            </div>

            <div className='p-3 my-10'>
                <form onSubmit={handlePurchase} className='lg:w-1/2 w-full mx-auto shadow-lg p-4 rounded-xl'>
                    <h1 className="text-3xl font-bold pb-3 text-primary">Purchase Your tool</h1>

                    <div className='flex lg:flex-row flex-col gap-3'>
                        <div className="form-control w-full">

                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>

                            <input type="text" value={user?.displayName} readOnly {...register("name")} className="input input-bordered w-full" />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>

                            <input type="email" value={user?.email} readOnly {...register("email")} className="input input-bordered w-full" />
                        </div>
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Address</span>
                        </label>

                        <input type="text" placeholder="Your address" {...register("address", { required: true })} className="input input-bordered w-full" />

                        <label className="label">
                            <span className="label-text-alt text-error">{errors.address?.type === 'required' && "address is required"}</span>
                        </label>
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Phone</span>
                        </label>

                        <input type="number" placeholder="Your Phone" {...register("Phone", { required: true })} className="input input-bordered w-full" />

                        <label className="label">
                            <span className="label-text-alt text-error">{errors.Phone?.type === 'required' && "Phone is required"}</span>
                        </label>
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Purchasing</span>
                        </label>

                        <input type="text" value={product?.name} readOnly {...register("tool")} className="input input-bordered w-full" />
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Order Quantity</span>
                        </label>

                        <input type="number" placeholder="Your Order" defaultValue={product?.minOrder} {...register("order", {
                            required: true,
                            max: {
                                value: product?.availableQuantity,
                                message: 'Must be under available quantity'
                            },
                            min: {
                                value: product?.minimumOrderQuantity,
                                message: 'Must be over or equal to minimum order quantity'
                            }
                        })} className="input input-bordered w-full" />

                        <label className="label">
                            <span className="label-text-alt text-error">
                                {errors.order?.type === 'required' && "Order Quantity is required"}
                                {errors?.order?.message}
                            </span>
                        </label>
                    </div>

                    <input type="submit" disabled={errors?.order} className="btn w-full btn-primary" value="Purchase" />
                </form>
            </div>
        </section>
    );
};


export default Order;