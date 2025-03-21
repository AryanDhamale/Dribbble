import Image from "next/image";
import { AiOutlineSlack } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import Loading from "../loader/loading";
import LikeandShare from "../CommonCop/LikeandShare";
import Button from "../CommonCop/Button";


function Listinghead({data}) {
    console.log(data);
    return (
        <>
        {!data.title && <Loading/>}
        {data.title && <div className="mx-auto my-4 flex w-[90%]">

            <div className="w-[70%] flex flex-col px-6 gap-y-3 py-4">
                <img className="w-[95%]  rounded-md block h-[30rem]" src={data.image} alt="this is an image" />
                <h1 className="text-xl font-bold">{data.title}</h1>
                <div className="font-medium text-sm flex flex-col gap-y-3">
                    <p>Total <span className="underline underline-offset-1 text-blue-900">7 Reviews</span> </p>
                    <p>{data.totalDay}-Day {data.cities.length}-cities</p>
                    <p className="opacity-50 font-normal">
                        {
                            data.cities.map((ele,idx)=><span key={idx}>{ele} --- </span>)
                        }
                    </p>
                </div>

                <div className="border-t border-slate-300 mt-10 py-6">
                    <h2 className="font-medium text-lg mb-2">Tour Highlights</h2>
                    <ul className="font-normal text-sm">
                        {data.highlight.map((ele,idx)=>
                        <li key={idx} className="flex items-center gap-x-1"><AiOutlineSlack className="text-xs" />{ele}</li>
                        )}
                    </ul>
                    <p className="text-sm mt-2"><span className="font-medium">Note:</span><span className="opacity-50"> The highlights and sightseeing's may change depending on the departure date you choose</span></p>
                </div>
            </div>


            <div className="flex-1 flex flex-col gap-y-4 px-3 py-4">
                <div className="bg-[#f5f8ff] text-sm font-medium rounded-md px-1.5 py-3 border border-slate-300 drop-shadow-lg">For anyFurther more query please contact <span className="text-blue-800"> +91 8446162375</span> </div>

                <div className="border border-slate-300 rounded-md drop-shadow-lg py-4">
                    <div className="font-medium ps-4 py-2">
                        <p><span className="opacity-50 text-xs">Start From :</span> <span className="font-medium text-sm">&#8377;{data.cost}</span></p>
                        <p className="opacity-50 text-xs">per person for all</p>
                    </div>
                    {/* <button className="bg-[#24b985] active:bg-[#24b999cc] font-medium cursor-pointer drop-shadow-lg text-white w-[90%] rounded-full block mx-auto my-2.5 py-3">Check booking</button> */}
                    <Button text={"Check booking"} width={"90%"} link="/" round={"full"}/>

                    {/* <div className="flex ps-4  gap-x-3">
                        <div className="flex items-center gap-x-1.5 cursor-pointer"><FaHeart className="text-red-600" /><span>Wishlist</span></div>
                        <div className="flex items-center gap-x-1.5 cursor-pointer"><CiShare2 /><span>Share</span></div>
                    </div> */}
                  <LikeandShare/>

                </div>

                <div className="border border-slate-300 flex flex-col gap-y-3 py-6 rounded-md drop-shadow-lg">
                    <h2 className="text-sm opacity-60 ps-4">Do you want connet with us ? </h2>
                    <input className="text-sm border border-gray-200 outline-0 w-[80%] px-2 py-2 rounded-sm block mx-auto" type="text" placeholder="Enter your Full name*" />
                    <input className="text-sm border border-gray-200 outline-0 w-[80%] px-2 py-2 rounded-sm block mx-auto" type="number" placeholder="mobile no. +91 " />
                    {/* <button className="bg-[#24b985] active:bg-[#24b999cc] font-medium cursor-pointer drop-shadow-lg text-white w-[90%] rounded-md block mx-auto my-2.5 py-3">Connect</button> */}
                    <Button text={"Connect"} width={"90%"} round={"md"} link="/"/>
                </div>

            </div>
        </div>}
        </>
    );
}

export default Listinghead;