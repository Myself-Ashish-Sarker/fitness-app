import Marquee from "react-fast-marquee";
import m1 from "../../assets/marquee/m1.png";
import m2 from "../../assets/marquee/m2.png";
import m3 from "../../assets/marquee/m3.png";
import m4 from "../../assets/marquee/m4.png";
import m5 from "../../assets/marquee/m5.png";
import m6 from "../../assets/marquee/m6.png";
import m7 from "../../assets/marquee/m7.png";
import m8 from "../../assets/marquee/m8.png";
import m9 from "../../assets/marquee/m9.png";
import m10 from "../../assets/marquee/m10.png";

const MarqueeStand = () => {
    return (

        <Marquee>
            <img className="pr-24 w-[15rem]" src={m1} alt="" />
            <img className="pr-24 w-[15rem]" src={m2} alt="" />
            <img className="pr-24 w-[10rem]" src={m3} alt="" />
            <img className="pr-24 w-[10rem]" src={m4} alt="" />
            <img className="pr-24 w-[9rem]" src={m5} alt="" />
            <img className="pr-24 w-[9rem]" src={m6} alt="" />
            <img className="pr-24 w-[9rem]" src={m7} alt="" />
            <img className="pr-24 w-[9rem]" src={m8} alt="" />
            <img className="pr-24 w-[9rem]" src={m9} alt="" />
            <img className="pr-24 w-[9rem]" src={m10} alt="" />
        </Marquee>

    );
};

export default MarqueeStand