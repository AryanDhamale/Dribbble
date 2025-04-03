"use client";
import Filter from "@/components/showAllListings/Filter";
import PackageCard from "@/components/showAllListings/PackageCard";
import { getallListing } from "@/serverAction/action";
import { useEffect, useState } from "react";
import Loading from "@/components/loader/CustomeLoading";

function All() {
  const [Listings, setListings] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        let newArr = await getallListing();
        setListings(newArr);
      } catch (err) {
        console.log("Error", err);
        return;
      }
      setLoader(false);
    }
    fetchData();
  }, []);

  useEffect(() => {
    // Ensure this code runs only on the client side
    if (typeof document !== "undefined") {
      console.log("Document is accessible:", document.title);
      // Add any document-related logic here
    }
  }, []);

  if (loader) {
    return <Loading />;
  }
  return (
    <div className="mt-20 pb-8 w-full mx-auto">
      <Filter />
      <div className="w-full md:w-[90%] mx-auto px-6 py-6 flex justify-start items-center flex-wrap gap-y-6 gap-x-12">
        {Listings.map((ele, idx) => (
          <PackageCard key={idx} data={ele} />
        ))}
      </div>
    </div>
  );
}

export default All;