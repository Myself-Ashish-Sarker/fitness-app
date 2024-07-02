import { Link, useNavigate } from "react-router-dom";
import login from "../../assets/login.png";
import './Login.css';
import { BsDashLg } from "react-icons/bs";
import { FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Helmet } from "react-helmet";

import Swal from 'sweetalert2';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebse/firebase.config";

const Login = () => {

    const auth = getAuth(app);

    // Google Provider
    const googleProvider = new GoogleAuthProvider();
    // Google Provider

    const navigate = useNavigate(); // Initialize useNavigate hook

    // Google sign in button functionality
    const handleGoogle = () => {
        console.log("Google");

        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);

                Swal.fire({
                    title: "Sucessfully Logged In",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 3000,
                });

                setTimeout(() => {
                    navigate('/');
                }, 3000);

                navigate('/');
            })
            .catch(err => console.log(err))
    }
    // Google sign in button functionality

    // Taking 'signIn' from the context which is 'AuthContext'
    const { signIn } = useContext(AuthContext);
    // Taking 'signIn' from the context which is 'AuthContext'

    const handleLogin = e => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        const user = { form, email, password };
        console.log(user);

        // calling 'signIn' from here
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);

                Swal.fire({
                    title: "Sucessfully Logged In",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 3000,
                });
                setTimeout(() => {
                    navigate('/');
                }, 3000);
            })
            .catch(err => {
                // check if the credential exists
                if (err.code === 'auth/invalid-credential') {
                    Swal.fire({
                        title: "No such Account have found!",
                        icon: "error",
                        showConfirmButton: true,
                        timer: 3000,
                    });
                    // check if the credential exists
                } else {
                    // Throw other possible errors
                    Swal.fire({
                        title: "Login Failed!",
                        text: 'Please try agin later',
                        icon: "error",
                        showConfirmButton: true,
                        timer: 3000,
                    });
                    // Throw other possible errors

                }

            })
        // calling 'signIn' from here
    }

    return (
        <>
            <div>
                <Helmet>
                    <title>Login</title>
                </Helmet>

            </div>
            <div className="flex justify-center mt-10">
                <div className="w-[28rem] bg-base-100 shadow-xl">
                    <div className="relative">
                        <figure><img src={login} alt="Shoes" /></figure>
                        <div className="absolute top-5 left-5">
                            <h1 className="text-3xl font-extrabold text-white">Welcome</h1>
                            <h1 className="text-3xl font-extrabold text-white">To the Website</h1>

                            <p className="mt-7 w-72 text-white pb-16">You need to login to check the private areas here, buddy!</p>

                            <Link to="/registration" className="text-white hover:underline font-semibold">Create Account</Link>
                        </div>
                    </div>
                    <div className="card-body">
                        <h2 className="text-center font-normal text-xl text-indigo-700">User Login</h2>

                        {/* form creation */}
                        <form onSubmit={handleLogin} className="card-body -mt-1 h-[18rem]">
                            <div className="form-control">
                                <input type="email" name="email" placeholder="Email" className="input input-bordered custom-box" required />
                            </div>
                            <div className="form-control">
                                <input type="password" name="password" placeholder="Password" className="input input-bordered custom-box" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-purple-900 hover:bg-purple-500 text-white">Login</button>
                            </div>
                            <div className="flex gap-4 mt-4 items-center justify-center">
                                <BsDashLg />
                                <h1>or</h1>
                                <BsDashLg />
                            </div>
                            <div className="flex justify-center">
                                <Link >
                                    <button onClick={handleGoogle}><FaGoogle className="mt-2 text-2xl" /></button>
                                </Link>
                            </div>
                        </form>
                        {/* form creation */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;