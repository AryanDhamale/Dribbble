"use client";
import Filter from "@/components/showAllListings/Filter";
import Loading from "@/components/loader/loading";
import { useState,useEffect } from "react";
import { notFound } from "next/navigation";
import PackageCard from "@/components/showAllListings/PackageCard";
import { getlistingbyCondition } from "@/serverAction/action";
import Lottie from "lottie-react";
import notfound from "@/components/lottieJSON/notFound.json";


function City({params})
{
  const [loader,setloader]=useState(true);  
  const [cities,setcities]=useState([]);
  const [city,setcity]=useState("");
  useEffect(()=>{
    async function fetchData()
    {
      const {name}=await params;
      if(!name)
      {
        return notFound();
      }
      setcity(name);
      const all = await getlistingbyCondition({location:name});
      setcities(all);
    }
    setloader(false);
    fetchData();
  },[params])
  
  if(loader){
    return <Loading/>
  }

  return (
    <div>
       <div className="mt-20 h-35 flex items-center bg-[ghostwhite]"> 
         <h2 className="px-10 text-black drop-shadow-lg text-4xl font-semibold">Location - {city}</h2>
       </div>
       <Filter/>
       <div className="w-[90%] min-h-[100vh] mx-auto px-6 py-6 flex justify-start items-center flex-wrap gap-y-6 gap-x-12">
        {
          cities.length ? cities.map((ele,idx)=><PackageCard key={idx} data={ele}/>) : <Lottie className="w-full h-[90vh]" animationData={notfound}/>
        }
        </div>
    </div>
  );
}

export default City;