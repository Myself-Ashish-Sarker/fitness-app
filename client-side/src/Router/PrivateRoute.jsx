import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../components/providers/AuthProvider";
import { Navigate, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

const PrivateRoute = ({ children }) => {

    const navigate = useNavigate();

    // calling from the context
    const { user, loading } = useContext(AuthContext);
    // calling from the context

    const [showLoginAlert, setLoginAlert] = useState(false);

    useEffect(() => {
        if (!user && !loading && !showLoginAlert) {
            setLoginAlert(true);
        }
    }, [user, loading, showLoginAlert])

    useEffect(() => {
        if (showLoginAlert) {
            handleLoginAlert();
        }
    }, [showLoginAlert])

    const handleLoginAlert = () => {
        setLoginAlert(false);
        Swal.fire({
            title: "You are not logged in",
            icon: "warning",
            showConfirmButton: false,
            timer: 3000,
        })
            .then((result) => {
                navigate('/login')
            })
    }

    if (user?.email) {
        return children;
    }

    if (loading) {
        return <span className="loading loading-dots loading-3xl"></span>
    }

    // if (user) {
    //     return children;
    // }

    return user ? children : null;


};

export default PrivateRoute;