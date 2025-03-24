import { FaStar } from "react-icons/fa";


function ReviewCard()
{
    return (
        <div className="mx-auto border border-slate-200 hover:drop-shadow-lg bg-white text-black w-sm px-4 py-4 rounded-sm">
           <div>
             <div className="flex gap-x-2"><span className="flex items-center gap-x-1"><FaStar className="text-yellow-500"/> 5</span> <button className="border border-red-400 rounded-sm px-1.5 py-1 text-xs text-red-500">Family</button> </div>
             <p className="font-semibold pb-2 pt-2">Highlights of Kerala</p>
             <p className="text-sm pb-2 opacity-50">&quot;Everything was great start from booking to goodbye&quot; . Nimikesh and Nilesh were caring, knowledgeable and very cooperative. We have collec...</p>
             <p className="text-sm pb-2 text-blue-600 font-semibold underline underline-offset-2">Read more</p>
           </div>
           <div className="flex justify-between items-center">
            <div>
                <p className="font-semibold">Tejas Dhamale</p>
                <p className="opacity-50 text-xs">Travelled in Feb, 2025</p>
            </div>
            <div>
                <p className="text-blue-600 font-semibold leading-4">Tejas Dhamale, <br /> Ryan-next</p>
            </div>
           </div>
        </div>
    );
}

export default ReviewCard;