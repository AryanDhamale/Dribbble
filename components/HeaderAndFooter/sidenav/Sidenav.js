"use client";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { MdDashboard } from "react-icons/md";
import { CiBookmark, CiNoWaitingSign } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { VscCodeReview } from "react-icons/vsc";

import { AiFillAliwangwang } from "react-icons/ai";
import { FaCaravan } from "react-icons/fa6";
import { FcContacts } from "react-icons/fc";
import { FcGallery } from "react-icons/fc";
import { FcAbout } from "react-icons/fc";
import { FcVideoFile } from "react-icons/fc";
import Link from "next/link";

import { useSession } from "next-auth/react";
import { GiCrossMark } from "react-icons/gi";
import { useDispatch } from 'react-redux';
import { setVisible } from "@/redux/sidenavcontrols/sideNavcontrolSlice";
import { Button } from "@/components/ui/button"


function Sidenav() {
    const {data:session}=useSession();
    const dispatch=useDispatch();
    return (
        <div className="bg-white w-[100%] left-0 top-0 h-screen fixed z-[10]">

           <div className="w-full h-20 flex items-center justify-between px-6">
            <p className="text-[#00ddb3] font-medium italic drop-shadow-lg text-2xl">Veer-Pawas</p>
            <GiCrossMark onClick={()=>dispatch(setVisible())} className="text-2xl text-red-500"/>
           </div>

            {session && <div className="w-[96%] rounded-xl mx-auto bg-white drop-shadow-[0_1px_14px_#00ddb3]  px-6 ">
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger className={'flex items-center'}>
                            <div className="flex items-center gap-x-2">
                                <Image className="size-16 rounded-full" src={session? session.user.image : 'https://avatars.githubusercontent.com/u/124599?v=4'} width={100} height={100} alt="this is an image"/>
                                <div>
                                    <p>{session ? session.user.name : "Unknown"}</p>
                                    <p className="font-normal opacity-50">{session ? session.user.email : "NULL"}</p>
                                </div>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                            <ul onClick={()=>dispatch(setVisible())} className="ps-4 flex flex-col gap-y-3 text-base font-medium"> 
                                <Link href={'/dashboard?section=account'}><li className="flex items-center gap-x-2"><MdDashboard className="text-xl text-[#00ddb3]"/> Account</li></Link>
                                <Link href={'/dashboard?section=booking'}><li className="flex items-center gap-x-2"><CiBookmark className="text-xl text-blue-500"/> Bookings</li></Link>
                                <Link href={'/dashboard?section=wishlist'}><li className="flex items-center gap-x-2"><FaHeart className="text-xl text-red-500"/>Wishlist</li></Link>
                                <Link href={'/dashboard?section=review'}><li className="flex items-center gap-x-2"><VscCodeReview className="text-xl text-slate-500"/>Review</li></Link>
                                <Link href={'/dashboard/?section=departure'}><li className="flex items-center gap-x-2"><FcVideoFile className="text-xl"/>Pre-departure video</li></Link>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>}

            {!session && <div onClick={()=>dispatch(setVisible())} className="px-5 flex gap-x-4">
               <Link href={'/session/new'}><Button variant="outline">Sign up </Button></Link>
               <Link href={'/session'}><Button>Login</Button></Link>
            </div>}

            <div className="mt-5">
                <ul onClick={()=>dispatch(setVisible())} className="flex flex-col gap-y-3 font-medium">
                    <Link href={'/'}>
                    <li className="text-slate-800 flex items-center gap-x-2 active:bg-blue-50 rounded-md w-[97%] mx-auto px-3 py-3"><AiFillAliwangwang className="text-xl"/> <span className="text-lg">Home</span> </li></Link>

                    <Link href={'/show-all'}>
                    <li className="text-slate-800 flex items-center gap-x-2 active:bg-blue-50 rounded-md w-[97%] mx-auto px-3 py-3"><FaCaravan className="text-xl"/> <span className="text-lg">Tour</span> </li></Link>

                    <Link href={'/contact-us'}>
                    <li className="text-slate-800 flex items-center gap-x-2 active:bg-blue-50 rounded-md w-[97%] mx-auto px-3 py-3"><FcContacts className="text-xl"/> <span className="text-lg">Contact</span> </li></Link>

                    <Link href={'/gallery'}>
                    <li className="text-slate-800 flex items-center gap-x-2 active:bg-blue-50 rounded-md w-[97%] mx-auto px-3 py-3"><FcGallery className="text-xl"/> <span className="text-lg">Gallery</span> </li></Link>

                    <Link href={'/about'}>
                    <li className="text-slate-800 flex items-center gap-x-2 active:bg-blue-50 rounded-md w-[97%] mx-auto px-3 py-3"><FcAbout className="text-xl"/> <span className="text-lg">About</span> </li></Link>
                </ul>
            </div>

            <div className="w-full  absolute bottom-6 ">
                <h2 className="text-base text-center"><span className="opacity-50">This website was designed by</span> <span className="font-medium">Tejas Dhamale.</span> </h2>
            </div>
        </div>
    );
}

export default Sidenav;