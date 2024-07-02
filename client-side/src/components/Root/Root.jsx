import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import {Helmet} from "react-helmet";

const Root = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;