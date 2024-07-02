import React, { useState } from 'react';
import { AiOutlineCheck } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { useLoaderData } from 'react-router-dom';

const ManageServicesRow = ({ manage, handleDelete }) => {

    const { _id, service_name, providerName, service_price } = manage;

    const [isModalOpen, setIsModalOpen] = useState(false);

    const UpdateSubmit = e => {
        e.preventDefault();

        const form = e.target;
        const _id = form._id.value;
        const service_name = form.service_price.value;
        const providerName = form.providerName.value;
        const service_price = form.service_price.value;

        const user = { _id, service_name, providerName, service_price };
        console.log(user);
    }

    // fetch(`https://fitness-app-three-ashen.vercel.app/bookings/${_id}`, {
    //     method: "PUT",
    //     headers: {
    //         'content-type': 'application/json'
    //     },
    //     body: JSON.stringify()
    // })
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //     })
    //     .catch(err => console.error(err))


    
    const closeModal = () => {
        setIsModalOpen(false);
    }

    return (
        <>
            <tr>
                <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                        </div>
                        <div>
                            <div className="font-bold">{service_name}</div>
                        </div>
                    </div>
                </td>
                <td>
                    {providerName}
                </td>
                <td>{service_price}</td>
                <td>{_id}</td>
                <td>
                    <button className="btn bg-yellow-500 text-white" onClick={() => setIsModalOpen(true)}>Edit</button>
                </td>
                <td>
                    <button onClick={() => handleDelete(_id)} className='btn bg-red-500 text-white'>Delete</button>
                </td>
            </tr>
            {isModalOpen && (
                <dialog open className="modal">
                    <div className="modal-box">
                        <form onSubmit={UpdateSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Service ID</span>
                                </label>
                                <input type="text" className="input input-bordered" name='_id' defaultValue={_id} readOnly required />
                                <div className="flex items-center gap-2">
                                    <AiOutlineClose className='text-red-500 font-semibold' />
                                    <p className='text-sm text-red-500 font-semibold'>You can't change the <span className='italic'>id</span> number here</p>
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Service Name</span>
                                </label>
                                <input type="text" className="input input-bordered" name='service_name' defaultValue={service_name} required />
                                <div className="flex items-center gap-2">
                                    <AiOutlineCheck className='text-emerald-500 font-semibold' />
                                    <p className='text-sm text-emerald-500 font-semibold'>You can change<span className='italic'> service name</span></p>
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Provider Name</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" name='providerName' defaultValue={providerName} required />
                                <div className="flex items-center gap-2">
                                    <AiOutlineCheck className='text-emerald-500 font-semibold' />
                                    <p className='text-emerald-500 font-semibold'>You can change the "<span>provider</span>" name</p>
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Service Price</span>
                                </label>
                                <input type="text" className="input input-bordered" name='service_price' defaultValue={service_price} readOnly required />
                                <div className="flex items-center gap-2">
                                    <AiOutlineClose className='text-red-500 font-semibold' />
                                    <p className='text-sm text-red-500 font-semibold'>You can't change the "<span className='italic'>price</span>"</p>
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Update</button>
                            </div>
                        </form>
                        <div className='flex justify-center'>
                            <button className='btn bg-red-500 hover:bg-red-400 text-white font-semibold' onClick={closeModal}>Close</button>
                        </div>
                    </div>
                </dialog>
            )}
        </>
    );
};

export default ManageServicesRow;