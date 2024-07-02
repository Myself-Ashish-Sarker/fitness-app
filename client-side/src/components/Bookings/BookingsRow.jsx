import React from 'react';

const BookingsRow = ({ booking }) => {

    const { _id, service_name, providerName, service_price, email, username } = booking;

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
            </tr>
        </>
    );
};

export default BookingsRow;