"use client";
// local dependancies // 
import Link from "next/link";
import { signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import { findUser } from "@/serverAction/user";
import { memo } from "react";

// luci-reacticons // 
// user - icons // 
import { SquareUserRound } from 'lucide-react';
import { Book } from 'lucide-react';
import { CakeSlice } from 'lucide-react';
import { MessageCircle } from 'lucide-react';
import { SquarePlay } from 'lucide-react';

// admin-icons // 
import { UserRoundPlus } from 'lucide-react';
import { Disc2 } from 'lucide-react';
import { Webhook } from 'lucide-react';
import { Car } from 'lucide-react';
import { BookMarked } from 'lucide-react';


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
        <ul className="my-3 pb-2 flex flex-col gap-y-2 border-b border-slate-200">
          <Link href={'/dashboard/?section=account'}><li className="hover:bg-[#e8ddf3] w-[96%] mx-auto rounded-md px-4 py-2 flex items-center gap-x-4 opacity-50 hover:opacity-100 cursor-pointer"> <SquareUserRound className="size-5"/> <span className="text-sm font-medium">Account</span> </li></Link>

          <Link href={'/dashboard/?section=booking'}><li className="hover:bg-[#e8ddf3] w-[96%] mx-auto rounded-md px-4 py-2 flex items-center gap-x-4 opacity-50 hover:opacity-100 cursor-pointer"> <Book className="size-5"/> <span className="text-sm font-medium">Booking</span> </li></Link>

          <Link href={'/dashboard/?section=wishlist'}><li className="hover:bg-[#e8ddf3] w-[96%] mx-auto rounded-md px-4 py-2 flex items-center gap-x-4 opacity-50 hover:opacity-100 cursor-pointer"> <CakeSlice className="size-5"/> <span className="text-sm font-medium">wishlist</span> </li></Link>

          <Link href={'/dashboard/?section=review'}><li className="hover:bg-[#e8ddf3] w-[96%] mx-auto rounded-md px-4 py-2 flex items-center gap-x-4 opacity-50 hover:opacity-100 cursor-pointer"> <MessageCircle className="size-5"/> <span className="text-sm font-medium">Review</span> </li></Link> 

          <Link href={'/dashboard/?section=departure'}><li className="hover:bg-[#e8ddf3] w-[96%] mx-auto rounded-md px-4 py-2 flex items-center gap-x-4 opacity-50 hover:opacity-100 cursor-pointer"> <SquarePlay className="size-5"/> <span className="text-sm font-medium">Pre-departure video</span> </li></Link>       
          </ul>

        {/* <span className="ps-6 text-xs font-medium opacity-50">Admin panel</span>
        <ul className="my-3 pb-2 flex flex-col gap-y-2 border-b border-slate-200">
          <Link href={'/dashboard/?section=appendAdmin'}><li className="hover:bg-[#e8ddf3] w-[96%] mx-auto rounded-md px-4 py-2 flex items-center gap-x-4 opacity-50 hover:opacity-100 cursor-pointer"> <UserRoundPlus className="size-5"/> <span className="text-sm font-medium">Append</span> </li></Link>

          <Link href={'/dashboard/?section=mostPopular'}><li className="hover:bg-[#e8ddf3] w-[96%] mx-auto rounded-md px-4 py-2 flex items-center gap-x-4 opacity-50 hover:opacity-100 cursor-pointer"> <Disc2 className="size-5"/> <span className="text-sm font-medium">Most populter</span> </li></Link>

          <Link href={'/dashboard/?section=cityTour'}><li className="hover:bg-[#e8ddf3] w-[96%] mx-auto rounded-md px-4 py-2 flex items-center gap-x-4 opacity-50 hover:opacity-100 cursor-pointer"> <Webhook className="size-5"/> <span className="text-sm font-medium">City tour</span> </li></Link>

          <Link href={'/dashboard/?section=ongoingTour'}><li className="hover:bg-[#e8ddf3] w-[96%] mx-auto rounded-md px-4 py-2 flex items-center gap-x-4 opacity-50 hover:opacity-100 cursor-pointer"> <Car className="size-5"/> <span className="text-sm font-medium">Ongoing tour</span> </li></Link> 

          <Link href={'/dashboard/?section=bookings'}><li className="hover:bg-[#e8ddf3] w-[96%] mx-auto rounded-md px-4 py-2 flex items-center gap-x-4 opacity-50 hover:opacity-100 cursor-pointer"> <BookMarked className="size-5"/> <span className="text-sm font-medium">Bookings</span> </li></Link>       
          </ul> */}
      </div>

      <div className="absolute w-full bottom-0 ">
        <h2 className="py-2 px-2 text-xs"><span className="opacity-50">This website was designed by</span> <span className="font-medium">Tejas Dhamale.</span> </h2>
      </div>
    </div>
  );
}

export default memo(Sidenav);