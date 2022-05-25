import React from 'react';
// import { toast } from 'react-toastify';

const ProductRow = ({ product, index, refetch, setDeletingProduct }) => {
    const { name, img, _id } = product;

    return (
        <tr>
            <th>{index + 1}</th>
            <td><div className="avatar">
                <div className="w-10">
                    <img src={img} alt={name} />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{_id}</td>
            <td>
                <label onClick={() => setDeletingProduct(product)} htmlFor="delete-confirm-modal" className="btn btn-xs btn-error">Delete</label>
            </td>
        </tr>
    );
};
export default ProductRow;