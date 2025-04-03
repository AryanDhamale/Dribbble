import Dashbord from "@/components/Dashbord/Dashbord";
import { Suspense } from "react";
import Dashboardnav from "@/components/Dashbord/Dashbordnav";
import dynamic from "next/dynamic";
const Loading = dynamic(() => import("@/components/loader/loading"), { ssr: false });


function DashbordWrapper()
{
    return (
        <Suspense fallback={<Loading/>}>
            <Dashboardnav/>
            <Dashbord/>
        </Suspense>
    ); 
}

export default DashbordWrapper;