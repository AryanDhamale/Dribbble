"use client";
// shadcn dependacies // 
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

// local dependancies // 
import Image from "next/image";
import { getAlluser } from "@/serverAction/appendAdmin";
import { useState , useEffect, use } from "react";
import { toast } from "sonner";


function Appendadmin() {
    const [users,setUsers]=useState([]);
    const [query,setQuery]=useState('');

    const fetchAllusers=async()=>{
        let res = await getAlluser();
        if(res.success) {
            setUsers(res.arr || []);
        }
        else {
            toast(res.msg);
        }
    }
    
    useEffect(()=>{
        fetchAllusers();
    },[])

    return (
        <div className="w-full  h-screen flex flex-col items-center gap-y-4">
            <Card className='w-[95%]'>
                <CardHeader>
                    <CardTitle>Append user</CardTitle>
                    <CardDescription className='text-green-500 font-medium text-xs'>don't know what should do here now ? </CardDescription>
                </CardHeader>
                <CardContent>
                    <Input type="text" value={query} onChange={(e)=>setQuery(e.target.value)} className='w-full max-w-md py-5' placeholder="serach admin by email" />
                    <div className="mt-3 w-full h-[9rem] overflow-auto  max-w-lg  border-1 drop-shadow-lg border-slate-200 rounded-xl ">
                        <ul className="">
                            {
                                users.length ?  users.filter((el,idx)=> el.email.includes(query)).map((ele,idx)=><li key={idx} className="hover:bg-slate-200 cursor-pointer text-sm font-medium py-2 ps-3 pe-4 flex items-center justify-between"> <span>{ele.email}</span> <span className={`${ele.mobile_verified ? 'text-green-400' : 'text-red-400'}`}>{ele.mobile_verified ? 'validate' : 'invalidate'}</span> </li>) : <li className="text-sm text-center font-medium py-2"> no found </li>
                            }
{/* <li className="hover:bg-slate-200 cursor-pointer text-sm font-medium py-2 px-2 flex items-center justify-between"> <span>aryandhamale@gmail.com</span> <span className="text-green-400">validate</span> </li> */}
                            
                        </ul>
                    </div>
                </CardContent>
            </Card>


            <Table className='bg-white md:w-[95%] mx-auto border-2 border-slate-200'>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Email</TableHead>
                        <TableHead>Username</TableHead>
                        <TableHead>Gender</TableHead>
                        <TableHead>mobileNo</TableHead>
                        <TableHead className='text-blue-600'>Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className="font-medium flex items-center gap-x-1.5"> <Image width={100} height={100} src={'https://www.techsmith.com/blog/wp-content/uploads/2023/08/What-are-High-Resolution-Images.png'} alt="this is an image" className="size-6 rounded-full"/> aryandhamale07@gmail.com</TableCell>
                        <TableCell>Aryandhamale</TableCell>
                        <TableCell>Male</TableCell>
                        <TableCell>+91 8446162375</TableCell>
                        <TableCell className='text-red-500 font-medium cursor-pointer'>remove</TableCell>
                    </TableRow>
                </TableBody>
            </Table>


        </div>
    );
}

export default Appendadmin;