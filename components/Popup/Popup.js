"use client";
import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState,useEffect } from "react";


function Popup() {
   const [visible,setVisible]=useState(false);
   const [counter,setCounter]=useState(10);
   const [btnDisabled, setBtnDisabled] = useState(true);

   useEffect(()=>{
      let val=localStorage.getItem("popUp");
      if(!val){
        setVisible(true);
        localStorage.setItem('popUp','true');

        let timer = setInterval(()=>{ 
         setCounter((oldVal)=>{
            if(oldVal==1) { 
               setBtnDisabled(false);
               clearInterval(timer);
               return 0;
            }
            return oldVal-1;
         });
        },1000);

        return ()=>clearTimeout(timer);

      } 
   },[]);

   return (
      <>
      {visible && <div className="fixed top-0 left-0 z-[20] w-full h-screen bg-[#00000040] flex items-center justify-center">
         <Card className={'w-[360px]'}>
            <CardHeader>
               <CardTitle className={'text-lg text-[#00ddb3] italic font-medium'}>Dribbble</CardTitle>
               <CardDescription>We’ve changed our name!</CardDescription>
            </CardHeader>
            <CardContent>
               <p className="text-sm text-gray-600 mb-4">
                  Our travel website <strong>Dribbble</strong> is now <strong>Veer-Pawas</strong>
               </p>
               <p className="text-xs text-gray-400">Enjoy the same features under a new name 💜</p>
            </CardContent>
            <CardFooter>
             <Button disabled={btnDisabled} onClick={()=>setVisible(false)} className={'w-full'}> {counter>0 ? counter : "Close"}  </Button>
            </CardFooter>
         </Card>
      </div>}
     </>
   );
}

export default Popup;