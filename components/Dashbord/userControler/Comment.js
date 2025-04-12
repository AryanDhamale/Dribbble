"use client";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import norecord from "@/components/lottieJSON/norecord.json";

function Comment()
{
    return (
        <div className="w-full h-full px-3 py-3">
            <Lottie className="w-full h-screen" animationData={norecord}/>
        </div>
    );
}

export default Comment;