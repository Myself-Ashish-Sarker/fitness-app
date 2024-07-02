import React, { useEffect, useState } from 'react';
import PopularServicesCard from './PopularServicesCard';

const PopularServices = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://fitness-app-three-ashen.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className='mt-36'>
            <div>
                <h1 className='mb-10 text-5xl text-red-500 font-extrabold text-center'>We Humbly Welcome You</h1>
            </div>

            <div className="grid justify-items-center gap-y-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">

                {
                    services.slice(0, 6).map(service => (
                        <PopularServicesCard
                            key={service._id}
                            service={service}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default PopularServices