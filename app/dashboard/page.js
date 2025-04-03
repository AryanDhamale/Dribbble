import Dashbord from "@/components/Dashbord/Dashbord";
import { Suspense } from "react";
import Dashboardnav from "@/components/Dashbord/Dashbordnav";
import Loading from "@/components/loader/loading";


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