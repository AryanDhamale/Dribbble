"use client"
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import about from "@/components/lottieJSON/about.json";
import vision from "@/components/lottieJSON/vision.json";
import choose from "@/components/lottieJSON/choose.json";
import travelling from "@/components/lottieJSON/travelling.json";
//import Lottie from "lottie-react";


function About()
{
    return (
        <div className="mt-20 pt-5 flex flex-col gap-y-10 min-h-[100vh]">
            <div className="flex flex-col gap-y-4 justify-center items-center">
                <Lottie className="w-1/2" animationData={about}/>
                <h2 className="text-3xl md:text-5xl font-bold">What We Are</h2>
                <p className="text-base md:text-lg w-[90%] md:w-1/2 opacity-50">We are a passionate team of travelers who aim to make travel accessible, enjoyable, and memorable. Our platform connects you to the best destinations, helping you book hassle-free experiences worldwide.</p>
            </div>

            <div className="w-full md:w-[90%] mx-auto grid grid-col-1 md:grid-cols-2 gap-x-4">
                <Lottie className="h-[60vh]" animationData={vision}/>
                <div className="flex flex-col justify-center">
                <div className="ps-3 md:ps-0 text-lg flex flex-col gap-y-6">
                    <div>
                    <p className="font-medium">🌎 Transform Travel into Experiences</p>
                    <p className="opacity-50 text-sm md:text-base">Beyond sightseeing, we curate moments that inspire, whether it’s a serene sunset on a hidden beach or a bustling local market full of flavors.</p>
                    </div>
                    <div>
                        <p className="font-medium">🤝 Build Trust Through Authenticity</p>
                        <p className="opacity-50 text-sm md:text-base">By partnering with local experts and offering genuine recommendations, we ensure every trip is immersive, ethical, and unforgettable.</p>
                    </div>
                    <div>
                        <p className="font-medium">💙 Make Exploration Accessible to All</p>
                        <p className="opacity-50 text-sm md:text-base">We believe everyone deserves to explore the world, so we’re committed to offering diverse, budget-friendly, and sustainable travel options.</p>
                    </div>
                </div>
                </div>
            </div>

            <div className="w-full md:w-[90%] mx-auto grid grid-col-1 md:grid-cols-2 gap-x-4">
                <div className="flex flex-col justify-center">
                <div className="ps-3 md:ps-0 text-lg flex flex-col gap-y-6">
                    <div>
                    <p className="font-medium">📌 Trusted Travel Guides & Recommendations</p>
                    <p className="opacity-50 text-sm md:text-base">Your journey is only as good as the guidance you receive. Our travel guides are seasoned explorers who provide insider tips, authentic local experiences, and honest recommendations—so you avoid tourist traps and enjoy the real essence of each destination.</p>
                    </div>
                    <div>
                        <p className="font-medium">🔒 Easy & Secure Booking System</p>
                        <p className="opacity-50 text-sm md:text-base">No hassle, no stress. Our user-friendly platform lets you book flights, hotels, and tours in just a few clicks. With secure payment options and transparent pricing, you can plan your dream vacation with confidence.</p>
                    </div>
                    <div>
                        <p className="font-medium">🛎️ 24/7 Customer Support</p>
                        <p className="opacity-50 text-sm md:text-base">Travel questions don’t keep office hours—and neither do we. Whether you need last-minute changes, emergency assistance, or just some friendly advice, our dedicated support team is available around the clock to ensure your trip goes smoothly.</p>
                    </div>
                </div>
                </div>
                <Lottie className="h-[70vh]" animationData={choose}/>
            </div>

            <div className="">
            <Lottie className="mx-auto w-[50%] md:w-[30%]" animationData={travelling}/>
            <h2 className="text-3xl font-medium text-center py-10">Happy Traveling</h2>
            </div>


        </div>
    );
}

export default About;