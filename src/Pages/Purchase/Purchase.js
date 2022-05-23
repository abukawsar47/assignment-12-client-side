import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const Purchase = ({ product, setProduct, refetch }) => {
    // const { _id, name, price } = product;
    const [user, loading, error] = useAuthState(auth);

    const handleBooking = event => {
        event.preventDefault();

        /*        const order = {
                   productId: _id,
                   product: name,
                   price,
                   purchaser: user.email,
                   purchaserName: user.displayName,
                   quantity: event.target.phone.value,
                   phone: event.target.phone.value,
                   address: event.target.phone.value
               } */

        /*       fetch('http://localhost:5000/order', {
                  method: 'POST',
                  headers: {
                      'content-type': 'application/json'
                  },
                  body: JSON.stringify(order)
              })
                  .then(res => res.json())
                  .then(data => {
                      if (data.success) {
                          toast.success(`Your order is Accepted`)
                      }
                      else {
                          toast.error(`Sorry, something is wrong!`)
                      }
                      setProduct(null);
                      refetch();
                  }); */
    }

    return (
        <div>

            <div className="min-h-screen my-16">
                {/* <h3 className="font-bold text-lg text-secondary">Booking for: {name}</h3> */}
                <form onSubmit={handleBooking} className='lg:w-2/4 mx-auto grid grid-cols-1 gap-3 justify-items-center mt-2'>
                    <label className="text-left w-full font-bold">Purchase Quantity <span className='text-red-500'>*</span></label>
                    <input type="number" name="quantity" placeholder="Quantity" className="input input-bordered w-full" required />
                    <label className="text-left w-full font-bold">Contact Number <span className='text-red-500'>*</span></label>
                    <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full" required />
                    <label className="text-left w-full font-bold">Address</label>
                    <input type="text" name="address" placeholder="Address" className="input input-bordered w-full" />
                    <label className="text-left w-full font-bold">Purchaser Name</label>
                    <input type="text" name="name" disabled value={user?.displayName || ''}
                        className="input input-bordered w-full" />
                    <label className="text-left w-full font-bold">Purchaser Email</label>
                    <input type="email" name="email" disabled value={user?.email || ''} className="input input-bordered w-full" />

                    <input type="submit" value="Order" className="btn btn-secondary text-white w-full mt-2" />
                </form>
            </div>
        </div>
    );
};
export default Purchase;