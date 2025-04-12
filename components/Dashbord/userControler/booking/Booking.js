"use client";
import { useState , useEffect } from "react";
import { findAllbooking } from "@/serverAction/user";
import Bookingcard from "./Bookingcard";
import { memo } from "react";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import norecord from "@/components/lottieJSON/norecord.json";
import circleLoading from "@/components/lottieJSON/circleLoading.json";
import Success from "@/components/Success/Success";
import Filter from "./Filter";
import { expiredPackages } from "@/serverAction/returnPackgesTome";

function Booking({session,message,oid})
{
    const [data,setdata]=useState([]);
    const [success,setSuccess]=useState(false);
    const [loading,setLoading]=useState(false);


    const fetchData=async()=>{
        setLoading(true);
        let res = await findAllbooking(session.user.id);
        if(res.success){
          setdata(res.arr);
          if(res.arr.length>0) {
           let r=await expiredPackages(res.arr);
           console.log(r);
          }
        }
        setLoading(false);
    }

    useEffect(()=>{
      if(session) fetchData();
      if(message) setSuccess(true);
    },[]);

    return (
        <>
        {success && <Success control={setSuccess} oid={oid}/> }
        <div className="w-full flex items-center justify-center flex-wrap gap-x-5 gap-y-5">
          {
            loading ? <div className='w-full h-screen flex items-center justify-center'><Lottie className="size-35" animationData={circleLoading}/></div> : 
            (data.length ? data.map((ele,idx)=><Bookingcard key={idx} data={ele}/> ) : <Lottie className="w-full h-screen" animationData={norecord}/> )
          }
        </div>
        </>
    );
}

export default memo(Booking);