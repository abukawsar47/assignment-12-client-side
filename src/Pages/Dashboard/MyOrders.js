import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import DeleteModal from '../../components/DeleteModal';

const MyOrders = () => {

    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const [modalData, setModalData] = useState(null);
    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            fetch(`https://safe-wildwood-72648.herokuapp.com/order?customer=${user.email}`, {
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
            <h2 className='font-bold my-2'>My Orders: {orders.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Product Id</th>
                            <th>Price</th>
                            <th>Order Cancel</th>
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
                                    {(a?.pricePerUnit && !a.paid) && <label onClick={() => { setModalData(a) }} htmlFor="delete-modal" className="btn modal-button btn-xs btn-error ">Cancel</label>}
                                    {(a?.pricePerUnit && a.paid) && <div>

                                        <button className='btn btn-xs btn-success'>Paid</button>

                                    </div>}
                                </td>
                                <td>
                                    {(a?.pricePerUnit && !a.paid) && <Link to={`/dashboard/payment/${a?._id}`}><button className='btn btn-xs btn-success'>pay</button></Link>}
                                    {(a?.pricePerUnit && a.paid) && <div className='border border-success p-2 rounded'>
                                        <p><span className='text-success'>Paid</span></p>
                                        <p>Transaction id: <br /><small className='text-success'>{a.transactionId}</small></p>
                                    </div>}
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
            {
                modalData && <DeleteModal
                    modalData={modalData}
                    setModalData={setModalData}
                    url={`https://safe-wildwood-72648.herokuapp.com/myOrder/${modalData._id}`}
                />
            }
        </div>
    );
};

export default MyOrders;