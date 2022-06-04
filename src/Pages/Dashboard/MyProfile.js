import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyProfile = () => {
    // const [load, setLoad] = useState(false);
    const [dbUser, setDbUser] = useState({});
    const [user] = useAuthState(auth);

    useEffect(() => {
        fetch(`https://safe-wildwood-72648.herokuapp.com/profile/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                if (data?.insertedId) {
                    toast.success('Successfully added your Data!')
                }
                setDbUser(data);
                console.log(data);
            });
    }, [dbUser, user?.email])
    // console.log(load);
    const onSubmit = async e => {
        e.preventDefault();

        const name = (e.target.name.value || dbUser?.name) || '';
        const email = (e.target.email.value || dbUser?.email) || '';
        const education = (e.target.education.value || dbUser?.education) || '';
        const address = (e.target.address.value || dbUser?.address) || '';
        const phone = (e.target.phone.value || dbUser?.phone) || '';
        const linkedin = (e.target.linkedin.value || dbUser?.linkedin) || '';

        const user = {
            name,
            email,
            education,
            phone,
            address,
            linkedin
        };

        console.log(user);

        fetch(`https://safe-wildwood-72648.herokuapp.com/profile/${dbUser?.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                /*  authorization: `Bearer ${localStorage.getItem('accessToken')}` */
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.upsertedId) {
                    toast.success('Successfully updated profile!')
                    // setLoad(!load)
                }
                e.target.reset();
            })
    };

    return (
        <div className='mt-16'>
            <section className='z-50 relative mx-auto md:mt-12 grid lg:grid-cols-2 grid-cols-1 lg:px-10 px-5 my-10 gap-10'>
                <div className='card flex-shrink-0 max-w-lg shadow-2xl p-5'>
                    <div className="d-flex flex-lg-row flex-column justify-content-center ">
                        <div className="d-flex justify-content-center">
                            <div className="me-lg-5">
                                <h1 className="text-3xl pb-5 font-bold text-primary">My Profile</h1>
                                <div className='avatar'>
                                    <div className='w-40 rounded-full ring ring-primary ring-offset-base-100 my-4'>
                                        <img
                                            className="rounded-circle user-photo mb-5"
                                            src={
                                                user.photoURL
                                                    ? user.photoURL
                                                    : dbUser?.photoURL
                                                        ? dbUser?.photoURL
                                                        : "https://foxdogconsultants.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png"
                                            }
                                            alt="userPhoto"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <p className='my-4'>
                                <strong>Name: </strong>
                                <span>
                                    {dbUser?.displayName
                                        ? dbUser?.displayName
                                        : user?.displayName
                                            ? user?.displayName
                                            : " "}
                                </span>
                            </p>
                            <p className='my-4'>
                                <strong>Email: </strong>
                                <span>{
                                    dbUser?.email
                                        ? dbUser?.email
                                        : user?.email
                                            ? user?.email
                                            : " "
                                }</span>
                            </p>
                            <p className='my-4'>
                                <strong>Education: </strong>
                                <span>{
                                    dbUser?.education
                                        ? dbUser?.education
                                        : user?.education
                                            ? user?.education
                                            : " "
                                }</span>
                            </p>

                            <p className='my-4'>
                                <strong>Phone: </strong>
                                <span>{
                                    dbUser?.phone
                                        ? dbUser?.phone
                                        : user?.phone
                                            ? user?.phone
                                            : " "
                                }</span>
                            </p>
                            <p className='my-4'>
                                <strong>Address : </strong>
                                <span>{
                                    dbUser?.address
                                        ? dbUser?.address
                                        : user?.address
                                            ? user?.address
                                            : " "
                                }</span>
                            </p>
                            <p className='my-4'>
                                <strong>Linkedin: </strong>
                                <span></span>
                                <a target="_blank"
                                    href={dbUser?.linkedin
                                        ? dbUser?.linkedin
                                        : user?.linkedin
                                            ? user?.linkedin
                                            : " "}
                                >
                                    {dbUser?.linkedin
                                        ? dbUser?.linkedin
                                        : user?.linkedin
                                            ? user?.linkedin
                                            : " "}
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

                <div className='card flex-shrink-0 max-w-lg shadow-2xl p-5 mx-auto'>
                    <form onSubmit={onSubmit} className='mx-auto'>
                        <h1 className="text-3xl font-bold pb-3 text-primary">Update Profile</h1>
                        <label htmlFor="name" className='mx-1 text-sm'>Name</label>
                        <input type="text" name="name" value={user?.displayName} className='w-full p-2 my-1 rounded-lg border outline-purple-200' placeholder='Your Name' id="" />

                        <label htmlFor="name" className='mx-1 text-sm'>Email</label>
                        <input type="text" name="email" value={user?.email} className='w-full p-2 my-1 rounded-lg border outline-purple-200' placeholder='Your Name' id="" />

                        <label htmlFor="education" className='mx-1 text-sm'>Education</label>
                        <input type="text" name="education" className='w-full p-2 my-1 rounded-lg border outline-purple-200' placeholder='Your Education' id="" />

                        <label htmlFor="phone" className='mx-1 text-sm'>Phone</label>
                        <input type="number" name="phone" className='w-full p-2 my-1 rounded-lg border outline-purple-200' placeholder='Your Phone' id="" />

                        <label htmlFor="address" className='mx-1 text-sm'>Address</label>
                        <input type="text" name="address" className='w-full p-2 my-1 rounded-lg border outline-purple-200' placeholder='Your address' id="" />

                        <label htmlFor="linkedin" className='mx-1 text-sm'>Linkedin</label>
                        <input type="text" name="linkedin" className='w-full p-2 my-1 rounded-lg border outline-purple-200' placeholder='Your Linkedin' id="" />

                        <input type="submit" className="btn w-full mt-3 btn-primary text-white" value="Update Profile" />
                    </form>
                </div>
            </section>
        </div>
    );
};

export default MyProfile;