import ironHeaven from '../../assets/iron-heaven.png';
import Swal from 'sweetalert2';
import {Helmet} from "react-helmet";

const AddService = () => {

    const handleAdd = e => {
        e.preventDefault();

        const form = e.target;
        const service_image = form.service_image.value;
        const service_name = form.service_name.value;
        const service_description = form.service_description.value;
        // const name = form.name.value;
        // const image = form.image.value;
        const provider_name = form.name.value
        const provider_image = form.image.value;
        const service_area = form.service_area.value;
        const service_price = form.service_price.value;

        const service_provider = { name: provider_name, image: provider_image };

        const newAdd = { service_image, service_name, service_description, service_provider, service_area, service_price }
        console.log(newAdd);

        // send data to server
        fetch('https://fitness-app-three-ashen.vercel.app/services', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newAdd)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Service Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })

                    // reset the entire form
                    form.reset();
                }
            })
            .catch(err => {
                console.error(err);
            })
    }

    return (
        <div>
            <Helmet>
                <title>Add Service</title>
            </Helmet>
            <div className='mt-12 pb-16'>
                <h1 className='text-center text-xl md:text-2xl lg:text-5xl font-extrabold'>Add Your Desired Service Here</h1>
            </div>

            <form className="flex justify-center" onSubmit={handleAdd}>
                <div className="card card-compact w-[30rem] shadow-xl bg-gradient-to-b from-[#403B4A] to-[#E7E9BB]">
                    <div className="card-body">
                        <div className='mt-5 flex justify-center'>
                            <img className='w-28' src={ironHeaven} alt="" />
                        </div>
                        <h2 className="text-center text-3xl text-white font-extrabold">Iron Heaven</h2>

                        <div className='mt-7 w-96 mx-auto'>
                            <div>
                                <h1 className='mt-7 text-xl text-white  font-bold'>Service Indentification:</h1>
                            </div>
                            <div className="form-control">
                                <input type="text" name="service_image" placeholder="Service Image" className="mt-3 mb-5 input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <input type="text" name="service_name" placeholder="Service Name" className="mb-5 input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <input type="text" name="service_description" placeholder="Service Description" className="input input-bordered" required />
                            </div>
                            <div>
                                <h1 className='mt-7 text-xl text-white  font-bold'>Service Provider:</h1>
                            </div>
                            <div className="form-control">
                                <input type="text" name="name" placeholder="Name" className="mt-3 input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <input type="text" name="image" placeholder="Image Link" className="mt-3 input input-bordered" required />
                            </div>
                            <div>
                                <h1 className='mt-7 text-xl text-white  font-bold'>Service Provider:</h1>
                            </div>
                            <div className="form-control">
                                <input type="text" name="service_area" placeholder="Service Area" className="mt-3 input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <input type="text" name="service_price" placeholder="Service Price" className="mt-3 input input-bordered" required />
                            </div>
                            <div className="form-control mt-10 pb-5">
                                <button className="btn bg-rose-500 hover:bg-rose-400 text-white">Add Service</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            
        </div>
    );
};

export default AddService