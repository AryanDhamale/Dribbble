"use client";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import loading from "@/components/lottieJSON/loading.json";


const Loading = () => {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <Lottie className="size-[10rem]" animationData={loading}/>
    </div>
  );
};

export default Loading;