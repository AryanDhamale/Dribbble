"use client";
import Lottie from "lottie-react";
import norecord from "@/components/lottieJSON/norecord.json";
import { useEffect } from "react";

function Comment()
{
    useEffect(() => {
        if (typeof document !== "undefined") {
          console.log("Document is accessible:", document.title);
        }
    }, []);
    return (
        <div className="w-full h-full px-3 py-3">
            <Lottie className="w-full h-full" animationData={norecord}/>
        </div>
    );
}

export default Comment;