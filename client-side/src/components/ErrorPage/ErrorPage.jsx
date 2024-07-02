import { Link } from "react-router-dom";
import error from "../../assets/error.png";
import {Helmet} from "react-helmet";

const ErrorPage = () => {
    return (
        <>
        <Helmet>
                <title>Error</title>
            </Helmet>
            <div className="flex flex-col justify-center items-center h-screen">
                <img src={error} alt="" />
                <div className="flex justify-center">
                <button className="btn btn-primary"><Link to="/">Home</Link></button>
            </div>
            </div>
            
        </>
    );
};

export default ErrorPage