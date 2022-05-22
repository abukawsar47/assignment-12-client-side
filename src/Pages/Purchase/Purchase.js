/* import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Purchase = () => {
    const [user] = useAuthState(auth);
    const [purchases, setPurchases] = useState([]);
    const navigate = useNavigate();
    const handlePlaceOrder = event => {
        event.preventDefault();
        const order = {
            email: user.email,
            product: product.name,
            productId: productId,
            productQuantity: event.target.address.value,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
        axios.post('https://sleepy-wildwood-59258.herokuapp.com/order', order)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast('Your order is booked!!!');
                    event.target.reset();
                }
            })
    }

    return (
        <div className='w-50 mx-auto'>
            <h2>Please Order: {product.name}</h2>

            <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-2' type="text" value={user?.displayName} name="name" placeholder='name' required readOnly disabled />
                <br />
                <input className='w-100 mb-2' type="email" value={user?.email} name="email" placeholder='email' required readOnly disabled />
                <br />
                <input className='w-100 mb-2' type="text" value={product.name} name="product" placeholder='Product' required readOnly />
                <br />
                <input className='w-100 mb-2' type="text" name="address" placeholder='address' autoComplete='off' required />
                <br />
                <input className='w-100 mb-2' type="text" name="phone" placeholder='phone' required />
                <br />
                <input className='btn btn-primary' type="submit" value="Place Order" />
            </form>
        </div>
    );
};
export default Purchase; */