"use client";
import { useSearchParams } from "next/navigation";
import Sidenav from "@/components/Dashbord/Sidenav";
import Account from "@/components/Dashbord/userControler/Account";
import Booking from "@/components/Dashbord/userControler/booking/Booking";
import Wishlist from "@/components/Dashbord/userControler/wishlist/Wishlist";
import Comment from "@/components/Dashbord/userControler/Comment";
import { notFound } from "next/navigation";
import { useSession } from "next-auth/react";
import { useState } from "react";

function Dashbord() {

    const searchParams = useSearchParams();
    const {data:session}=useSession();
    const section = searchParams.get('section');
    const message=searchParams.get('message');
    const oid=searchParams.get('oid');


    const handleCase = () => {
        switch (section) {
            case "account":
                return <Account session={session} />;

            case "booking":
                return <Booking session={session} message={message} oid={oid}/>;

            case "wishlist":
                return <Wishlist session={session} />;

            case "review":
                return <Comment session={session} />;

            default:
                return notFound();
        }
    }
    return (

        <div className="flex">
            <div className="hidden md:block flex-1 bg-white">
                <Sidenav session={session} />
            </div>
            <div className="w-full md:w-[82%] h-screen overflow-auto bg-[whitesmoke]">
                {/* <div className="w-[96%] rounded-md bg-[#f5fbff] border border-slate-200 mx-auto h-35 flex items-center ps-10"> <span className="text-3xl font-medium drop-shadow-lg">{section[0].toUpperCase() + section.slice(1)}</span> </div> */}
                <div className="w-full py-3"> {handleCase()} </div>
                {/* h-[74vh] */}
            </div>
        </div>

    );
}

export default Dashbord;