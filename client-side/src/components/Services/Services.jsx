import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import {Helmet} from "react-helmet";


const Services = () => {

    const [services, setServices] = useState([]);


    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        fetch('https://fitness-app-three-ashen.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(err => console.log(err))
    }, [])

    // --->>
    const filteredServices = services.filter(service =>
        service.service_name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <Helmet>
                <title>All Services</title>
            </Helmet>
            <h1 className="mt-16 mb-16 text-center font-extrabold text-4xl">All services: {services.length}</h1>

            <div className="my-10 gap-4 flex flex-col items-center justify-center">
                <div className="form-control">
                    <input
                        type="text"
                        placeholder="Search"
                        className="input input-bordered w-64"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <button className="btn btn-primary w-24">Search</button>
            </div>

            <div className="grid justify-items-center gap-y-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">

                {
                    filteredServices.map(service => (
                        <ServiceCard
                            key={service._id}
                            service={service}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default Services;