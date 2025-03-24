import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import Image from "next/image";

function Landing() {
   return (
      <>
         <div className={`min-h-[100vh] pt-20 bg-[ghostwhite]`}>

            <div className="mt-10 sm:mt-20 flex flex-col justify-center gap-y-7 relative z-[0]">

               <div className="px-14 py-4 grid grid-cols-2 gap-x-6">
               <div className="flex flex-col gap-y-4">
                  <p className="font-medium text-xl drop-shadow-lg sm:text-6xl">Your Next Adventure Starts Here</p>
                  <p className="text-lg font-medium sm:text-4xl drop-shadow-lg text-[#f411cf]">Bright your future with <span className="italic">Dribbble</span> </p>
                  <p className="opacity-70">Stay updated wtih travel tips, recommendations, and latest promos</p>
                  <div className="mt-6">
                     <button className="drop-shadow-lg text-black transition delay-150 duration-100 ease-in-out border border-[#872bff] cursor-pointer hover:bg-[#872bffd3] hover:text-white hover:border-transparent px-8 py-2 font-medium text-base rounded-full tracking-wide ml-4"><Link href="#services">SERVICES</Link></button>
                     <button className="drop-shadow-lg cursor-pointer text-white bg-[#872bff] px-8 py-2 font-medium text-base rounded-full tracking-wide ml-4"><Link href={'/about'}>ABOUT US</Link></button>
                  </div>
               </div>

               <div className="flex justify-center gap-x-4">
                  <div className="flex flex-col gap-y-3 mt-5">
                  <Image width={100} height={100} quality={100} className="size-40 object-cover rounded-md" src={'https://www.tourmyindia.com/blog//wp-content/uploads/2020/11/Hawa-Mahal-Rajasthan-Feature.jpg'} alt="this is an image"/>
                  <Image width={100} height={100} quality={100} className="size-40 object-cover rounded-md" src={'https://tripways.com/wp-content/uploads/2020/11/golden-temple-3-3.jpg'} alt="this is an image"/>
                  </div>

                  <div className="flex flex-col gap-y-3">
                  <Image width={100} height={100} className="w-40 object-cover rounded-md" src={'https://housing.com/news/wp-content/uploads/2022/11/Famous-tourist-places-in-India-state-compressed.jpg'} alt="this is an image"/>
                  <Image width={100} height={100} className="size-40 object-cover rounded-md" src={'https://boutindia.s3.us-east-2.amazonaws.com/images/blog/images/2023-07-21-13-58-37-64ba41b586366-Agra-The-Glimpse-of-Mughal-Kingdom.jpg'} alt="this is an image"/>
                  </div>

               </div>

               </div>

               <div className="py-10">
                  <div className="w-[50%] mx-auto relative text-black">
                     <CiSearch className="text-3xl z-[1] font-medium absolute left-3 top-1/2 -transform -translate-y-1/2 cursor-pointer" />
                     <input className="w-full rounded-full ps-14 py-4 bg-white drop-shadow-lg outline-0" type="text" placeholder="search your Destination" />
                  </div>
               </div>

            </div>
         </div>
      </>
   );
}


export default Landing;