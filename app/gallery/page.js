"use client";
import { RxCrossCircled } from "react-icons/rx";
import { useState} from "react";
import Image from "next/image";

function Gallary() {
    const arr = new Array(4).fill(0);
    const [visible,setVisible]=useState(false);
    const [current,setcurrent]=useState("");

    const handleOnclick=(e)=>{
        setcurrent(()=>`/forGallery/IMG_${e.target.id}.jpg`);
        setVisible(()=>true);
    }
    return (
        <div className="mt-20 min-h-[100vh] flex flex-col gap-y-3">
            <div className="h-35 bg-[ghostwhite] flex items-center">
                <h2 className="text-3xl font-medium px-10 drop-shadow-lg">Image Gallery</h2>
            </div>
            <div>
                <div className="w-full md:w-[95%] mx-auto gap-x-6 gap-y-8 flex-1 px-4 py-4 flex justify-start items-center flex-wrap">
                    {
                        arr.map((ele, idx) =>
                            <Image onClick={handleOnclick} width={100} height={100} key={idx} className="size-[20rem] rounded-md hover:scale-[1.05] cursor-pointer hover:drop-shadow-lg object-cover transition-all ease-linear" id={`${idx+1}`} src={`/forGallery/IMG_${idx+1}.jpg`} alt="this is an image" />
                        )
                    }
                </div>
            </div>

            {visible && <div className="w-full h-full fixed top-0 bottom-0 left-0 right-0 bg-[#000000eb] z-[11]">
                <div className="w-full h-full flex justify-center items-center relative">
                    <RxCrossCircled onClick={()=>setVisible(false)} className="cursor-pointer text-white z-[4] text-xl md:text-4xl absolute top-[8%] right-[1.2rem] md:right-[3rem]"/>
                    <Image width={100} height={100} unoptimized className="w-[95%] md:w-1/2 rounded-sm" src={current} alt="this is an image" />
                </div>
            </div>}
        </div>
    );
}

export default Gallary;