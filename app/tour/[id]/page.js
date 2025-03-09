import { SlCalender } from "react-icons/sl";
import { CiLocationOn } from "react-icons/ci";
function Tour({params})
{
    
    return (
        <div className="border border-red-500">
            <div className="w-[70%] border border-green-500">
            <div className="w-[80%]">
                <img className="rounded-sm w-full" src="https://img.veenaworld.com/group-tours/india/jammu-and-kashmir/jksp/jksp-bnn-jksp-452024.jpg" alt="this is an image" />
            </div>
            <h3 className="font-medium text-xl">Delight of Kashmir</h3>
            <p className="flex items-center gap-x-2"> <span className="flex items-center gap-x-2"><SlCalender className="font-semibold"/>6 Day</span><span className="flex items-center gap-x-2"><CiLocationOn/>4 City</span></p>
            </div>
            <div className="border border-yellow-500"></div>
        </div>
    );
}


export default Tour;
