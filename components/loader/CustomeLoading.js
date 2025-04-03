"use client";
import Lottie from "lottie-react";
import loading from "@/components/lottieJSON/loading.json";
import { useEffect } from "react";


const Loading = () => {
  useEffect(() => {
    // Ensure this code runs only on the client side
    if (typeof document !== "undefined") {
      console.log("Document is accessible:", document.title);
      // Add any document-related logic here
    }
  }, []);
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      {/* <Lottie className="size-[10rem]" animationData={loading}/> */}
      ....Loading
    </div>
  );
};

export default Loading;