import Image from "next/image";

function Count() {
   
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-15 gap-y-4 my-20 w-[98%] mx-auto">
            <div className="flex flex-col justify-center">
            <Image width={100} height={100}  unoptimized className="w-full object-contain rounded-3xl" src={'/forCount/car.jpg'} alt="this is an image"/>
            </div> 

            <div className="flex flex-col gap-y-4">

              <div className="flex flex-col gap-y-5">
              <h2 className="text-[#f411cf] font-semibold text-lg md:text-2xl tracking-[6px]">TRAVEL POINT</h2>
              <p className="text-2xl md:text-5xl font-medium">We help you find your dream destination</p>
              <p className="text-base md:text-xl font-medium opacity-50">Hey! , Veer-Pawas there to help you find your dream holiday. <br /> Easy you just find where you want to go.</p>
              </div>

              <div className=" grid grid-cols-2 w-[95%] mx-auto md:mx-0 md:w-[60%] gap-y-10 gap-x-4">
                <div className="border-2  border-slate-200 rounded-3xl py-6 flex flex-col items-center gap-y-2"> <span className="text-3xl font-bold text-purple-700">200+</span>  <span className="text-xl font-normal opacity-50">visitor count</span> </div>

                <div className="border-2  border-slate-200 rounded-3xl py-6 flex flex-col items-center gap-y-2"> <span className="text-3xl font-bold text-purple-700">100+</span>  <span className="text-xl font-normal opacity-50">Tours completed</span> </div>

                <div className="border-2  border-slate-200 rounded-3xl py-6 flex flex-col items-center gap-y-2"> <span className="text-3xl font-bold text-purple-700">10yer+</span>  <span className="text-xl font-normal opacity-50">Tour Experts</span> </div>

                <div className="border-2  border-slate-200 rounded-3xl py-6 flex flex-col items-center gap-y-2"> <span className="text-3xl font-bold text-purple-700">50+</span>  <span className="text-xl font-normal opacity-50">Tour destinations</span> </div>

              </div>

            </div> 
        </div>
    );
}

export default Count;