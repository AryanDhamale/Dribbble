"use client";
import Link from "next/link";
import Inclusion from "./Listinginfocom/inclusion";
import Exclusion from "./Listinginfocom/exclusion";
import { useState } from "react";

function Listinginfo() {
    const [clusion, setclusion] = useState("inclusion");
    const commonBtn = "cursor-pointer py-2 rounded-md ";
    return (
        <div className="w-full">
            
                <div className="px-14 py-3 flex items-center gap-x-4 font-medium text-base sticky top-0 border-1 border-slate-200 bg-white drop-shadow-lg z-[1]">
                    <Link href={"/package/123"}>itineary</Link>
                    <Link href={"#information"}>tour informaiton</Link>
                    <Link href={"#policy"}>Policy & Payment Terms</Link>
                    <Link href={"/package/123"}>Map</Link>
                </div>

                <div className="w-[90%] mx-auto">

                <div className="w-[75%] flex flex-col gap-y-6 py-6" id="information">

                    <div className="flex flex-col gap-y-4">
                        <h2 className="text-lg font-medium mt-4">Tour information</h2>
                        <div className="font-medium px-2 py-2 grid grid-cols-2 gap-x-3 w-[50%]">
                            <button onClick={() => setclusion("inclusion")} className={clusion == "inclusion" ? commonBtn + "text-white bg-[#24b985]" : commonBtn}>Our inclusion</button>
                            <button onClick={() => setclusion("exclusion")} className={clusion == "exclusion" ? commonBtn + "text-white bg-[#24b985]" : commonBtn}>Our Exclusion</button>
                        </div>
                        <div>
                            {clusion === "inclusion" && <Inclusion />}
                            {clusion === "exclusion" && <Exclusion />}
                        </div>
                    </div>

                    <div className="flex flex-col gap-y-4" id="policy">
                      <h2 className="text-lg font-medium mt-4">Policy & Payment Terms</h2>
                      <div className="text-sm font-medium opacity-70 border border-slate-300 rounded-md px-4 py-4 drop-shadow-lg">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis eius iusto perferendis est provident nisi expedita vel ullam dolor doloribus aliquam assumenda aspernatur cum doloremque sint, odio, necessitatibus corrupti ad sed odit eos asperiores? Suscipit hic molestias sequi tenetur rem eos. Optio ipsa atque aliquid ducimus quos facilis illo voluptate.</p>
                      </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Listinginfo;