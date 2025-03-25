import { IoIosStar } from "react-icons/io";
import { CiClock2 } from "react-icons/ci";
import Image from "next/image";
import Link from "next/link";

function PopularCard({data})
{
    return (
        <Link href={`/package/${data._id}`}>
        <div className="cursor-pointer mx-auto md:mx-0 drop-shadow-lg border border-gray-200 w-2xs rounded-md">
            <div className="h-52 object-cover p-1">
                <Image unoptimized width={100} height={100} className="w-full h-full rounded-md" src={data.image} alt="this is an image" />
            </div>
            <div className="px-3 py-3 flex flex-col gap-y-2">
                <p className="text-xs font-basic opacity-50">{data.location}</p>
                <p className="text-base font-medium w-[16rem] truncate text-[#872BFF]">{data.title}</p>
                <div className="flex justify-start items-center">
                 <IoIosStar className="text-orange-500"/>
                 <span className="ps-0.5"> {data.cities.length}({data.totalDay} review)</span>
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