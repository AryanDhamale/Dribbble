"use client"
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import about from "@/components/lottieJSON/about.json";
import vision from "@/components/lottieJSON/vision.json";
import choose from "@/components/lottieJSON/choose.json";
//import Lottie from "lottie-react";


function About()
{
    return (
        <div className="mt-20 pt-5 flex flex-col py-8 gap-y-10 min-h-[100vh]">
            <div className="flex flex-col gap-y-4 justify-center items-center">
                <Lottie className="w-full md:w-1/2" animationData={about}/>
                <h2 className="text-3xl md:text-5xl font-bold">What We Are</h2>
                <p className="text-base md:text-lg w-[90%] md:w-1/2 opacity-50">We are a passionate team of travelers who aim to make travel accessible, enjoyable, and memorable. Our platform connects you to the best destinations, helping you book hassle-free experiences worldwide.</p>
            </div>

            <div className="w-full md:w-[90%] mx-auto grid grid-col-1 md:grid-cols-2 gap-x-4">
                <Lottie className="h-[60vh]" animationData={vision}/>
                <div className="flex flex-col justify-center items-center">
                <div className="w-[90%] md:w-full text-lg flex flex-col gap-y-6">
                    <p className="opacity-50">
                    we envision a world where travel transcends boundaries and transforms perspectives. Our vision is to become the most trusted gateway to authentic global experiences, where every journey we craft sparks joy, fosters connections, and leaves lasting impressions. We aspire to revolutionize travel by combining cutting-edge technology with human-centric service, making extraordinary adventures accessible to all while preserving the beauty and culture
                    </p>
                </div>
                </div>
            </div>

            <div className="w-full md:w-[90%] mx-auto grid grid-col-1 md:grid-cols-2 gap-x-4">
                <div className="order-2 md:order-1 flex flex-col items-center justify-center">
                <div className="w-[90%] md:w-full text-lg flex flex-col justify-center">
                    <p className="opacity-50">we believe travel has the power to transform lives. Our vision is to redefine the way the world explores by curating unforgettable journeys that go beyond the ordinary. We strive to be more than just a booking platform—we are your trusted companion in discovery, offering handpicked destinations, expert-led experiences, and seamless planning designed to ignite your sense of adventure.</p>
                </div>
                </div>
                <Lottie className="order-1 md:order-2 h-[70vh]" animationData={choose}/>
            </div>

            


        </div>
    );
}

export default About;