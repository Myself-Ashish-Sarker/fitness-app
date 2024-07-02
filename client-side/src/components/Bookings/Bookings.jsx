import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import BookingsRow from "./BookingsRow";
import {Helmet} from "react-helmet";


const Bookings = () => {

    const { user } = useContext(AuthContext);

    const [bookings, setBookings] = useState([]);
    const [username, setUsername] = useState("");

    const url = `https://fitness-app-three-ashen.vercel.app/bookings?email=${user.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setBookings(data);
                setUsername(data[0].username);
            })
            .catch(err => console.error(err))
    }, [url])

    return (
        <div className="mt-10">
            <Helmet>
                <title>Booked Services</title>
            </Helmet>
            <h2 className="text-center text-3xl">Welcome "<span className="italic">{username}"</span>, to your booking list</h2>
            <h2 className="text-center my-7 text-xl">Your Bookings are: {bookings.length}</h2>

            <div className="overflow-x-auto">
                <table className="table w-1/2 mx-auto">
                    {/* head */}
                    <thead>
                        <tr className="bg-gradient-to-r from-[#136a8a] to-[#267871] text-white text-base">
                            <th>Service Name</th>
                            <th>Provider name</th>
                            <th>Service Price</th>
                            <th>Service ID</th>
                        </tr>
                    </thead>
                    <tbody className="border">
                        {
                            bookings.map(booking => <BookingsRow
                                key={booking._id}
                                booking={booking}
                            ></BookingsRow>)
                        }
                    </tbody>

                </table>
            </div>

            <h2 className="text-center mt-10">Your email address is: <span className="italic">"{user.email}"</span></h2>
        </div>
    );
};

export default Bookings;