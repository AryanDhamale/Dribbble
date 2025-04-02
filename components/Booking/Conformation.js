"use client";
// local dependancys // 
import { FaLocationArrow } from "react-icons/fa";
import { LuCircleDotDashed } from "react-icons/lu";
import { memo, useState } from "react";
import { useSession } from "next-auth/react";
import { startBooking } from "@/serverAction/booking";
import Script from "next/script";
import { findUser } from "@/serverAction/user";
import { useRouter } from "next/navigation";
import { decreaseCount } from "@/serverAction/booking";
import { toast } from "sonner";
import { appendIDtoOrder } from "@/serverAction/booking";

// schadcn depnedacys // 
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";


function Conformation({ data, listing }) {
    
    const router=useRouter();
    const [checkState,setcheckState] = useState(false);
    const { data: session } = useSession();
    if(!session){
      router.push('/session');
      return;
    }

    const payment = async (cost) => {
        try {
            let { user } = await findUser(session.user.id);
            if(user.email!=='aryandhamale07@gmail.com' || (!user.email_verified || !user.mobile_verified)){
                toast("Please verify yourself first !");
                return; 
            }
            if(checkState) {
                toast("you can't book this now , as all booking has done!");
                return;
            }
            let res = await decreaseCount(session.user.id,listing._id,data.beforeDate,data.totalPerson);
            if(!res.success) {
               toast(res.msg);
               setcheckState(true);
               return ;
            }
            // appending oid with booking schema // 
            let {id}=res;
            let x = await startBooking(cost);
            let r = await appendIDtoOrder(id,x.id);
            if(!r.success){
                toast("faild to append order_id");
                return ;
            }
            const options = {
                key: process.env.NEXT_PUBLIC_RAYZORPAY_ID, // Replace with your Razorpay key_id
                amount: cost * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                currency: 'INR',
                name: "Tejas Dhamale",
                description: `Booking ${listing.title}`,
                order_id: x.id, // This is the order_id created in the backend
                callback_url: process.env.NODE_ENV==='development' ? 'http://localhost:3000/api/razorpay' : process.env.NEXT_PUBLIC_PREFIX+ 'api/razorpay', // Your success URL
                prefill: {
                    name: user.name,
                    email: user.email,
                    contact: '+91 8446162375',
                },
                theme: {
                    color: '#F37254'
                },
            };
            const rzp = new Razorpay(options);
            rzp.open();

        } catch (err) {
            console.log({code:"Error",err});
        }
    }

    return (
        <>
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
            <div className="mt-22 min-h-[100vh]">
                <div className="border border-slate-300 bg-white drop-shadow-lg rounded-xl w-[95%] md:w-[70%] mx-auto mt-2">
                    <div className="w-full h-full flex flex-col gap-y-4 px-8 py-4">

                        <div className="border-b border-slate-200 py-4">
                            <ul className="text-sm font-normal flex flex-col gap-y-1">
                                <li className="text-xl text-blue-500"> <span>Location - </span> <span>{listing.title}</span> </li>
                                <li> {listing.totalDay}-Days && {listing.cities.length}-cities </li>
                                <li>
                                    {
                                        listing.cities.map((ele, idx) => `${ele}--- `)
                                    }
                                </li>
                                <li className="font-medium"><span>Note:</span> The highlights and sightseeing&apos;s may change depending on the departure date you choose </li>
                            </ul>
                        </div>

                        <div className="border-b border-slate-200 flex items-center gap-x-6 py-4">
                            <ul className="text-sm font-medium flex flex-col gap-y-1">
                                <li>Tour Start : </li>
                                <li>{data.beforeDate}</li>
                                <li>{listing.cities[0]}(joing/leving)</li>
                            </ul>
                            <FaLocationArrow className="text-xl text-green-400" />
                            <ul className="text-sm font-medium flex flex-col gap-y-1">
                                <li>Tour End : </li>
                                <li>{data.afterDate}</li>
                                <li>{listing.cities[listing.cities.length - 1]}(joing/leving)</li>
                            </ul>
                        </div>

                        <div className="border-b border-slate-200 py-4 flex flex-col gap-y-3">
                            <h2 className="text-base">Total peroson in this tour :- {data.totalPerson}</h2>
                            <p className="text-base font-medium"><span className="text-green-400">&#8377; {(listing.cost).toLocaleString('en-IN')}</span> * {data.totalPerson}  </p>
                            <p className="text-lg font-medium text-red-400">Once you Book, we&apos;ll handle the rest</p>
                            <ul className="text-sm font-medium flex flex-col gap-y-2">
                                <li className="flex items-center gap-x-1.5"><LuCircleDotDashed className="text-green-400" /> After your payment is compelete , Dribbble advisor will get in touch with you to complete your booking.</li>
                                <li className="flex items-center gap-x-1.5"><LuCircleDotDashed className="text-green-400" />Complete detials of all travellers including a copy of the valid ID proofs.</li>
                                <li className="flex items-center gap-x-1.5"><LuCircleDotDashed className="text-green-400" />Post booking confirmation, we are constantly in touch with you through,SMS, WhatsApp and email keeping you updated about every step until your departure</li>
                            </ul>
                        </div>

                        <div className="py-4 flex flex-wrap gap-y-4 items-center gap-x-4">
                            <AlertDialog>
                                <AlertDialogTrigger asChild>
                                <button className="bg-green-400 cursor-pointer text-white font-medium px-4 py-2 rounded-md">Pay Complete &#8377; {(listing.cost * data.totalPerson).toLocaleString('en-IN')} </button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                        <AlertDialogDescription>
                                            This action cannot be undone, after payment start you can <span className="text-red-500 font-medium">Cancelled</span> the Payment
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                                        <AlertDialogAction onClick={()=>payment(listing.cost * data.totalPerson)}>Continue</AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>



                            <AlertDialog>
                                <AlertDialogTrigger asChild>
                                <button className="bg-red-500 cursor-pointer text-white font-medium px-4 py-2 rounded-md">Pay for the 1/3 of total</button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle> You are Paying for {Math.ceil((listing.cost*data.totalPerson)/3)} </AlertDialogTitle>
                                        <AlertDialogDescription>
                                            This action cannot be undone, after payment start you can <span className="text-red-500 font-medium">Cancelled</span> the Payment
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                                        <AlertDialogAction onClick={()=>payment(Math.ceil((listing.cost*data.totalPerson)/3))}>Continue</AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default memo(Conformation);