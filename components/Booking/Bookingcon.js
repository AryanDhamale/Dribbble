"use client";
/// Shadcn dependancy // 
import { useState, useCallback } from "react";
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { PiNotebookFill } from "react-icons/pi";
import { Input } from "@/components/ui/input"
import { AlertCircle } from "lucide-react"
import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert";
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
} from "@/components/ui/alert-dialog"

// local dependencys // 
import { BsArrowRight } from "react-icons/bs";
import { MdCall } from "react-icons/md";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";



function Bookingcon({ data }) {
    const [date, setDate] = useState(new Date());
    const [totalPerson, setTotalperson] = useState(0);
    const [isvalidate, setisvalidate] = useState({ visible: false, msg: "", type: "Error" });
    const router = useRouter();
    const { data: session } = useSession();

    const before = useCallback(() => {
        if (date)
            return `${String(date.getDate()).padStart(2, '0')}-${date.toLocaleString("en-US", { month: "long" })}-${date.getFullYear()}`;
        else "select date";
    }, [date]);

    const after = useCallback(() => {
        if (date) {
            let newDate = new Date(date);
            newDate.setDate(newDate.getDate() + data.totalDay);
            return `${String(newDate.getDate()).padStart(2, '0')}-${newDate.toLocaleString("en-US", { month: "long" })}-${newDate.getFullYear()}`;
        } else {
            return "";
        }
    }, [date]);

    const append = useCallback((date) => {
        let newDate = new Date(date);
        return newDate.setDate(newDate.getDate() + data.totalDay);
    }, [date])

    const totalCost = useCallback(() => {
        return totalPerson > 0 ? data.cost * totalPerson : data.cost;
    }, [totalPerson]);


    const startBooking = async () => {
        if (!session) {
            return router.push('/session');
        }
        if (isvalidate.type !== 'success') {
            toast("please check , before booking!");
            return;
        }

        let res = await checkAvailable();
        if (!res.flag) {
            toast("please first validate all the condition!");
            return;
        }

        router.push(`/booking/${data._id}?beforeDate=${before()}&afterDate=${after()}&totalPerson=${totalPerson}`);
    }

    const checkAvailable = async () => {
        // databse read opeation  //
        try {
            if (!date) {
                setisvalidate({ visible: true, msg: "Select date first", type: "Error" });
                throw new Error("some error occured");
            }
            let currentDate = new Date();
            currentDate.setHours(0, 0, 0, 0);
            let selectDate = date;
            selectDate.setHours(0, 0, 0, 0);

            if (currentDate > selectDate) {
                setisvalidate({ visible: true, msg: "unexpected date, how did you select old date that the current date!", type: "Error" });
                throw new Error("some error occured");
            }

            if (totalPerson <= 0) {
                setisvalidate({ visible: true, msg: "please Enter valid total person count!", type: "Error" });
                throw new Error("some error occured");
            }

            if (data.totalPerson < totalPerson) {
                setisvalidate({ visible: true, msg: "Sorry, No more registration are available!", type: "Error" });
                throw new Error("some error occured");
            }


            setisvalidate({ visible: true, msg: "Now , click on Booking button", type: "success" });
            return { flag: true, togo: "can go" };


        } catch (err) {
            return { flag: false, togo: "can't go!" };
        }
    }

    return (
        <div className="w-[90%] my-5 mx-auto" id="booking">

            <div className="grid grid-col-1 xl:grid-cols-2 gap-y-5 gap-x-5">

                <div className="border border-slate-200 rounded-xl bg-white h-[94%] my-auto drop-shadow-lg py-4 flex flex-col gap-y-5 px-6">
                    <h2 className="text-lg md:text-2xl font-medium drop-shadow-lg">Select date which you want to Book</h2>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-y-4 gap-x-4">
                        <div>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant={"outline"}
                                        className={cn(
                                            "w-[14rem] md:w-[280px] justify-start text-left font-normal",
                                            !date && "text-muted-foreground"
                                        )}
                                    >
                                        <CalendarIcon />
                                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0">
                                    <Calendar
                                        mode="single"
                                        selected={date}
                                        onSelect={setDate}
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>
                        <div>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant={"outline"}
                                        className={cn(
                                            "w-[14rem] md:w-[280px] justify-start text-left font-normal",
                                            !date && "text-muted-foreground"
                                        )}
                                    >
                                        <CalendarIcon />
                                        {date ? format(append(date), "PPP") : <span>Pick a date</span>}
                                    </Button>
                                </PopoverTrigger>
                            </Popover>
                        </div>
                    </div>

                    <div className="flex items-center gap-x-3">
                        <Input type="number" value={totalPerson} onChange={(e) => setTotalperson(e.target.value)} className={'w-[40%]'} placeholder="total peroson" />
                        <Button type="submit" onClick={checkAvailable}>Check</Button>
                    </div>

                    <div className="my-6">
                        {isvalidate.visible && <Alert variant={isvalidate.type == 'Error' ? 'destructive' : ''} className={isvalidate.type == 'success' ? 'text-green-500' : ''}>
                            <AlertCircle className="h-4 w-4" />
                            <AlertTitle>{isvalidate.type}</AlertTitle>
                            <AlertDescription>
                                {isvalidate.msg}
                            </AlertDescription>
                        </Alert>}
                    </div>

                </div>


                <div className="">
                    <div className=" border border-slate-200 rounded-xl drop-shadow-lg bg-white w-full md:w-[50%] mx-auto my-4 px-4 py-5">
                        <div className="border-b border-slate-200 flex items-center gap-x-4 py-4">
                            <PiNotebookFill className="text-xl text-[#00ddb3]" />
                            <p className="text-normal font-medium">Bookind details</p>
                        </div>
                        <div className="pt-3 pb-5 border-b border-slate-200">
                            <ul className="flex flex-col gap-y-3">
                                <li className="text-sm font-normal"> <span className="opacity-50">Location :</span> <span>{data.title}</span> </li>
                                <li className="text-sm font-normal flex items-center"> <span className="opacity-50">Date : </span> <p className="ps-1 flex items-center"><span>{before()}</span> <BsArrowRight className="mx-3 text-lg font-medium" /> <span>{after()}</span></p> </li>
                                <li className="text-sm font-normal"> <span className="opacity-50">Total Person : </span> <span>{totalPerson}</span> </li>
                            </ul>
                        </div>
                        <div className="py-4">
                            <p className="font-medium flex items-center justify-between"> <span>Total Price</span>  <span className="text-green-400">&#8377; {(totalCost()).toLocaleString('en-IN')}</span> </p>
                            <div className="py-6 grid grid-cols-2 gap-x-4">
                                <AlertDialog>
                                    <AlertDialogTrigger asChild>
                                    <button className="bg-red-400 drop-shadow-md text-white px-4 py-2 rounded-md flex items-center gap-x-1.5 cursor-pointer"> <MdCall /> <span>Book on call</span></button>
                                    </AlertDialogTrigger>
                                    <AlertDialogContent>
                                        <AlertDialogHeader>
                                            <AlertDialogTitle>Book On Call</AlertDialogTitle>
                                            <AlertDialogDescription className={'font-medium'}>
                                                If you want to <span className="text-red-400">Book on Call</span> then you can either call on <span className="text-blue-400">+91 8446162375</span> or Fill your name and contact no. on above <span className="text-red-400">Contact Form</span>, our team will reach out to you as soon as possible !.
                                            </AlertDialogDescription>
                                        </AlertDialogHeader>
                                        <AlertDialogFooter>
                                            <AlertDialogAction>Ok</AlertDialogAction>
                                        </AlertDialogFooter>
                                    </AlertDialogContent>
                                </AlertDialog>
                                <button onClick={startBooking} className="bg-green-400 text-white px-4 py-2 rounded-md cursor-pointer">Book online</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Bookingcon;