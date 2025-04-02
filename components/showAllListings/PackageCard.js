import LikeandShare from "../CommonCop/LikeandShare";
import Button from "../CommonCop/Button";
import Image from "next/image";

function PackageCard({data})
{
    return (
        <div className="border border-slate-200 bg-white hover:drop-shadow-lg rounded-md h-[20rem] w-[25rem]  px-2 py-2 flex flex-col gap-y-2">
            <div className="flex gap-x-3">
                <div>
                    <Image width={100} height={100} className="size-30 object-cover rounded-md" src={data.image} alt="this is an image" />
                </div>
                <div className="flex flex-col gap-y-2">
                    <h2 className="font-semibold text-lg truncate w-[15rem]">{data.title}</h2>
                    <p>Total <span className="underline underline-offset-1 text-blue-900">7 Reviews</span> </p>
                    <p>{data.totalDay}-Day {data.cities.length}-cities</p>
                </div>
            </div>

            <div className="border-t border-slate-200 flex flex-col gap-y-2.5 py-2">
               <p className="text-lg">Total price  : <span className="font-bold">&#8377; {(data.cost).toLocaleString('en-IN')}</span></p>
               <p className="text-xs font-medium opacity-50">the give above will apply per person</p>
               <div>
               <LikeandShare id={data._id}/>
               </div>
               <Button text={"see more"} round="sm" link={`/package/${data._id}`} width={"80%"}/>
            </div>
        </div>
    );
}

export default PackageCard;