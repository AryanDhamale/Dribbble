"use client"
import { SiThunderbird } from "react-icons/si";

function Navbar() {
  return (
    <nav className="flex justify-between px-4 sm:px-8 items-center h-[6rem] absolute space-x-6  w-full z-[1] text-white">
       <div className="flex justify-center items-center gap-x-4">
       <p className="text-2xl font-semibold pr-2  italic cursor-pointer flex justify-center items-center gap-x-2"><SiThunderbird/>Dribbble</p>
        <ul className="flex space-x-7 font-light text-lg max-[1180px]:hidden">
          <li className="cursor-pointer hover:underline hover:underline-offset-4">Home</li>
          <li className="cursor-pointer hover:underline hover:underline-offset-4">Tour</li>
          <li className="cursor-pointer hover:underline hover:underline-offset-4">Gallary</li>
          <li className="cursor-pointer hover:underline hover:underline-offset-4">Contact</li>
        </ul>
        <button className="transition delay-150 duration-100 ease-in-out border border-slate-300 cursor-pointer hover:bg-teal-950 hover:text-white hover:border-transparent px-4 sm:px-8 py-2 font-light text-lg tracking-wide ml-4">Book Now</button>
       </div>

      <div>
      <button onClick={()=>window.print()} className="hidden sm:block cursor-pointer bg-[#1a6c7a] active:bg-[#1a6c7acf] text-white px-8 py-2 font-light text-lg tracking-wide ml-4">Sign up</button>
      </div>
    </nav>
  );
}

export default Navbar;