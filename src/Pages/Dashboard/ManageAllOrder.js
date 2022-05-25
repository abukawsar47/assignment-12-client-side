import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

const ManageAllOrder = () => {

    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            fetch(`https://safe-wildwood-72648.herokuapp.com/order`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => {

                    setOrders(data);
                });
        }
    }, [user])


    return (
        <div>
            <h2 className='font-bold my-2'>Total Orders: {orders.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Product Id</th>
                            <th>Price</th>
                            <th>Order Delete</th>
                            <th>Payment</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((a, index) => <tr key={a?._id}>
                                <th>{index + 1}</th>
                                <td>{a?.product}</td>
                                <td>{a?.productId}</td>
                                <td>{a?.pricePerUnit}</td>
                                <td>
                                    <label htmlFor="delete-confirm-modal" className="btn btn-xs btn-error">Delete</label>
                                </td>
                                <td>
                                    {(a?.pricePerUnit && !a.paid) && <div>
                                        <button className='btn btn-sm text-success'>Ready To Shipped</button>
                                    </div>}
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};



export default ManageAllOrder;