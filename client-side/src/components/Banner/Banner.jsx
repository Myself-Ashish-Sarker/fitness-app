import { Typewriter } from "react-simple-typewriter";
import one from "../../assets/new1.png";
import two from "../../assets/new2.png";
import three from "../../assets/new3.png";
import four from "../../assets/new4.png";
import five from "../../assets/new5.png";

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">

                {/* first slide */}
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={one} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide5" className="btn btn-circle">❮</a>
                        <div className="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                            <h1 className="text-5xl text-white font-extrabold">Built <span className="text-red-500"><Typewriter words={['Diffrently', 'Strong']} delaySpeed={800} loop={false}></Typewriter></span></h1>
                        </div>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                {/* first slide */}

                {/* second slide */}
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={two} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <div className="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                            <h1 className="text-5xl text-white font-extrabold">Work <span className="text-blue-500"><Typewriter words={['Hard', 'Tough']} delaySpeed={800} loop={false}></Typewriter></span></h1>
                        </div>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                {/* second slide */}

                {/* third slide */}
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={three} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <div className="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                            <h1 className="text-5xl text-white font-extrabold">Become <span className="text-yellow-400"><Typewriter words={['Manly', 'Bold']} delaySpeed={800} loop={false}></Typewriter></span></h1>
                        </div>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                {/* third slide */}

                {/* four slide */}
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={four} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <div className="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                            <h1 className="text-5xl text-white font-extrabold">Go <span className="text-rose-500"><Typewriter words={['Steady', 'Forward']} delaySpeed={800} loop={false}></Typewriter></span></h1>
                        </div>
                        <a href="#slide5" className="btn btn-circle">❯</a>
                    </div>
                </div>
                {/* four slide */}

                {/* five slide */}
                <div id="slide5" className="carousel-item relative w-full">
                    <img src={five} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <div className="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                            <h1 className="text-5xl text-white font-extrabold">Do it <span className="text-purple-500"><Typewriter words={['Hardway', 'Tough']} delaySpeed={800} loop={false}></Typewriter></span></h1>
                        </div>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
                {/* five slide */}

            </div>
        </div>
    );
};

export default Banner;

