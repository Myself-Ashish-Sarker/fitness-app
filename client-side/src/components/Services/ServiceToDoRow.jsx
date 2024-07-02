import React, { useEffect, useState } from 'react';

const ServiceToDoRow = ({ manage }) => {
    const { _id, service_name, providerName, service_price } = manage;

    // Load selected option from local storage when component mounts
    const storedOption = localStorage.getItem(`selectedOption_${_id}`);
    const initialOption = storedOption || 'pending'; // Use stored option if available, otherwise default to 'pending'

    // Initialize state for selected option
    const [selectedOption, setSelectedOption] = useState(initialOption);

    // Function to handle change in select
    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    // Save selected option to local storage whenever it changes
    useEffect(() => {
        localStorage.setItem(`selectedOption_${_id}`, selectedOption);
    }, [selectedOption, _id]);

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
                    <select className='border p-2 rounded-sm' name="action" id="action" value={selectedOption} onChange={handleSelectChange}>
                        <option value="pending"><span className="font-semibold text-yellow-500">pending</span></option>
                        <option value="working"><span className="font-semibold text-rose-500">working</span></option>
                        <option value="completed"><span className='font-semibold text-emerald-500'>completed</span></option>
                    </select>
                </td>
            </tr>
        </>
    );
};

export default ServiceToDoRow;