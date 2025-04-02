import { IoHappyOutline } from "react-icons/io5";
import { GiLaurelsTrophy } from "react-icons/gi";
import { PiMedalDuotone } from "react-icons/pi";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdRocketLaunch } from "react-icons/md";

function Count() {
   
    return (
        <div className="bg-[#F4F4F4] text-black px-1.5 md:px-20 py-12 my-10 w-[93%] rounded-xl mx-auto">

            <div className="text-center flex flex-col gap-y-4">
                <p className="text-base md:text-xl text-[#f411cf] font-medium tracking-[5px]">WE&apos;RE CURATING EXPERIENCS THAT</p>
                <p className="text-xl md:text-4xl font-semibold">Prepare your self and let&apos;s explore the <br /> beautiful of the world </p>
            </div>

            <div className="text-[#872bff] grid max-[360px]:grid-cols-1 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-6 py-14">

                <div className="pl-2">
                    <IoHappyOutline className="text-4xl mb-2" />
                    <p className="text-2xl font-bold pb-1.5">8,16,450</p>
                    <p className="font-medium">Happy Guest</p>
                </div>

                <div className="pl-2">
                    <GiLaurelsTrophy className="text-4xl mb-2" />
                    <p className="text-2xl font-bold pb-1.5">62,509</p>
                    <p className="font-medium">Tours completed</p>
                </div>

                <div className="pl-2">
                    <PiMedalDuotone className="text-4xl mb-2" />
                    <p className="text-2xl font-bold pb-1.5">325+</p>
                    <p className="font-medium">Tour Experts</p>
                </div>

                <div className="pl-2">
                    <FaMapLocationDot className="text-4xl mb-2" />
                    <p className="text-2xl font-bold pb-1.5">2500+</p>
                    <p className="font-medium">Tour destinations</p>
                </div>

                <div className="pl-2">
                    <MdRocketLaunch className="text-4xl mb-2" />
                    <p className="text-2xl font-bold pb-1.5">Our Lakshya</p>
                    <p className="font-medium">Bharat Ki Sabse Behtareen Travel Company</p>
                </div>

            </div>
        </div>
    );
}

export default Count;