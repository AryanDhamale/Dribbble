// local dependancy //
import Image from "next/image";
import { memo } from "react";
import { PiDotDuotone } from "react-icons/pi";
import Link from "next/link";

// shadcn dependancy // 
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button"




function Bookingcard({ data }) {

    const buttonColor={
        ongoing : {text:'text-green-600',bg:'bg-[#eaf8f3]'},
        missed: {text:'text-red-600',bg:'bg-red-50'},
        complete : {text:'text-blue-600',bg:'bg-blue-50'}
    }

    const before = () => {
        if (data.bookingDate) {
            let date = new Date(data.bookingDate);
            return `${String(date.getDate()).padStart(2, '0')}-${date.toLocaleString("en-US", { month: "long" })}-${date.getFullYear()}`;
        }
        else "Null";
    };

    const compare = () => {
        let currentDate = new Date();
        currentDate.setHours(0, 0, 0, 0);
        let selectDate = new Date(data.bookingDate);
        selectDate.setHours(0, 0, 0, 0);
        if (currentDate <= selectDate) {
            return true;
        }
        else {
            return false;
        }
    }

    return (
        <div className="">
            <Card className={'w-[360px]'}>
                <CardHeader>
                    <CardTitle className={'flex gap-x-3 border-b border-slate-200 pb-2'}>
                        <Image width={100} height={100} className="object-cover size-18 rounded-md border-2 border-slate-200" src={data.image} alt="this is an image" />
                        <div className="flex flex-col gap-y-1 py-1.5">
                            <h2 className="font-medium w-[15rem] truncate">{data.location}</h2>
                            <p className="text-sm font-normal opacity-50">{before()}</p>
                            <p className="text-sm font-normal opacity-50">totalPerson : {data.totalPerson}</p>
                        </div>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <ul>
                        <li className="flex items-center gap-x-1"> <PiDotDuotone className="text-lime-700 text-2xl" /> <span className="text-xs font-medium text-lime-500">oid : {data.oid || "not found!"} </span> </li>
                        <li className="flex items-center gap-x-1"> <PiDotDuotone className="text-lime-700 text-2xl" /> <span className="text-xs font-medium opacity-50">Cost : </span> <span className="text-xs font-medium">&#8377; {(data.cost).toLocaleString("en-IN")}</span> </li>
                        <li className="flex items-center gap-x-1"> <PiDotDuotone className="text-lime-700 text-2xl" /> <span className="text-xs font-medium">paymentStatus :</span> <span className={`text-xs font-medium ${data.paymentStatus=='completed' ? 'text-green-600' : 'text-red-600'}`}>{data.paymentStatus}</span> </li>
                    </ul>
                </CardContent>
                <CardFooter>
                  {data.paymentStatus=="completed" ?  <div className='w-full grid grid-cols-2 gap-x-2'>
                  <Button variant="outline" className={'rounded-full cursor-pointer'}>Cancel Trip</Button>
                  {
                    data.tourStatus ? <Button variant="outline" className={`rounded-full cursor-pointer ${buttonColor[data.tourStatus].bg} hover:${buttonColor[data.tourStatus].bg} border-0`}> <span className={buttonColor[data.tourStatus].text}>{data.tourStatus}</span> </Button> : <Button>Don&apos;t know</Button>
                  }
                  </div> : <Link className="w-full" href={'/'}> <div className="w-full grid grid-col-1 "><Button className={'cursor-pointer rounded-full'} variant='outline'>Continue Booking</Button> </div> </Link> }
                </CardFooter>
            </Card>

        </div>
    );
}

export default memo(Bookingcard);