import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import ManageServiceRow from "./ManageServicesRow";
import Swal from 'sweetalert2'
import ServiceToDoRow from "./ServiceToDoRow";
import {Helmet} from "react-helmet";

const ServiceToDo = () => {

    const { user } = useContext(AuthContext);

    const [manages, setManages] = useState([]);
    const [username, setUsername] = useState("");

    const url = `https://fitness-app-three-ashen.vercel.app/bookings?email=${user.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setManages(data);
                setUsername(data[0].username);
            })
            .catch(err => console.error(err))
    }, [url])

    // delete button
    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://fitness-app-three-ashen.vercel.app/bookings/${id}`, {
                    method: "DELETE",

                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                            // update remaining entries without a reload
                            const remaining = manages.filter(manage => manage._id !== id);
                            setManages(remaining);
                            // update remaining entries without a reload
                        }
                    })
            }
        });
    }
    // delete button

    

    return (
        <div className="mt-10">
            <Helmet>
                <title>Service To Do</title>
            </Helmet>
            <h2 className="text-center text-3xl">Welcome to your managing list, "<span className="italic">{username}"</span></h2>
            <div className="overflow-x-auto mt-16">
                <table className="table w-1/2 mx-auto">
                    {/* head */}
                    <thead>
                        <tr className="bg-gradient-to-r from-[#136a8a] to-[#267871] text-white text-base">
                            <th>Service Name</th>
                            <th>Provider name</th>
                            <th>Service Price</th>
                            <th>Service ID</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="border">
                        {
                            manages.map(manage => <ServiceToDoRow
                                key={manage._id}
                                manage={manage}
                                handleDelete={handleDelete}
                            ></ServiceToDoRow>)
                        }
                    </tbody>

                </table>
            </div>

            <h2 className="text-center mt-10">Your email address is: <span className="italic">"{user.email}"</span></h2>
        </div>
    );
};

export default ServiceToDo