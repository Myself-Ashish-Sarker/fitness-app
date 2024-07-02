import Banner from "../Banner/Banner";
import ExtraTwo from "../ExtraTwo/ExtraTwo";
import MarqueeStand from "../Marquee/MarqueeStand";
import PopularServices from "../Services/PopularServices";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularServices></PopularServices>
            <div className="mt-20">
                <h1 className="mb-10 text-center text-4xl font-bold">These Companies Used Our Services</h1>
                <MarqueeStand></MarqueeStand>
            </div>
            <Testimonials></Testimonials>
            <ExtraTwo></ExtraTwo>
        </div>
    );
};

export default Home;