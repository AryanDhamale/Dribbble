"use client";
import { useSearchParams } from "next/navigation";
import Sidenav from "@/components/Dashbord/Sidenav";
import Account from "@/components/Dashbord/userControler/Account";
import Booking from "@/components/Dashbord/userControler/booking/Booking";
import Wishlist from "@/components/Dashbord/userControler/wishlist/Wishlist";
import Comment from "@/components/Dashbord/userControler/Comment";
import { notFound } from "next/navigation";
import { useSession } from "next-auth/react";

function Dashbord() {

    const searchParams = useSearchParams();
    const {data:session}=useSession();
    const section = searchParams.get('section');


    const handleCase = () => {
        switch (section) {
            case "account":
                return <Account session={session} />;

            case "booking":
                return <Booking session={session} />;

            case "wishlist":
                return <Wishlist session={session} />;

            case "review":
                return <Comment session={session} />;

            default:
                return notFound();
        }
    }
    return (

        <div className="min-h-[100vh] flex">
            <div className="hidden md:block border-r border-slate-200 flex-1 bg-[ghostwhite]">
                <Sidenav session={session} />
            </div>
            <div className="w-full md:w-[80%] py-5 flex flex-col gap-y-4">
                <div className="w-[96%] rounded-md bg-[ghostwhite] border border-slate-200 mx-auto h-35 flex items-center ps-10"> <span className="text-3xl font-medium drop-shadow-lg">{section[0].toUpperCase() + section.slice(1)}</span> </div>
                <div className="w-[96%] h-[74vh] rounded-md bg-[ghostwhite] border border-slate-200 mx-auto"> {handleCase()} </div>
            </div>
        </div>

    );
}

export default Dashbord;