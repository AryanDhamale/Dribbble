"use client";
import Lottie from "lottie-react";
import notfound from "@/components/lottieJSON/notfound";

function Message({msg})
{
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <Lottie className="w-full h-[90vh]" animationData={notfound}/>
        </div>
    );
}

export default Message;