import { GoDotFill } from "react-icons/go";

function Exclusion()
{
    return (
        <div className="border border-slate-300 rounded-md drop-shadow-lg px-4 py-4">
            <ul className="text-sm font-normal flex flex-col gap-y-3">
                <li className="flex items-center gap-x-2"><GoDotFill className="text-red-600 block my-auto"/> <span className="opacity-70">Government of India Goods & Services Tax (GST) of 5%</span></li>
                <li className="flex items-center gap-x-2"><GoDotFill className="text-red-600 block my-auto"/> <span className="opacity-70">Any increase in airfare, airport tax, fuel surcharge etc.</span></li>
                <li className="flex items-center gap-x-2"><GoDotFill className="text-red-600 block my-auto"/> <span className="opacity-70">Any new tax/es levied by the central or state government</span></li>
                <li className="flex items-center gap-x-2"><GoDotFill className="text-red-600 block my-auto"/> <span className="opacity-70">Cost of Insurance</span></li>
                <li className="flex items-center gap-x-2"><GoDotFill className="text-red-600 block my-auto"/> <span className="opacity-70">Any upgradation in airline class, vehicle, hotel or hotel room category</span></li>
                <li className="flex items-center gap-x-2"><GoDotFill className="text-red-600 block my-auto"/> <span className="opacity-70">Cost of Pre/Post tour hotel accommodation</span></li>
                <li className="flex items-center gap-x-2"><GoDotFill className="text-red-600 block my-auto"/> <span className="opacity-70">Any extra expense incurred due to any forced majeure situation before the tour departure or during the tour, such as change in airline schedule,etc.</span></li>
                <li className="flex items-center gap-x-2"><GoDotFill className="text-red-600 block my-auto"/> <span className="opacity-70">Any extra cost incurred due to illness, accident, hospitalization or any personal emergency</span></li>
                <li className="flex items-center gap-x-2"><GoDotFill className="text-red-600 block my-auto"/> <span className="opacity-70">Cost of any optional activity or service</span></li>
                <li className="flex items-center gap-x-2"><GoDotFill className="text-red-600 block my-auto"/> <span className="opacity-70">Anything specifically not mentioned in the ‘tour price includes’ column</span></li>
            </ul>
        </div>
    );
}

export default Exclusion;