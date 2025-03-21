"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession} from "next-auth/react";

function Dashbord(){
    const {data:session}=useSession();
    const route=useRouter();
    useEffect(()=>{
        if(!session) 
        {
          route.push("/session/new");
        }
    },[]);
    return (
        <div>
            This is an Dashbord
        </div>
    );
}

export default Dashbord;