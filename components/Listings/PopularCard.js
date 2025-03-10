import { IoIosStar } from "react-icons/io";
import { CiClock2 } from "react-icons/ci";
import Image from "next/image";

function PopularCard()
{
    return (
        <div className="mx-auto md:mx-0 drop-shadow-lg border border-gray-200 w-2xs rounded-md">
            <div className="h-52 object-cover p-1">
                <Image width={100} height={100} className="w-full h-auto rounded-md" src="https://www.bookmytour.ae/public/package_gallery/1618384771-burjkhalifa-tickets.jpg" alt="this is an image" />
            </div>
            <div className="px-3 py-3 flex flex-col gap-y-2">
                <p className="text-xs font-basic opacity-50">Burj Khalifa Tickets</p>
                <p className="text-base font-medium text-[#24b985]">At the top,Burj Khalifa</p>
                <div className="flex justify-start items-center">
                 <IoIosStar className="text-orange-500"/>
                 <span className="ps-0.5"> 3(12 review)</span>
                </div>
                {/* <div className="border border-slate-200"></div> */}
                <hr />
                <div className="flex justify-between items-center h-20 text-base opacity-60 ">
                    <p >Form 40,000rs</p>
                    <div className="flex justify-center items-center ">
                     <CiClock2 className="me-1.5"/>
                     <p>1days - 9hr</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PopularCard;