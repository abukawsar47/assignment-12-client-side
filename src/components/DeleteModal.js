import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';

const DeleteModal = ({ modalData, setModalData, url }) => {

    const handleProceed = () => {
        axios.delete(url)
        toast.success('Successfully Canceled Order!')
        setModalData(null)
    }

    return (
        <div>
            <input type="checkbox" id="delete-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="delete-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Congratulations random Interner user!</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className="flex justify-end gap-5">
                        <button onClick={() => { handleProceed() }} className='btn btn-xs btn-error'>Proceed</button>
                        <button onClick={() => { setModalData(null) }} className='btn btn-xs'>Cancel</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteModal;