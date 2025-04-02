"use client";
import Wishlistcard from "./Wishlistcard";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { findUserWishlist } from "@/serverAction/user";
import { removeWishlist } from "@/serverAction/wishlist";
import { toast } from "sonner";
import { memo } from "react";

function Wishlist({session}) {
    const [data, setdata] = useState([]);
    //const { data: session } = useSession();

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
    },[]);

    return (
        <div className="w-full h-full overflow-auto py-4 flex flex-col gap-y-4">

            {
               data.length ? data.map((ele, idx) => <Wishlistcard key={idx} data={ele} remove={remove} />) : <div><h2 className="ps-4 font-medium text-lg">No record found</h2></div>
            }

        </div>
    );
}

export default memo(Wishlist);