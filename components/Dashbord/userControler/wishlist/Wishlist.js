"use client";
import Wishlistcard from "./Wishlistcard";
import { useState, useEffect } from "react";
import { findUserWishlist } from "@/serverAction/user";
import { removeWishlist } from "@/serverAction/wishlist";
import { toast } from "sonner";
import { memo } from "react";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import norecord from "@/components/lottieJSON/norecord.json";
import circleLoading from "@/components/lottieJSON/circleLoading.json";

function Wishlist({ session }) {
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    setLoading(true);
    let res = await findUserWishlist(session.user.id);
    if (res.success) {
      setdata(res.arr || []);
    }
    setLoading(false);
  }

  const remove = async (id) => {
    if (session) {
      let res = await removeWishlist(session.user.id, id);
      if (res.success) {
        toast("removed successfully!");
        fetchData();
      } else {
        toast(res.message);
      }
    }
  }

  useEffect(() => {
    if (session) fetchData();
  }, [session]);

  return (
    <div className="w-full flex items-center justify-center flex-wrap gap-x-5 gap-y-5">

      {
        loading ? <div className="w-full h-screen flex justify-center items-center "> <Lottie className="size-35" animationData={circleLoading}/> </div> : 
        (data.length ? data.map((ele, idx) => <Wishlistcard key={idx} data={ele} remove={remove} />) : <Lottie className="w-full h-screen" animationData={norecord} />)
      }

    </div>
  );
}

export default memo(Wishlist);