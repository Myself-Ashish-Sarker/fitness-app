import { Link, useLoaderData, useParams } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";
import {Helmet} from "react-helmet";

const ServiceDetails = () => {

    const details = useLoaderData();
    const { _id } = useParams();
    console.log(_id, details);

    const detail = details.find(detail => detail._id == _id)
    console.log(_id, detail);


    return (
        <div className="mt-10 flex flex-col items-center">
            <Helmet>
                <title>Service Details</title>
            </Helmet>
            <div className=" flex items-center justify-start gap-3">
                <img className="rounded-full w-12" src={detail.service_provider.image} alt="" />
                <h1 className="text-2xl font-extrabold">{detail.service_provider.name}</h1>
            </div>
            <div className="mb-5">
                <h1 className=" font-semibold">{detail.service_area}</h1>
            </div>
            <div>
                <img className="rounded-lg w-[50rem] mx-auto" src={detail.service_image} alt="" />
            </div>
            <div className="mt-10">
                <h1 className="text-3xl"><span className="underline">Service Name:</span> {detail.service_name}</h1>
            </div>
            <div className="mt-10">
                <h1 className="text-3xl"><span className="underline">Service Description:</span> {detail.service_description}</h1>
            </div>
            <div className="mt-10">
                <h1 className="text-3xl"><span className="underline">Price:</span> {detail.service_price}</h1>
            </div>

            <div className="mt-16 flex items-center justify-center gap-12">
                <div>
                    <Link to="/allservices">
                        <button className="flex items-center gap-2 btn bg-black text-white"><FaLongArrowAltLeft /> Go Back</button>
                    </Link>
                </div>
                <div>
                    <Link to={`/servicebook/${_id}`}>
                        <button className="flex items-center gap-2 btn bg-black text-white">Book Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;