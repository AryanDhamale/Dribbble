import PopularCard from "./PopularCard";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";

function Popular({responce}) {
    return (
        <div className="px-4 md:px-20 flex flex-col gap-y-14 py-10">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-xl md:text-3xl font-normal text-[#f411cf] tracking-widest">Most Popular Tour</h2>
                </div>
                <div>
                    <Link href={"/show-all"} className="text-base flex justify-center items-center gap-x-2 text-gray-700 hover:underline hover:underline-offset-4"> <span className="text-sm">View more</span> <FaLongArrowAltRight /></Link>
                </div>
            </div>

            <div className= "flex justify-center items-center flex-wrap gap-x-10 gap-y-8">
                {
                 responce.map((ele,idx)=><PopularCard key={idx} data={ele}/>)
                }
            </div>
        </div>
    );
}

export default Popular;