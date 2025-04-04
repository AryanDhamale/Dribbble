"use client";
import Wishlistcard from "./Wishlistcard";
import { useState, useEffect } from "react";
import { findUserWishlist } from "@/serverAction/user";
import { removeWishlist } from "@/serverAction/wishlist";
import { toast } from "sonner";
import { memo } from "react";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import norecord from "@/components/lottieJSON/norecord.json"

function Wishlist({session}) {
    const [data, setdata] = useState([]);

    async function fetchData()
    {
       if(session)
       {
         let res = await findUserWishlist(session.user.id);
         if(res.success)
         {
           setdata(res.arr || []);
         }
       }
    }

    const remove=async(id)=>{
       console.log("called")
       if(session){
        let res = await removeWishlist(session.user.id,id);
        if(res.success) {
          toast("removed successfully!");
          fetchData();
        }else {
            toast(res.message);
        }
       }
    }

    useEffect(()=>{
      fetchData();
    },[session]);

    return (
        <div className="w-full h-full overflow-auto py-4 flex flex-col gap-y-4">

            {
               data.length ? data.map((ele, idx) => <Wishlistcard key={idx} data={ele} remove={remove} />) : <Lottie className="w-full h-full" animationData={norecord}/>
            }

        </div>
    );
}

export default memo(Wishlist);