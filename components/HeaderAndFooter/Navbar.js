"use client"
import { SiThunderbird } from "react-icons/si";
import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";
import Dropoptions from "./Dropoptions";
import { useState } from "react";

function Navbar() {
  const {data:session}=useSession();
  const [dropvisible,setdropvisible]=useState(false);
  return (
    <nav className="bg-[#f6fff826] drop-shadow-lg backdrop-blur-sm flex justify-between px-4 sm:px-8 top-0 absolute items-center h-[5rem] space-x-6  w-full z-[1] text-black">
       <div className="flex justify-center items-center gap-x-4">
       <p className="text-2xl font-semibold pr-2  italic cursor-pointer flex justify-center items-center gap-x-2"><SiThunderbird/>Dribbble</p>
        <ul className="flex space-x-7 font-light text-lg max-[1180px]:hidden">
          <li className="cursor-pointer hover:underline hover:underline-offset-4"><Link href={'/'}>Home</Link></li>
          <li className="cursor-pointer hover:underline hover:underline-offset-4"><Link href={'/'}>Tour</Link></li>
          <li className="cursor-pointer hover:underline hover:underline-offset-4">Gallary</li>
          <li className="cursor-pointer hover:underline hover:underline-offset-4">Contact</li>
        </ul>
        <button className="transition delay-150 duration-100 ease-in-out border border-slate-300 cursor-pointer hover:bg-[#24b985] hover:text-white hover:border-transparent px-4 sm:px-8 py-2 font-light text-lg tracking-wide ml-4">Book Now</button>
       </div>

      <div className= "flex justify-center items-center">
      {session && <div className="relative">
      <Image onClick={()=>setdropvisible(!dropvisible)} width={100} height={100} className="size-12 rounded-full cursor-pointer" src={session.user.image || '/default_img.png'} alt="this is an image"></Image>
      {dropvisible  && <Dropoptions control={setdropvisible}/>}
      </div>}
      {!session && <div className="flex justify-center items-center">
      <button className="hidden sm:block cursor-pointertransition delay-150 duration-100 ease-in-out border border-slate-300 cursor-pointer hover:bg-[#24b985] hover:text-white hover:border-transparent px-4 sm:px-8 py-2 font-light text-lg tracking-wide ml-4"><Link href={'/session/new'}>Sign up</Link></button>
      <button className="hidden sm:block cursor-pointer bg-[#24b985] active:bg-[#24b985b0] text-white px-8 py-2 font-light text-lg tracking-wide ml-4"><Link href={'/session'}>Log in</Link></button>
      </div>}
      </div>
    </nav>
  );
}

export default Navbar;