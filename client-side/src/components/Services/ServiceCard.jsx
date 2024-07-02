import { Link } from "react-router-dom";


const ServiceCard = ({ service }) => {

    const { _id, service_image, service_name, service_description, service_provider, service_area, service_price } = service;

    // using optional chaining to access neted objects 
    const providerImage = service_provider?.image || "";
    const providerName = service_provider?.name || "";
    // using optional chaining to access neted objects 


    console.log(providerName);
    console.log(providerImage);

    return (
        <div className="">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className="h-64" src={service_image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{service_name}</h2>
                    <p>{service_description}</p>
                    <div className="flex items-center gap-2">
                        <div>
                            <img className="rounded-lg w-6" src={ providerImage } alt="" />
                        </div>
                        <div className="badge badge-outline">{providerName}</div>
                    </div>
                    <div>
                        <p>Service Area: {service_area}</p>
                    </div>
                    <div>
                        <p>price: ${service_price}/year</p>
                    </div>
                    <div>
                        <Link to={`/servicedetails/${_id}`}>
                            <button className="btn btn-primary">Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard