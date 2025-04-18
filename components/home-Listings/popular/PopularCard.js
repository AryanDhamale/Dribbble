import { CiClock2 } from "react-icons/ci";
import Image from "next/image";
import Link from "next/link";
import { BiBookmarkHeart } from "react-icons/bi";
import { BiRadioCircle } from "react-icons/bi";

function PopularCard({data})
{
    return (
        <Link href={`/package/${data._id}`}>
        <div className="cursor-pointer mx-auto md:mx-0 drop-shadow-lg bg-white  w-2xs rounded-3xl">
            <div className="h-52 object-cover">
                <Image unoptimized width={100} height={100} className="w-full h-full rounded-t-3xl" src={data.image} alt="this is an image" />
            </div>
            <div className="px-3 py-3 flex flex-col gap-y-2">
                <p className="text-xs font-basic opacity-50">{data.location}</p>
                <p className="text-base font-medium w-[16rem] truncate text-[#872BFF]">{data.title}</p>
                <div className="flex justify-start items-center gap-x-1">
                 {/* <IoIosStar className="text-orange-500"/> */}
                 {/* <span className="ps-0.5"> {data.cities.length}({data.totalDay} review)</span> */}
                 {/* <span className={`px-3 py-0.5 text-xs font-medium rounded-sm text-black ${data.totalPerson > 4 ? "bg-green-400" : "bg-red-400"} `}>{data.totalPerson} Left</span> */}
                <span className={`font-medium ${data.totalPerson>3 ? "text-green-400" : "text-red-400" }`}>{data.totalPerson} left</span>
                <BiBookmarkHeart className="text-orange-500 text-xl drop-shadow-lg" />
                
                </div>
                {/* <div className="border border-slate-200"></div> */}
                <hr />
                <div className="flex justify-between items-center h-20 text-base opacity-60 ">
                    <p >Form &#8377; {(data.cost).toLocaleString("en-IN")}</p>
                    <div className="flex justify-center items-center ">
                     <CiClock2 className="me-1.5"/>
                     <p>{data.totalDay}days - {data.cities.length}cities</p>
                    </div>
                </div>
            </div>
        </div>
        </Link>
    );
}

export default PopularCard;