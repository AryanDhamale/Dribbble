"use client";
import Listinghead from "@/components/package-Listing/Listinghead";
import Listinginfo from "@/components/package-Listing/Listinginfo";
import { getoneListing } from "@/serverAction/action";
import { notFound } from "next/navigation";
import { useState, useEffect } from "react";
import Loading from "@/components/loader/CustomeLoading";
import Bookingcon from "@/components/Booking/Bookingcon";

function Package({ params }) {
      const [Listing, setListing] = useState({});
      const [loader,setLoader]=useState(true);
    
      useEffect(() => {
        async function fetchData() {
          try {
            const {id}=await params;
            // if(!id || id.length<24) {
            //   return notFound();
            // }
            let list = await getoneListing(id);
            if(!list.success) {
              return notFound();
            }
            setListing(list.Package);
          } catch (err) {
            console.log("Error", err);
            return;
          }
          setLoader(false);
        }

        fetchData();
      }, [params]);
    
    if(loader)
    {
      return <Loading/>   
    }

    return (
        <>
            <div className="mt-20">
                <Listinghead data={Listing} />
                <Bookingcon data={Listing}/>
                <Listinginfo data={Listing}/>
            </div>
        </>
    );
}

export default Package;