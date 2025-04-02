import Dashbord from "@/components/Dashbord/Dashbord";
import { Suspense } from "react";
import Loading from "@/components/loader/loading";

function DashbordWrapper()
{
    return (
        <Suspense fallback={<Loading/>}>
            <Dashbord/>
        </Suspense>
    ); 
}

export default DashbordWrapper;