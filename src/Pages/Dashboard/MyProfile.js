import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [dbUser, setDbUser] = useState({});
    const [user] = useAuthState(auth);
    const { email, education, phone, city, linkedin } = dbUser;

    useEffect(() => {
        fetch(`http://localhost:5000/user/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                if (data?.insertedId) {
                    toast.success('Successfully added your Data!')
                }
                setDbUser(data);
            });
    }, [dbUser, user?.email])

    const onSubmit = async e => {
        e.preventDefault();

        const newName = (e.target.name.value || dbUser?.name) || '';
        const newEmail = (e.target.email.value || dbUser?.email) || '';
        const education = (e.target.education.value || dbUser?.education) || '';
        const city = (e.target.city.value || dbUser?.city) || '';
        const phone = (e.target.phone.value || dbUser?.phone) || '';
        const linkedin = (e.target.linkedin.value || dbUser?.linkedin) || '';

        const user = { name: newName, email: newEmail, education, phone, city, linkedin };
        console.log(user);

        fetch(`http://localhost:5000/user/${dbUser?.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.upsertedId) {
                    toast.success('Successfully updated profile!')
                }
                e.target.reset();
            })
    };
    return (
        <div className='mt-16'>
            <section className='z-50 relative mx-auto md:mt-12 grid lg:grid-cols-2 grid-cols-1 lg:px-10 px-5 my-10 gap-10'>
                <div className='flex lg:mt-0 mt-96 justify-content-center items-center'>
                    <div className="card w-96 shadow-xl mx-auto">
                        <div className='card-body shadow-lg p-8 rounded-xl border-2'>
                            <h1 className="card-title text-3xl text-neutral font-bold">My Profile</h1>
                            <p>Name : <span className="font-bold">{user?.displayName}</span></p>
                            <p>Email : <span className="font-bold">{user?.email}</span></p>
                            <p>Education : <span className="font-bold">{education ? education : 'Not set'}</span></p>
                            <p>Address : <span className="font-bold">{city ? city : 'Not set'}</span></p>
                            <p>Phone : <span className="font-bold">{phone ? phone : 'Not set'}</span></p>
                            <p>Linkedin : <span className="font-bold">{linkedin ? linkedin : 'Not set'}</span></p>
                        </div>
                    </div>
                </div>

                <div className='card flex-shrink-0 max-w-lg shadow-2xl p-5 mx-auto'>
                    <form onSubmit={onSubmit} className='mx-auto'>
                        <h1 className="text-3xl font-bold pb-3 text-primary">Update Profile</h1>
                        <label htmlFor="name" className='mx-1 text-sm'>Name</label>
                        <input type="text" name="name" className='w-full p-2 my-1 rounded-lg border outline-purple-200' placeholder='Your Name' id="" />

                        <label htmlFor="name" className='mx-1 text-sm'>Email</label>
                        <input type="text" name="email" className='w-full p-2 my-1 rounded-lg border outline-purple-200' placeholder='Your Name' id="" />

                        <label htmlFor="education" className='mx-1 text-sm'>Education</label>
                        <input type="text" name="education" className='w-full p-2 my-1 rounded-lg border outline-purple-200' placeholder='Your Education' id="" />

                        <label htmlFor="phone" className='mx-1 text-sm'>Phone</label>
                        <input type="number" name="phone" className='w-full p-2 my-1 rounded-lg border outline-purple-200' placeholder='Your Phone' id="" />

                        <label htmlFor="city" className='mx-1 text-sm'>City</label>
                        <input type="text" name="city" className='w-full p-2 my-1 rounded-lg border outline-purple-200' placeholder='Your City' id="" />

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