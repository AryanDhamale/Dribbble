"use client";
import { GiCrossMark } from "react-icons/gi";
import Link from "next/link";

function Dashboardnav(){
    return (
        <div className="w-full px-4 h-20 border-b border-[#00ddb3] flex md:hidden items-center justify-between">
            <Link href={'/'}><p className="text-2xl text-[#00ddb3] drop-shadow-lg font-semibold pr-2  italic cursor-pointer">Dribbble</p></Link>
            <GiCrossMark className="text-2xl text-red-500"/>
        </div>
    );
}


export default Dashboardnav;