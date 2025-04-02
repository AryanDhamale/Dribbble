import Image from "next/image";
import { AiTwotoneDelete } from "react-icons/ai";
import { GoChevronRight } from "react-icons/go";
import Link from "next/link";


function Wishlistcard({data,remove}) {

    return (
        <div className="border border-slate-200 bg-white drop-shadow-lg rounded-2xl px-2 py-2 w-[98%] mx-auto flex gap-x-0.5 sm:gap-x-4">

            <Image className="my-auto sm:my-0 size-15 sm:size-30 object-cover rounded-md" width={100} height={100} src={data.image} alt="this is an image" />
            <div className="flex-1 flex justify-between px-4 items-center">
                <div className="text-xs">
                    <p className="font-medium">{data.title}</p>
                    <div className="flex flex-col gap-y-0.5">
                        <p className="font-medium  sm:text-base"><span className="opacity-50">Start-from </span>: <span className="font-bold">&#8377; {(data.cost).toLocaleString('en-IN')}</span> </p>
                        <p className="font-light opacity-50  sm:text-sm">per person will apply</p>
                        <p className="font-medium sm:text-sm">{data.totalDay}-Day {data.cities.length}-cities</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2">
                    <Link href={`/package/${data._id}`}>
                    <button className="bg-[#bedbff] active:bg-[#bedbffd7] cursor-pointer rounded-full px-3 py-1 text-sm sm:text-base sm:px-5 sm:py-2 flex gap-x-2 items-center"><span>Check</span><GoChevronRight/></button></Link>
                    <button onClick={()=>remove(data._id)} className="bg-[#bedbff] active:bg-[#bedbffd7] cursor-pointer rounded-full text-sm sm:text-base px-3 py-1 sm:px-5 sm:py-2 flex gap-x-2 items-center"><AiTwotoneDelete /> <span>Remove</span></button>
                </div>

            </div>

        </div>
    );
}

export default Wishlistcard;