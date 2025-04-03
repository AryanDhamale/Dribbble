"use client";
import { useState , useEffect } from "react";
import { findAllbooking } from "@/serverAction/user";
import Bookingcard from "./Bookingcard";
import { memo } from "react";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import norecord from "@/components/lottieJSON/norecord.json";
import Success from "@/components/Success/Success";
import Filter from "./Filter";

function Booking({session,message,oid})
{
    const [data,setdata]=useState([]);
    const [success,setSuccess]=useState(false);
    const [query,setQuery]=useState("");
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
      if(message)
      setSuccess(true);
    },[]);

    return (
        <>
        {success && <Success control={setSuccess} oid={oid}/> }
        <div className="w-full h-full overflow-auto py-4 flex flex-col gap-y-4">
        {/* <Filter/> */}
          {
            data.length ? data.map((ele,idx)=><Bookingcard key={idx} data={ele}/> ) : <Lottie className="w-full h-full" animationData={norecord}/> 
          }
          {/* {
            data.filter((ele,idx)=>)
          } */}
        </div>
        </>
    );
}

export default memo(Booking);