"use client";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { MdDashboard } from "react-icons/md";
import { CiBookmark } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { VscCodeReview } from "react-icons/vsc";

import { AiFillAliwangwang } from "react-icons/ai";
import { FaCaravan } from "react-icons/fa6";
import { FcContacts } from "react-icons/fc";
import { FcGallery } from "react-icons/fc";
import { FcAbout } from "react-icons/fc";
import Link from "next/link";

import { useSession } from "next-auth/react";


function Sidenav() {
    return (
        <div className="bg-white w-[100%] left-0 top-0 h-screen fixed z-[10]">
            <div className="border-b border-[#00ddb3] px-6 ">
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger className={'flex items-center'}>
                            <div className="flex items-center gap-x-2">
                                <Image className="size-16 rounded-full" src={'https://avatars.githubusercontent.com/u/124599?v=4'} width={100} height={100} alt="this is an image"/>
                                <div>
                                    <p>Aryan Dhamale</p>
                                    <p className="font-normal opacity-50">aryandhamale07@gmail.com</p>
                                </div>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                            <ul className="ps-4 flex flex-col gap-y-3 text-base font-medium">
                                <li className="flex items-center gap-x-2"><MdDashboard className="text-xl text-[#00ddb3]"/> Account</li>
                                <li className="flex items-center gap-x-2"><CiBookmark className="text-xl text-blue-500"/> Bookings</li>
                                <li className="flex items-center gap-x-2"><FaHeart className="text-xl text-red-500"/>Wishlist</li>
                                <li className="flex items-center gap-x-2"><VscCodeReview className="text-xl text-slate-500"/>Review</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>

            <div className="mt-5">
                <ul className="flex flex-col gap-y-3 font-medium">
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

            <div className="inline absolute bottom-6 left-1/2 -transform -translate-1/2">
                <h2 className="text-base"><span className="opacity-50">This website was designed by</span> <span className="font-medium">Tejas Dhamale.</span> </h2>
            </div>
        </div>
    );
}

export default Sidenav;