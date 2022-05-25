import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';


const AddProduct = () => {
    const [product, setProduct] = useState();
    const { register, handleSubmit } = useForm();// formState: { errors }

    useEffect(() => {
        fetch('https://safe-wildwood-72648.herokuapp.com/product', {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            }
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }, []);

    const handlePurchase = handleSubmit(async (data, e) => {
        console.log(data);
        console.log(localStorage.getItem('accessToken'));
        fetch('https://safe-wildwood-72648.herokuapp.com/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                setProduct(result);
                console.log(result);
                if (result?.insertedId) {
                    toast.success('Successfully Added Product!')
                }

            })
    });


    return (

        <div className="w-full mx-auto">
            <h2 className='text-2xl mb-4'> Add A Product</h2>
            <div className="  border-2 rounded p-4 my-3 text-primary">
                <form className='' onSubmit={handleSubmit(handlePurchase)}>
                    <label className='label-text'>Product Name</label>
                    <input className='input input-bordered w-full' placeholder='Name' {...register("name", { required: true, maxLength: 30 })} required />
                    <label className='label-text'>Price</label>

                    <input className='input input-bordered w-full' placeholder='Price' type="number" {...register("pricePerUnit")} required />

                    <label className='label-text'>Description</label>
                    <textarea className='input input-bordered w-full' placeholder='Description' {...register("description")} required />

                    <label className='label-text'>Available Quantity</label>

                    <input className='input input-bordered w-full' placeholder='Available Quantity' type="number" {...register("availableQuantity")} required />

                    <label className='label-text'>Minimum Order Quantity</label>

                    <input className='input input-bordered w-full' placeholder='Minimum Order Quantity' {...register("minimumOrderQuantity")} required />

                    <label className='label-text'>Product Image</label>
                    <input className='input input-bordered w-full' placeholder='Photo URL' {...register("img")} required />
                    <input className='btn btn-secondary mt-3 text-white w-full' type="submit" value="Add A Product" />
                </form>
            </div>
        </div>
    );
};
export default AddProduct;