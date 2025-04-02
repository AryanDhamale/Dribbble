import Dashbord from "@/components/Dashbord/Dashbord";
import { Suspense } from "react";
import Loading from "@/components/loader/loading";
import Dashboardnav from "@/components/Dashbord/Dashbordnav";

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