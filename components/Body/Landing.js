"use client";
import Link from "next/link";
import Image from "next/image";
import Searchbox from "../search/Searchbox";
import landing from '@/components/lottieJSON/landing.json'
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

function Landing() { 
   
   return (
      <>
         <div className={`min-h-[100vh] bg-[#f5fbff] relative mt-20`}>

            <Lottie className="hidden md:block w-full h-screen absolute" animationData={landing}/>

            <div className="pt-10 md:pt-14 flex flex-col justify-center gap-y-7">

               <div className="px-1.5 sm:px-14 py-4 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8 md:gap-y-0">
               <div className="flex flex-col gap-y-4">
                  <p className="font-medium text-xl text-[#00ddb3] drop-shadow-lg sm:text-6xl">Your Next Adventure Starts Here</p>
                  <p className="text-lg font-medium sm:text-4xl drop-shadow-lg text-[#f411cf]">Bright your future with <span className="italic">Veer-Pawas</span> </p>
                  <p className="opacity-70">Stay updated wtih travel tips, recommendations, and latest promos</p>
                  <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-4">
                     <Link href="#services">
                     <button className="drop-shadow-lg text-black transition delay-150 duration-100 ease-in-out border border-[#872bff] cursor-pointer hover:bg-[#872bffd3] hover:text-white hover:border-transparent px-8 py-2 font-medium rounded-full tracking-wide text-sm sm:text-base">SERVICES</button></Link>
                     <Link href={'/about'}>
                     <button className="drop-shadow-lg cursor-pointer text-white bg-[#872bff] px-8 py-2 font-medium rounded-full tracking-wide text-sm sm:text-base">ABOUT US</button></Link>
                  </div>
               </div>

               <div className="flex justify-center gap-x-4 z-[2]">
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

               <Searchbox/>
            </div>
         </div>
      </>
   );
}


export default Landing;