"use client";
import Link from "next/link";
import { useSelector ,useDispatch } from 'react-redux';
import { setVisible } from "@/redux/sidenavcontrols/sideNavcontrolSlice";
import { FaBars } from "react-icons/fa6";
import Sidenav from "../HeaderAndFooter/sidenav/Sidenav";

function Dashboardnav(){
    const visible=useSelector((state)=>state.sideNavcontrol.value);
    const dispatch=useDispatch();

    
    return (
        <>
        {visible && <Sidenav/>}
        <div className="w-full px-4 h-20 bg-[#f5fbff] border-b border-[#00ddb3] flex md:hidden items-center justify-between">
            <Link href={'/'}><p className="text-2xl drop-shadow-lg text-[#00ddb3] font-semibold pr-2  italic cursor-pointer">Veer-Pawas</p></Link>
            <FaBars onClick={()=>dispatch(setVisible())} className="text-black text-lg"/>
        </div>
        </>
    );
}


export default Dashboardnav;