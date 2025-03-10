"use client";
import { IoHappyOutline } from "react-icons/io5";
import { GiLaurelsTrophy } from "react-icons/gi";
import { PiMedalDuotone } from "react-icons/pi";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdRocketLaunch } from "react-icons/md";
import { useState } from "react";

function Count() {
    const info=["guests fall in love with",
        "present you the perfect vacation",
        "enable evryone to travel the word",
        "win hearts and make you Celebrates Life!",
    ];
    const [title,setTile]=useState(info[0]);
    let length=info.length;
    let idx=0;
    // setInterval(()=>{
    //   idx= (idx+1)%length;
    //   setTile(info[idx]);
    // },1000);
    return (
        <div className="bg-[#16283a] text-white px-20 py-12">
            <div className="pl-4 py-6 border-l-8 border-yellow-500">
                <p className="text-base font-medium">We&apos;re curating experiences that</p>
                <p className="text-2xl font-medium text-yellow-500">{info[1]}</p>
            </div>
            <div className="grid max-[360px]:grid-cols-1 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-6 py-14">

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