"use client";
import Lottie from "lottie-react";
import success from "@/components/lottieJSON/success.json"
import sign from "@/components/lottieJSON/sign.json"
import { Button } from "@/components/ui/button"

function Success({control,oid})
{
    return (
        <div className="bg-[#332b2b94] w-full h-screen fixed top-0 left-0 bottom-0 right-0 z-[1]">
            <Lottie className="relative w-full h-full" animationData={success}/>

            <div className="bg-white w-[22rem] py-10 absolute top-1/2 left-1/2 -transform -translate-1/2 rounded-xl ">
               <div className="w-full border border-white"> <Lottie className="w-full h-40" animationData={sign}/> </div>
               <div className="flex flex-col px-2 gap-y-6 justify-center items-center">
                <h2 className="text-2xl font-medium text-[#a3de83]">order_id</h2>
                <p className="font-medium">{oid}</p>
                <p className="font-medium text-xs">Congradulation , Your Payment has succesfully done!</p>
                <Button onClick={()=>control(false)}>Done</Button>
               </div>
            </div>

        </div>
    );
}

export default Success;