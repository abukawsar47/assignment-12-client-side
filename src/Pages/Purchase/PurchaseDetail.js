import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import auth from '../../firebase.init';


const PurchaseDetail = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const { register, formState: { errors }, handleSubmit } = useForm();

    useEffect(() => {
        const url = `https://safe-wildwood-72648.herokuapp.com/product/${productId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [productId])
    const [user] = useAuthState(auth);

    const handlePurchase = handleSubmit(async (data, e) => {
        e.preventDefault();

        const order = {
            productId: product?._id,
            product: product?.name,
            pricePerUnit: product?.pricePerUnit,
            customer: user?.email,
            customerName: user?.displayName,
            quantity: e?.target?.quantity?.value,
            phone: e?.target?.phone?.value,
            address: e?.target?.address?.value,

        }
        console.log(localStorage.getItem('accessToken'));
        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(order)
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
            <div className='lg:w-2/3 mx-auto shadow-xl productId  bg-base-100'>
                <div className=" card card-side  w-full  flex lg:flex-row flex-col items-center">
                    <figure><img src={product?.img} className='lg:h-80 lg:w-fit w-48 mx-auto mt-3' alt="Movie" /></figure>
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
                <div className='p-3 my-10 w-full'>
                    <form onSubmit={handlePurchase} className='  p-4 '>
                        <h1 className="text-3xl font-bold pb-3 text-primary">Purchase Your Product</h1>

                        <div className='flex lg:flex-row flex-col gap-3'>
                            <div className="form-control w-full">

                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>

                                <input type="text" value={user?.displayName} readOnly {...register("customerName")} className="input input-bordered w-full" />
                            </div>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Your Email</span>
                                </label>

                                <input type="email" value={user?.email} readOnly {...register("customer")} className="input input-bordered w-full" />
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

                            <input type="number" placeholder="Your Phone" {...register("phone", { required: true })} className="input input-bordered w-full" />

                            <label className="label">
                                <span className="label-text-alt text-error">{errors.Phone?.type === 'required' && "Phone is required"}</span>
                            </label>
                        </div>

                        <div className='flex lg:flex-row flex-col gap-3'>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Product Name</span>
                                </label>

                                <input type="text" value={product?.name} readOnly {...register("product")} className="input input-bordered w-full" />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Product Id</span>
                                </label>

                                <input type="text" value={productId} readOnly {...register("productId")} className="input input-bordered w-full" />
                            </div>
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Order Quantity</span>
                            </label>

                            <input type="number" placeholder="Your Order" defaultValue={product?.minOrder} {...register("quantity", {
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

                        <input type="submit" disabled={errors?.order} className="btn btn-secondary text-white w-full" value="Purchase" />
                    </form>
                </div>
            </div>

        </section>
    );
};


export default PurchaseDetail;