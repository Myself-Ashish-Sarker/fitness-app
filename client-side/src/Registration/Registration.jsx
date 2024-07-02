import { FaAsterisk } from "react-icons/fa";
import "./Registration.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../components/providers/AuthProvider";
import Swal from 'sweetalert2';
import {Helmet} from "react-helmet";

const Registration = () => {

    // importing context 
    const { createUser } = useContext(AuthContext);
    // importing context 

    // navigate hook
    const navigate = useNavigate();
    // navigate hook

    // Sign up button functionality
    const handleSignUp = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const image = form.image.value;

        const user = { form, name, email, password, image };
        console.log(user);

        // password validation criteria
        const hasUppercase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasMinLength = password.length >= 6;
        // password validation criteria

        // checkif all the criterias are met
        if(!hasUppercase || !hasLowerCase || !hasMinLength) {
            // show a error alert
            Swal.fire({
                title: "Invalid Password",
                icon: "error",
                showConfirmButton: false,
                timer: 3000,
            });
            // show a error alert

            return; //Ext the total process
        }
        // checkif all the criterias are met

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);

                Swal.fire({
                    title: "Sucessfully Registered",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 3000,
                });

                setTimeout(() => {
                    navigate('/');
                }, 3000)
            })

            .catch(err => {
                // check if same account exists
                if (err.code === 'auth/email-already-in-use') {
                    Swal.fire({
                        title: "Email Already Registered!",
                        icon: "error",
                        showConfirmButton: true,
                        timer: 3000,
                    });
                // check if same account exists
                } else {
                    // show other errors
                    console.err("Firebase Error", err)
                    Swal.fire({
                        title: "Registration Error!",
                        icon: "error",
                        showConfirmButton: true,
                        timer: 3000,
                    });
                    // show other errors
                }
            })
    }
    // Sign up button functionality

    return (
        <div className="flex justify-center mt-16">
            <Helmet>
                <title>Registration</title>
            </Helmet>
            <div className="w-[28rem] h-[39rem] shadow-xl bg-[#2ba2a9]">
                <div className="card-body">
                    <div className="flex items-center justify-center gap-4">
                        <h1 className="text-sm"><FaAsterisk /></h1>
                        <h1 className="text-3xl">Registration</h1>
                        <h1 className="text-sm"><FaAsterisk /></h1>
                    </div>

                    {/* Main form */}
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control pb-7">
                            <input name="name" type="text" placeholder="   Username" className="custom-border" required />
                        </div>
                        <div className="form-control pb-7">
                            <input name="email" type="text" placeholder="*  Email" className="custom-border" required />
                        </div>
                        <div className="form-control ">
                            <input name="password" type="password" placeholder="*  Password" className="custom-border" required />
                        </div>
                        <div className="pb-7">
                            <p className="text-sm text-red-700 font-extrabold">* Must include a Capital letters</p>
                            <p className="text-sm text-red-700 font-extrabold">* Must include a Small letters</p>
                            <p className="text-sm text-red-700 font-extrabold">* Must be more then 6 letters</p>
                        </div>
                        <div className="form-control pb-7">
                            <input name="image" type="text" placeholder="    Photo URL" className="custom-border" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#12133e] hover:bg-[#1a1b4a] border-none text-white">Login</button>
                        </div>
                        <div className="mt-2">
                            <h1>Already have an account? <Link to="/login" className="text-white hover:text-black hover:underline">Login Here</Link></h1>
                        </div>
                    </form>
                    {/* Main form */}

                </div>
            </div>
        </div>
    );
};

export default Registration;