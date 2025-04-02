"use client";
import { useState , useEffect } from "react";
import { useSession } from "next-auth/react";
import { findAllbooking } from "@/serverAction/user";
import Bookingcard from "./Bookingcard";
import { memo } from "react";

function Booking({session})
{
    const [data,setdata]=useState([]);
    //const {data:session} = useSession();

    const fetchData=async()=>{
      if(session){
        let res = await findAllbooking(session.user.id);
        if(res.success){
          setdata(res.arr || [])
        }
      }
    }

    useEffect(()=>{
      fetchData();
    },[session])
    return (
        <div className="w-full h-full overflow-auto py-4 flex flex-col gap-y-4">
          {
            data.length ? data.map((ele,idx)=><Bookingcard key={idx} data={ele}/> ) : <div><h2 className="ps-4 font-medium text-lg">No record found</h2></div> 
          }
        </div>
    );
}

export default memo(Booking);