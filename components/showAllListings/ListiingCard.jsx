import LikeandShare from "../CommonCop/LikeandShare";
import Button from "../CommonCop/Button";

function ListingCard()
{
    return (
        <div className="border border-slate-200 bg-white hover:drop-shadow-lg rounded-md size-[20rem] px-2 py-2 flex flex-col gap-y-2">
            <div className="flex gap-x-3">
                <div>
                    <img className="size-30 object-cover rounded-md" src="https://img.veenaworld.com/group-tours/india/kerala/klhlp/klhlp-bnn-KLHLP-2952023.jpg" alt="this is an image" />
                </div>
                <div className="flex flex-col gap-y-2">
                    <h2 className="font-semibold text-xl">Hilighits of kerla</h2>
                    <p>Total <span className="underline underline-offset-1 text-blue-900">7 Reviews</span> </p>
                    <p>{7}-Day {4}-cities</p>
                </div>
            </div>

            <div className="border-t border-slate-200 flex flex-col gap-y-2.5 py-2">
               <p className="text-lg">Total price  : <span className="font-bold">&#8377;32,000</span></p>
               <p className="text-xs font-medium opacity-50">the give above will apply per person</p>
               <div>
               <LikeandShare/>
               </div>
               <Button text={"see more"} round="sm" link="/" width={"80%"}/>
            </div>
        </div>
    );
}

export default ListingCard;