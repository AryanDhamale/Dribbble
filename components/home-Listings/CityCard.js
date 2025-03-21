import Image from "next/image";

function CityCard()
{
    return (
        <div className="border border-slate-200 drop-shadow-lg rounded-sm w-45 py-1">
            <div>
                <Image width={100} height={100} className="w-[94%] block mx-auto rounded-sm" src="https://gallery.veenaworld.com/vw-assets/tour-packages-from-mumbai/Mumbai_1697887833803.jpg" alt="this is an image" />
            </div>
            <div className="px-2.5 flex flex-col gap-y-0.5 mt-0.5">
                <p className="text-xs font-normal opacity-45">Tour Packages From</p>
                <p className="font-medium text-[#24b985]">Mumbai</p>
                <p className="text-xs font-medium">Date : 08-03-25</p>
                <p className="text-xs font-medium opacity-50">Start from <span>30,000rs</span> </p>
            </div>
        </div>
    );
}

export default CityCard;