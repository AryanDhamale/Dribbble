"use client";
import Lottie from "lottie-react";
import loading from "@/components/lottieJSON/loading.json"

const Loading = () => {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
        <Lottie className="size-[10rem]" animationData={loading}/>
        {/* ....Loading */}
    </div>
  );
};

export default Loading;