"use client";
import Lottie from "lottie-react";
import norecord from "@/components/lottieJSON/norecord"

function Comment()
{
    return (
        <div className="w-full h-full px-3 py-3">
            <Lottie className="w-full h-full" animationData={norecord}/>
        </div>
    );
}

export default Comment;