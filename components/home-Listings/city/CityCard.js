import Image from "next/image";
import Link from "next/link";

function CityCard({data})
{
    return (
        <Link  href={`/city/${data.location}`}>
        <div className="border border-slate-200 drop-shadow-lg rounded-sm w-45 py-1">
            <div>
                <Image width={100} height={100} className="w-[94%] h-30 object-cover block mx-auto rounded-sm" src={data.image} alt="this is an image" />
            </div>
            <div className="px-2.5 flex flex-col gap-y-0.5 mt-0.5">
                <p className="text-xs font-normal opacity-45">Tour Packages From</p>
                <p className="font-medium text-[#24b985]">{data.location}</p>
                <p className="text-xs font-medium">total available tour : {data.totalTour}</p>
                <p className="text-xs font-medium opacity-50">Start from <span>&#8377; {(data.avgCost).toLocaleString('en-IN')}</span> </p>
            </div>
        </div>
        </Link>
    );
}

export default CityCard;