"use client"
import Conformation from "@/components/Booking/Conformation";
import { useSearchParams } from "next/navigation";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";
import Loading from "@/components/loader/CustomeLoading";
import { getoneListing } from "@/serverAction/action";
import Message from "@/components/CommonCop/Message";

function Booking({ params }) {
  const [data, setData] = useState({ date: "", totalPerson: "", id: "" });
  const [listing, setListing] = useState(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    async function getQuery() {
      let beforeDate = searchParams.get('beforeDate');
      let afterDate = searchParams.get('afterDate');
      let totalPerson = searchParams.get('totalPerson');
      try {
        let { id } = await params;
        if (!id) {
          return notFound();
        }
        let res = await getoneListing(id);
        if (res.success || (res.success && totalPerson && res.Package.totalPerson < totalPerson) ) {
          return <Message msg={"Invalid data has passed!"} />
        }
        
        setListing(res.Package);
        setData({ id, beforeDate, afterDate, totalPerson });

      } catch (err) {
        return <Message msg={"something went wrong from backend"}/>
      }
    }
    getQuery();
  }, [params,searchParams]);

  if (!data.beforeDate || !data.afterDate || !data.totalPerson || !data.id) {
    return <Message msg={'Not Found'} />
  }

  else if (!listing) {
    return <Loading />
  }

  return <Conformation data={data} listing={listing} />
}

export default Booking;