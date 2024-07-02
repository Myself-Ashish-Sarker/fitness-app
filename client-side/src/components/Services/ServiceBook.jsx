import { useLoaderData } from "react-router-dom";

const ServiceBook = () => {

    const books = useLoaderData();
    const { _id, service_name, service_image, service_provider, service_price } = books;
    console.log(_id, books);

    const providerName = service_provider?.name || "";

    // const book = books.find(book => book._id == _id)
    // console.log(_id, book);

    const handleBookService = e => {
        e.preventDefault();

        const form = e.target;
        const service_name = form.service_name.value;
        const service_image = form.service_image.value;
        const providerName = form.providerName.value;
        const service_price = form.service_price.value;
        const date = form.date.value;
        const instruction = form.instruction.value;
        const username = form.username.value;
        const email = form.email.value;

        const newBook = { service_name, service_image, providerName, service_price, date, instruction, username, email };
        console.log(newBook);

        fetch('https://fitness-app-three-ashen.vercel.app/bookings', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newBook)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert("Booked!");
                }
            })
            .catch(err => console.error(err))
    }

    return (
        <div className="mt-10 flex justify-center ">
            <div className="mb-24 card w-[30rem] h-[74rem] shadow-xl border bg-gradient-to-b from-[#ff9966] from-30% via-[#ff5e62] to-100%">
                <div className="card-body">
                    <h1 className="text-center text-3xl font-semibold text-white">Book Now</h1>

                    <form className="card-body" onSubmit={handleBookService}>
                        <div className="form-control mb-5">
                            <label className="label">
                                <span className="label-text text-white">Service Name</span>
                            </label>
                            <input type="text" name="service_name" defaultValue={service_name} readOnly className="input input-bordered" required />
                        </div>
                        <div className="form-control mb-5">
                            <label className="label">
                                <span className="label-text text-white">Service Image Link</span>
                            </label>
                            <input type="text" name="service_image" defaultValue={service_image} readOnly className="input input-bordered" required />
                        </div>
                        <div className="form-control mb-5">
                            <label className="label">
                                <span className="label-text text-white">Provider Name</span>
                            </label>
                            <input type="text" name="providerName" defaultValue={providerName} readOnly className="input input-bordered" required />
                        </div>
                        <div className="form-control mb-5">
                            <label className="label">
                                <span className="label-text text-white">Price: </span>
                            </label>
                            <input type="text" name="service_price" defaultValue={service_price} readOnly className="input input-bordered" required />
                        </div>
                        <div className="form-control mb-5">
                            <label className="label">
                                <span className="label-text text-white">Date:</span>
                            </label>
                            <input type="date" name="date" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Special Instruction:</span>
                            </label>
                            <input type="text" name="instruction" className="input input-bordered" />
                            <p className="text-[0.8rem] font-bold text-yellow-500 mb-5">! If you don't want, you don't need to anything</p>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Username:</span>
                            </label>
                            <input type="text" name="username" className="input input-bordered" required />
                            <p className="text-[0.8rem] font-bold text-red-500 mb-5">* Your Username is important so write it carefully</p>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">User Email:</span>
                            </label>
                            <input type="text" name="email" className="input input-bordered" required />
                            <p className="text-[0.8rem] font-bold text-red-500 mb-5">* Your Email is most essential so write it carefully</p>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Purchase</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default ServiceBook;


// ○ Service Name ( Not editable ) done
// ○ Service Image ( Not editable ) done
// ○ Provider email ( Not editable ) nope
// ○ Provider Name (Not editable ) done
// ○ Current User email ( Not editable ) done
// ○ Current User Name( Not editable) done
// ○ Service Taking Date (editable) done
// ○ Special instruction (editable ) done
// // anything like address , area, customized service plan.
// ○ Price ( Not editable )
// ○ Purchase Button
// On clicking the Purchase Button will add all the information with a serviceStatus
// (pending) into a new collection in the database.