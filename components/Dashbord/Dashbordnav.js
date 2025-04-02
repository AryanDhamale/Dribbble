"use client";
import Link from "next/link";
import {  useDispatch } from 'react-redux';
import { setVisible } from "@/redux/sidenavcontrols/sideNavcontrolSlice";
import { FaBars } from "react-icons/fa6";

function Dashboardnav(){
    const dispatch=useDispatch();
    const callme=()=>{
        console.log('called');
        dispatch(setVisible());
    }
    return (
        <div className="w-full px-4 h-20 border-b border-[#00ddb3] flex md:hidden items-center justify-between">
            <Link href={'/'}><p className="text-2xl text-[#00ddb3] drop-shadow-lg font-semibold pr-2  italic cursor-pointer">Dribbble</p></Link>
            <FaBars onClick={callme} className="text-black text-lg"/>
        </div>
    );
}


export default Dashboardnav;