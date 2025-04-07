import { FaStar } from "react-icons/fa";


function ReviewCard({data})
{
    return (
        <div className="h-[15rem] my-4 mx-auto drop-shadow-lg bg-white text-black w-sm px-4 py-4 rounded-3xl">
           <div>
             <div className="flex gap-x-2"><span className="flex items-center gap-x-1"><FaStar className="text-yellow-500"/> {data.star}</span> <button className="border border-red-400 rounded-sm px-1.5 py-1 text-xs text-red-500">Family</button> </div>
             <p className="font-semibold pb-2 pt-2">{data.location}</p>
             <p className="text-sm pb-2 opacity-50">{data.msg}</p>
             {/* <p className="text-sm pb-2 text-blue-600 font-semibold underline underline-offset-2">Read more</p> */}
           </div>
           <div className="flex justify-between items-center">
            <div>
                <p className="font-semibold">{data.name}</p>
                <p className="opacity-50 text-xs">Travelled in {data.date}</p>
            </div>
            <div>
                <p className="text-blue-600 font-semibold leading-4">{data.name}<br /></p>
            </div>
           </div>
        </div>
    );
}

export default ReviewCard;