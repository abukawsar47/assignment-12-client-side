import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = () => {
    const [review, setReview] = useState({});
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [user] = useAuthState(auth);
    // console.log(user);

    const handleReview = handleSubmit(async (data, e) => {
        e.preventDefault();

        const review = {
            img: user?.photoURL,
            name: user?.displayName,
            user: user?.email,
            review: e?.target?.review?.value,
            location: e?.target?.location?.value,
        }
        console.log(user);
        console.log(review);
        console.log(localStorage.getItem('accessToken'));
        fetch('https://safe-wildwood-72648.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(result => {
                setReview(result)
                console.log(result);
                if (result?.insertedId) {
                    toast.success('Successfully placed your Review!')
                }
                e.target.reset();
            })
    });

    return (
        <section className='py-10 px-2'>
            <div className='lg:w-2/3 mx-auto shadow-xl productId  bg-base-100'>
                <div className='p-3 my-10 w-full'>
                    <form onSubmit={handleReview} className='  p-4 '>
                        <h1 className="text-3xl font-bold pb-3 text-primary">Add Your Review</h1>

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

                                <input type="email" value={user?.email} readOnly {...register("user")} className="input input-bordered w-full" />
                            </div>
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>

                            <input type="text" placeholder="Your Location" {...register("location", { required: true })} className="input input-bordered w-full" />

                            <label className="label">
                                <span className="label-text-alt text-error">{errors.location?.type === 'required' && "location is required"}</span>
                            </label>
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Comment</span>
                            </label>

                            <textarea type="text" placeholder="Your Comment" {...register("review", { required: true, maxLength: 200 })} className="input input-bordered w-full" />

                            <label className="label">
                                <span className="label-text-alt text-error">{errors.review?.type === 'required' && "review is required"}</span>
                            </label>
                        </div>


                        <input type="submit" disabled={errors?.review} className="btn btn-secondary text-white w-full" value="Review" />
                    </form>
                </div>
            </div>

        </section>
    );
};

export default AddReview;