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
    <nav className="bg-[ghostwhite] backdrop-blur-sm flex justify-between px-4 sm:px-8 top-0 absolute items-center h-[5rem] space-x-6  w-full z-[1] text-black"> 
       <div className="flex justify-center items-center gap-x-4">
       <p className="text-2xl font-semibold pr-2  italic cursor-pointer flex justify-center items-center gap-x-2">Dribbble</p>
        <ul className="flex space-x-7 font-light text-lg max-[1180px]:hidden">
          <Link href={'/'}><li className="cursor-pointer hover:underline hover:underline-offset-4">Home</li></Link>
          <Link href={'/show-all'}><li className="cursor-pointer hover:underline hover:underline-offset-4">Tour</li></Link>
          <Link href={'/gallery'}><li className="cursor-pointer hover:underline hover:underline-offset-4">Gallary</li></Link>
          <Link href={'/contact-us'}><li className="cursor-pointer hover:underline hover:underline-offset-4">Contact</li></Link>
        </ul>
        <button className="hidden rounded-full transition delay-150 duration-100 ease-in-out cursor-pointer text-white bg-[#872bff] px-4 sm:px-8 py-2 font-light text-lg tracking-wide ml-4">Book Now</button>
       </div>

      <div className= "flex justify-center items-center">
      {session && <div className="relative">
      <Image onClick={()=>setdropvisible(!dropvisible)} width={100} height={100} className="size-12 rounded-full cursor-pointer" src={session.user.image || '/default_img.png'} alt="this is an image"></Image>
      {dropvisible  && <Dropoptions control={setdropvisible}/>}
      </div>}
      {!session && <div className="flex justify-center items-center">
      <Link href={'/session/new'}>
      <button className="rounded-full hidden sm:block cursor-pointertransition delay-150 duration-100 ease-in-out border border-[#872bff] cursor-pointer hover:bg-[#872bffd9] hover:text-white hover:border-transparent px-4 sm:px-8 py-2 font-light text-lg tracking-wide ml-4">Sign up</button>
      </Link>
      <Link href={'/session'}>
      <button className="rounded-full hidden sm:block cursor-pointer bg-[#872bff] text-white px-8 py-2 font-light text-lg tracking-wide ml-4">Log in</button>
      </Link>
      </div>}
      </div>
    </nav>
  );
}

export default Navbar;