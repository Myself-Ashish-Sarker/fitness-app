import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Registration from "../Registration/Registration";
import PrivateRoute from "./PrivateRoute";
import Services from "../components/Services/Services";
import AddService from "../components/Services/AddService";
import ServiceDetails from "../components/Services/ServiceDetails";
import ServiceBook from "../components/Services/ServiceBook";
import Bookings from "../components/Bookings/Bookings";
import ManageServices from "../components/Services/ManageServices";

import ServiceToDo from "../components/Services/ServiceToDo";
import ErrorPage from "../components/ErrorPage/ErrorPage";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/registration",
                element: <Registration></Registration>
            },
            {
                path: '/allservices',
                element: <Services></Services>
            },
            {
                path: '/addservice',
                element: <AddService></AddService>
            },
            {
                path: '/servicedetails/:_id',
                element: <ServiceDetails></ServiceDetails>,
                loader: () => fetch(`https://fitness-app-three-ashen.vercel.app/services`)
            },
            {
                path: '/servicebook/:id',
                element: <PrivateRoute><ServiceBook></ServiceBook></PrivateRoute>,
                loader: ({ params }) => fetch(`https://fitness-app-three-ashen.vercel.app/services/${params.id}`)
            },
            {
                path: '/bookings',
                element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
            },
            {
                path: '/managebookings',
                element: <PrivateRoute><ManageServices></ManageServices></PrivateRoute>
            },
            {
                path: '/servicetodo',
                element: <PrivateRoute><ServiceToDo></ServiceToDo></PrivateRoute>
            }
        ]
    }
])

export default Router