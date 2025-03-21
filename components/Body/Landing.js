"use client";
import { CiSearch } from "react-icons/ci";
import insertManydoc from "@/init/add";
import Link from "next/link";

function Landing() {
   return (
      <>
         <div className="h-[100vh] bg-[url(/forLanding/spencerWatson.jpg)] bg-center bg-cover pt-28 relative">
            {/* <div className="bg-[#12625575] hue-rotate-45 absolute w-full h-full top-0"></div> */}
            <div className="mt-10 sm:mt-20 text-white flex flex-col justify-center gap-y-7 relative z-[0]">
               <div className="text-center ">
                  <p className="font-medium text-xl sm:text-6xl py-3 text-black">Your Next Adventure Starts Here</p>
                  <p className="text-lg sm:text-xl w-[40%] mx-auto text-black">Bright your future with <span className="italic">Dribbble</span> </p>
                  <div className="mt-6">
                     <button className="text-black transition delay-150 duration-100 ease-in-out border border-black cursor-pointer hover:bg-black hover:text-white hover:border-transparent px-8 py-2 font-light text-base tracking-wide ml-4"><Link href="#services">SERVICES</Link></button>
                     <button className="cursor-pointer text-black border border-white bg-white px-8 py-2 font-light text-base tracking-wide ml-4">ABOUT US</button>
                  </div>
               </div>
               <div className="py-10">
                  <div className="w-[50%] mx-auto relative text-black">
                      <CiSearch className="text-3xl absolute left-3 top-1/2 -transform -translate-y-1/2 cursor-pointer"/>
                     <input className="w-full rounded-md ps-14 py-4 border border-black outline-0" type="text" placeholder="search your Listing"/>
                  </div>
               </div>

            </div>
         </div>
      </>
   );
}


export default Landing;