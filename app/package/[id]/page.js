"use client";
import Listinghead from "@/components/package-Listing/Listinghead";
import Listinginfo from "@/components/package-Listing/Listinginfo";
import { getoneListing } from "@/serverAction/action";
import { notFound } from "next/navigation";
import { useState, useEffect } from "react";


function Package({ params }) {
    const [listing, setlisting] = useState({});
    async function fun() {
        let { id } = await params;
        if (!id) return notFound();
        let data = await getoneListing(id);
        if (!data) return notFound();
        setlisting(data);
    }

    useEffect(()=>{
        fun();
    },[])
    return (
        <>
            <div className="pt-25">
                <Listinghead data={listing} />
                <Listinginfo />
            </div>
        </>
    );
}

export default Package;