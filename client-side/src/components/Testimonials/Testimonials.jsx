const Testimonials = () => {
    return (
        <>
            <div className="mt-20">
                <h1 className="mb-7 text-center text-4xl font-extrabold text-rose-500">Our Testimonials </h1>
            </div>
            <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-36">
                <div>
                    <div className="border-2 w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <p>“You made it so simple. My new exercise is so much faster and easier to work with than my old exercise. I just choose the custom, make the change.”</p>

                            <div className="mt-4 flex items-center gap-4">
                                <img className="rounded-full w-10 h-10" src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png" />
                                <div>
                                    <h1 className="font-semibold">Leslie Alexander</h1>
                                    <p>Freelance React Developer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="border-2 w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <p>“Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.”</p>

                            <div className="mt-4 flex items-center gap-4">
                                <img className="rounded-full w-10 h-10" src="https://img.daisyui.com/tailwind-css-component-profile-3@56w.png" alt="Avatar Tailwind CSS Component" />
                                <div>
                                    <h1 className="font-semibold">Jacob Jones</h1>
                                    <p>Digital Marketer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="border-2 w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <p>“I cannot believe that I have got a brand new scedule after getting Omega. It was super easy to edit and publish.”</p>

                            <div className="mt-4 flex items-center gap-4">
                                <img className="rounded-full w-10 h-10" src="https://img.daisyui.com/tailwind-css-component-profile-5@56w.png" alt="Avatar Tailwind CSS Component" />
                                <div>
                                    <h1 className="font-semibold">Jenny Wilson</h1>
                                    <p>Graphic Designer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};


export default Testimonials;