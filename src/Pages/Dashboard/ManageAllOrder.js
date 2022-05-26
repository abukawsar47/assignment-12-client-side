import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
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
                            <th>Payment Status</th>

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
                                    {(a?.pricePerUnit && !a.paid) && <button className='btn btn-xs btn-error'>Cancel</button>}
                                    {(a?.pricePerUnit && a.paid) && <div>
                                        <button className='btn btn-xs btn-error hidden'>Delete</button>
                                    </div>}
                                </td>
                                <td>
                                    {(a?.pricePerUnit && !a.paid) && <button className='btn btn-xs btn-success'>Unpaid</button>}
                                    {(a?.pricePerUnit && a.paid) && <div className='border border-success p-2 rounded'>
                                        <p><span className='text-success font-bold'>Ready To Shipped</span></p>
                                        <p>Transaction id: <br /><small className='text-success'>{a.transactionId}</small></p>
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