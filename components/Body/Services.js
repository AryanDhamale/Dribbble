import { FaBuilding } from "react-icons/fa6";
import { MdDinnerDining } from "react-icons/md";
import { FaCaravan } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";
import { IoAirplane } from "react-icons/io5";
import { BsExclude } from "react-icons/bs";

function Services() {
    return (
        <div className="px-4 md:px-20 flex flex-col gap-y-14 py-10" id="services">
            <div>
                <h2 className="text-xl md:text-3xl font-normal text-[#f411cf] tracking-widest">Services</h2>
            </div>
    
            <div className="flex justify-center items-center flex-wrap gap-x-10 gap-y-8">
                
              <div className="rounded-md drop-shadow-md bg-white w-60 flex flex-col justify-center items-center gap-y-4 px-4 h-[18rem] cursor-pointer transition-all ease-in-out duration-200 hover:drop-shadow-[0_3px_10px_#f411cf]">
                  <div className="rounded-full size-14 flex items-center justify-center bg-slate-100">
                  <FaBuilding className="text-2xl text-[#872bff]"/>
                  </div>
                 <div className="text-center flex flex-col gap-y-4">
                    <h2 className="font-medium text-lg">Accomodation</h2>
                    <span className="opacity-40">Comfortable & convenient hotels cherry picked by our hotel management team</span>
                 </div>
              </div>


              <div className="rounded-md drop-shadow-md bg-white w-60 flex flex-col justify-center items-center gap-y-4 px-4 h-[18rem] transition-all ease-in-out duration-200 hover:drop-shadow-[0_3px_10px_#f411cf]">
                  <div className="rounded-full size-14 flex items-center justify-center bg-slate-100">
                  <MdDinnerDining className="text-2xl text-[#872bff]"/>
                  </div>
                 <div className="text-center flex flex-col gap-y-4">
                    <h2 className="font-medium text-lg">All meals</h2>
                    <span className="opacity-40">Eat to your heart&apos;s content Breakfast. Lunch. Dinner.</span>
                 </div>
              </div>


              <div className="rounded-md drop-shadow-md bg-white w-60 flex flex-col justify-center items-center gap-y-4 px-4 h-[18rem] transition-all ease-in-out duration-200 hover:drop-shadow-[0_3px_10px_#f411cf]">
                  <div className="rounded-full size-14 flex items-center justify-center bg-slate-100">
                  <FaCaravan className="text-2xl text-[#872bff]"/>
                  </div>
                 <div className="text-center flex flex-col gap-y-4">
                    <h2 className="font-medium text-lg">On-tour transport</h2>
                    <span className="opacity-40">Our itineraries include all rail, sea and road transport as part of the itinerary so you can enjoy tension free</span>
                 </div>
              </div>


              <div className="rounded-md drop-shadow-md bg-white w-60 flex flex-col justify-center items-center gap-y-4 px-4 h-[18rem] transition-all ease-in-out duration-200 hover:drop-shadow-[0_3px_10px_#f411cf]">
                  <div className="rounded-full size-14 flex items-center justify-center bg-slate-100">
                  <FaFlag className="text-2xl text-[#872bff]"/>
                  </div>
                 <div className="text-center flex flex-col gap-y-4">
                    <h2 className="font-medium text-lg">Tour managers</h2>
                    <span className="opacity-40">We have an exclusive team of 350 tour managers specialising in India and World tours</span>
                 </div>
              </div>


              <div className="rounded-md drop-shadow-md bg-white w-60 flex flex-col justify-center items-center gap-y-4 px-4 h-[18rem] transition-all ease-in-out duration-200 hover:drop-shadow-[0_3px_10px_#f411cf]">
                  <div className="rounded-full size-14 flex items-center justify-center bg-slate-100">
                  <BsExclude className="text-2xl text-[#872bff]"/>
                  </div>
                 <div className="text-center flex flex-col gap-y-4">
                    <h2 className="font-medium text-lg">Best value itinerary</h2>
                    <span className="opacity-40">Our dedicated product & destination research team spends hours curating the best value for money itineraries</span>
                 </div>
              </div>


              <div className="rounded-md drop-shadow-md bg-white w-60 flex flex-col justify-center items-center gap-y-4 px-4 h-[18rem] transition-all ease-in-out duration-200 hover:drop-shadow-[0_3px_10px_#f411cf]">
                  <div className="rounded-full size-14 flex items-center justify-center bg-slate-100">
                  <IoAirplane className="text-2xl text-[#872bff]"/>
                  </div>
                 <div className="text-center flex flex-col gap-y-4">
                    <h2 className="font-medium text-lg">To and fro airfare</h2>
                    <span className="opacity-40">Veena World tours are inclusive of airfare from many hubs within India unless you pick the joining-leaving option</span>
                 </div>
              </div>
          




            </div>
        </div>
    );
}

export default Services;