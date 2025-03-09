"use client";
import { IoIosSearch } from "react-icons/io";
import Combobox from "../shadcn/Combobox";
import DatePicker from "../shadcn/DatePicker";

function Landing() {
   return (
      <>
      <div className="h-[100vh] bg-[url(/mountain.jpg)] bg-center bg-repeat bg-cover pt-28 relative">
         <div className="bg-[#12625575] hue-rotate-45 absolute w-full h-full top-0"></div>
         <div className="mt-10 sm:mt-20 text-white flex flex-col justify-center gap-y-7 relative z-[1]">
         <div className="text-center ">
            <p className="font-medium text-xl sm:text-6xl py-3 ">Journey beyond your Imagination</p>
            <p className="text-lg sm:text-xl w-[40%] mx-auto">Bright your future with <span className="italic">Dribbble</span> </p>
            <div className="mt-6">
            <button className="transition delay-150 duration-100 ease-in-out border border-slate-300 cursor-pointer hover:bg-teal-950 hover:text-white hover:border-transparent px-8 py-2 font-light text-base tracking-wide ml-4">SERVICES</button>
            <button className="cursor-pointer text-[#0c709c] border border-white bg-white px-8 py-2 font-light text-base tracking-wide ml-4">ABOUT US</button>
            </div>
         </div>
         <div className="">
            <div className="mx-auto w-[80%] bg-white text-black grid grid-cols-1 lg:grid-cols-4 gap-x-4 rounded-md py-4 px-3.5 lg:divide-x-2 lg:divide-solid lg:divide-slate-200">
               <div className="">
                  <p className="text-start font-medium">Location</p>
                  <Combobox/>
               </div>
               <div>
                  <p className="text-start font-medium">Check in</p>
                  <DatePicker/>
               </div>
               <div>
                  <p className="text-start font-medium">Check out</p>
                  <DatePicker/>
               </div>
               <div className="flex justify-center items-center">
                  <button className="transition delay-150 duration-200 ease-in-out border border-slate-300 cursor-pointer hover:bg-teal-950 hover:text-white hover:border-transparent px-10 py-2 font-light text-lg tracking-wide">Search</button>
               </div>
            </div>
         </div>
         </div>
      </div>
      </>
   );
}


export default Landing;