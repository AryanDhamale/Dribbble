"use client";
import Image from "next/image";
import { AiOutlineSlack } from "react-icons/ai";
import LikeandShare from "../CommonCop/LikeandShare";
import Button from "../CommonCop/Button";
import { toast } from "sonner";


function Listinghead({ data }) {
    return (
        <>
            <div className="mx-auto my-4 flex  flex-wrap w-full md:w-[90%]">

                <div className="w-full md:w-[68%] flex flex-col px-6 gap-y-3 py-4">
                    <Image width={100} height={100} unoptimized className="w-full h-auto rounded-md block md:h-[30rem]" src={data.image} alt="this is an image" />
                    <h1 className="text-xl font-bold">{data.title}</h1>
                    <div className="font-medium text-sm flex flex-col gap-y-3">
                        <p>Total <span className="underline underline-offset-1 text-blue-900">7 Reviews</span> </p>
                        <p>{data.totalDay}-Day {data.cities.length}-cities</p>
                        <p className="opacity-50 font-normal">
                            {
                                data.cities.map((ele, idx) => <span key={idx}>{ele} --- </span>)
                            }
                        </p>
                        <div className="mt-2">
                            <span className={`${data.totalPerson>2 ? 'bg-green-400' : 'bg-red-400'} rounded-full text-white font-normal px-3 py-2`}>Only {data.totalPerson} left hurry up</span>
                        </div>
                    </div>

                    <div className="border-t border-slate-300 mt-10 py-6">
                        <h2 className="font-medium text-lg mb-2">Tour Highlights</h2>
                        <ul className="font-normal text-sm">
                            {data.highlight.map((ele, idx) =>
                                <li key={idx} className="flex items-center gap-x-1"><AiOutlineSlack className="text-xs" />{ele}</li>
                            )}
                        </ul>
                        <p className="text-sm mt-2"><span className="font-medium">Note:</span><span className="opacity-50"> The highlights and sightseeing`&apos;s may change depending on the departure date you choose</span></p>
                    </div>
                </div>


                <div className="flex-1 flex flex-col gap-y-4 px-3 py-4">
                    <div className="bg-[#f5f8ff] text-sm font-medium rounded-md px-1.5 py-3 border border-slate-300 drop-shadow-lg">For anyFurther more query please contact <span className="text-blue-800"> +91 8446162375</span> </div>
                    
                    {/* call us */}
                    <div className="border border-slate-300 rounded-md drop-shadow-lg py-4">
                        <div className="font-medium ps-4 py-2">
                            <p><span className="opacity-50 text-xs">Start From :</span> <span className="font-medium text-sm">&#8377; {(data.cost).toLocaleString('en-IN')}</span></p>
                            <p className="opacity-50 text-xs">per person for all</p>
                        </div>
                        <Button text={"Check booking"} width={"90%"} link={`#booking`} round={"full"} />
                        <LikeandShare id={data._id} />
                    </div>

                    {/* for connect-us */}
                    <div className="border border-slate-300 flex flex-col gap-y-3 py-6 rounded-md drop-shadow-lg">
                        <h2 className="text-sm opacity-60 ps-4">Do you want connect with us ? </h2>
                        <input className="text-sm border border-gray-200 outline-0 w-[80%] px-2 py-2 rounded-sm block mx-auto" type="text" placeholder="Enter your Full name*" />
                        <input className="text-sm border border-gray-200 outline-0 w-[80%] px-2 py-2 rounded-sm block mx-auto" type="number" placeholder="mobile no. +91 " />
                        <span onClick={()=>toast("B767MAX-flap 15deg , rotated-V1 faild to capture > RETARD")}><Button text={"Connect"} width={"90%"} round={"md"} link="no-" /></span>
                    </div>

                    {/* Reviews con  */}
                    <div className="text-red-500 border h-50 border-slate-300 rounded-md drop-shadow-lg flex flex-col gap-y-4 items-center justify-center">
                       <span>NO REVIEW YET</span>
                       <span>Book now, so will the first reviewer</span>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Listinghead;