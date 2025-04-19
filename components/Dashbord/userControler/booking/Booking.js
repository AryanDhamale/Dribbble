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
    const [filters,setFilters]=useState({status:'all',payment:'all'});

    const filterOut=()=>{
      if(!data.length) {
        return [];
      }
      let arr=[...data];
      switch(filters.status)
      {
        case 'ongoing' : 
        arr=arr.filter((ele,idx)=> ele.tourStatus=='ongoing');
        break;

        case 'missed' :
        arr=arr.filter((ele,idx)=> ele.tourStatus=='missed');
        break;

        case 'completed' : 
        arr=arr.filter((ele,idx)=> ele.tourStatus=='completed');
        break; 
      }

      switch(filters.payment) {
        case 'completed' : 
        arr=arr.filter((ele,idx)=> ele.paymentStatus=='completed');
        break;

        case 'pending' :
        arr=arr.filter((ele,idx)=> ele.paymentStatus=='pending');
        break; 
      }

      return arr;
    }


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

    const afterFilter=filterOut();

    useEffect(()=>{
      if(session) fetchData();
      if(message) setSuccess(true);
    },[]);

    return (
        <>
        {success && <Success control={setSuccess} oid={oid}/> }
        <Filter controls={setFilters}/>
        <div className="w-full flex items-center justify-center flex-wrap gap-x-5 gap-y-5">
          {
            loading ? <div className='w-full h-screen flex items-center justify-center'><Lottie className="size-35" animationData={circleLoading}/></div> : 
            (afterFilter.length ? afterFilter.map((ele,idx)=><Bookingcard key={idx} data={ele}/> ) : <Lottie className="w-full h-screen" animationData={norecord}/> )
          }
        </div>
        </>
    );
}

export default memo(Booking);