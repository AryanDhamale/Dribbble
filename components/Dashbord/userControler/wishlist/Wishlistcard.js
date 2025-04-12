"use client"
import Image from "next/image";
import Link from "next/link";
import { PiDotDuotone } from "react-icons/pi";
import { MdDelete } from "react-icons/md";
import { memo } from "react";


function Wishlistcard({data,remove}) {

    const handleDel=(e,id)=>{
      e.preventDefault();
      remove(id);
    }
    return (
        <Link href={`/package/${data._id}`}>
        <div className="drop-shadow-lg bg-white  rounded-3xl w-[250px] h-[250px] relative">
            <div className="size-full">
                <Image width={100} height={100} unoptimized className='size-full rounded-3xl object-cover' src={data.image} alt="this is an image"/>
                <div onClick={(e)=>handleDel(e,data._id)} className="size-[30px] hover:bg-red-100 bg-white flex justify-center items-center rounded-full absolute top-5 right-4 cursor-pointer"> <MdDelete className="text-red-500 "/> </div>
            </div>
            <div className="bg-[#eff4fb85] absolute bottom-0 left-0 w-full px-2 rounded-b-3xl">
              <h2 className="font-medium text-sm w-[240px] truncate">{data.title}</h2>
              <ul className="">
              <li className="flex items-center"> <PiDotDuotone className="text-3xl" /> <span className="text-xs font-medium">Cost : </span> <span className="text-xs font-medium">&#8377; {(data.cost).toLocaleString("en-IN")}</span> </li>
              <li className="flex items-center"> <PiDotDuotone className="text-3xl" /> <span className="text-xs font-medium">Avialable sit : </span> <span className="text-xs font-medium"> {data.totalPerson}</span> </li>
              </ul>
            </div>
        </div>
        </Link>
    );
}

export default memo(Wishlistcard);