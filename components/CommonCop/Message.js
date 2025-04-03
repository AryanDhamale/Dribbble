"use client";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import notfound from "@/components/lottieJSON/notfound.json";


function Message({msg})
{
    return (
        <div className="mt-20 w-full h-screen flex justify-center items-center">
            <Lottie className="w-full h-[90vh]" animationData={notfound}/>
        </div>
    );
}

export default Message;