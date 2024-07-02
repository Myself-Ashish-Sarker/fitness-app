import { useLoaderData } from "react-router-dom";

const UpdateService = () => {

    const services = useLoaderData();
    const { _id, service_name } = services

    return (
        <div>
            <h1>Id is: {_id}</h1>
        </div>
    );
};

export default UpdateService