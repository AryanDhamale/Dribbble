"use client";
// import { PiVeer-PawasLogoFill } from "react-icons/pi";
import { PiSignOutFill } from "react-icons/pi";
import Image from "next/image";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import { findUser } from "@/serverAction/user";
import { memo } from "react";

// luci-reacticons // 
import { SquareUserRound } from 'lucide-react';
import { Book } from 'lucide-react';
import { CakeSlice } from 'lucide-react';
import { MessageCircle } from 'lucide-react';


function Sidenav({ session }) {
  const [userdata, setuserdata] = useState({});

  useEffect(() => {
    async function fetchData() {
      if (session) {
        let res = await findUser(session.user.id);
        if (res.success) {
          setuserdata(res.user);
        }
      }
    }
    fetchData();
  }, [session]);

  return (
    <div className="h-full w-full flex flex-col gap-y-3 relative">

      <div className="text-black drop-shadow-lg w-full h-20 ps-6 flex items-center justify-start">
        {/* <PiVeer-PawasLogoFill className="text-3xl" /> */}
        <Link href={'/'}><span className="italic font-medium text-2xl">Veer-Pawas</span></Link>
      </div>


      <div className="">
        <span className="ps-6 text-xs font-medium opacity-50">Menu</span>
        <ul className="my-3 flex flex-col gap-y-2">
          <Link href={'/dashboard/?section=account'}><li className="hover:bg-[#e8ddf3] w-[96%] mx-auto rounded-md px-4 py-2 flex items-center gap-x-4 opacity-50 hover:opacity-100 cursor-pointer"> <SquareUserRound className="text-xs"/> <span className="text-sm font-medium">Account</span> </li></Link>

          <Link href={'/dashboard/?section=booking'}><li className="hover:bg-[#e8ddf3] w-[96%] mx-auto rounded-md px-4 py-2 flex items-center gap-x-4 opacity-50 hover:opacity-100 cursor-pointer"> <Book className="text-[10px]"/> <span className="text-sm font-medium">Booking</span> </li></Link>

          <Link href={'/dashboard/?section=wishlist'}><li className="hover:bg-[#e8ddf3] w-[96%] mx-auto rounded-md px-4 py-2 flex items-center gap-x-4 opacity-50 hover:opacity-100 cursor-pointer"> <CakeSlice className="text-[10px]"/> <span className="text-sm font-medium">wishlist</span> </li></Link>


          <Link href={'/dashboard/?section=review'}><li className="hover:bg-[#e8ddf3] w-[96%] mx-auto rounded-md px-4 py-2 flex items-center gap-x-4 opacity-50 hover:opacity-100 cursor-pointer"> <MessageCircle className="text-xs"/> <span className="text-sm font-medium">Review</span> </li></Link>       
          
        </ul>
      </div>

      <div className="absolute w-full bottom-0 h-20">
        <div className="flex items-center justify-start ps-6 gap-x-3">
          <PiSignOutFill className="text-[1.2rem]" />
          <span onClick={() => signOut()} className="font-medium text-base cursor-pointer">Log-out</span>
        </div>
        <h2 className="py-2 px-2 text-xs"><span className="opacity-50">This website was designed by</span> <span className="font-medium">Tejas Dhamale.</span> </h2>
      </div>
    </div>
  );
}

export default memo(Sidenav);