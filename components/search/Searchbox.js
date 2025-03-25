"use client";
import { CiSearch } from "react-icons/ci";
import {useState,useEffect} from "react";
import { searchOptions } from "@/serverAction/searchAction";
import Link from "next/link";

function Searchbox() {
    const [query,setQuery]=useState('');
    const [data,setData]=useState([]);
    const [visible,setvisible]=useState(false);

    const handleOnchage=(e)=>{
      setQuery(()=>e.target.value);
      setvisible(()=>true);
    }

    useEffect(()=>{
      async function fetchData(){
        let responce = await searchOptions();
        setData(responce);
        return;
      }
      fetchData();
    },[]);
    return (
        <div className="mt-4">
            <div className="w-[50%] mx-auto relative text-black">
                <CiSearch className="text-3xl z-[1] font-medium absolute left-3 top-1/2 -transform -translate-y-1/2 cursor-pointer" />
                <input onBlur={()=>setvisible(false)} onChange={handleOnchage} value={query} className="w-full rounded-full ps-14 py-4 bg-white drop-shadow-lg outline-0" type="text" placeholder="search your Destination" />
                {/* suggesitons */}
                {visible && <div className={`absolute mt-2 h-40 overflow-auto w-full drop-shadow-lg rounded-sm z-[1000]`}>
                    <ul className="py-2 px-2">
                        {
                          data.filter((ele,idx)=>ele.title.toLowerCase().includes(query)).map((ele,idx)=><Link onMouseDown={(e) => e.preventDefault()} key={idx} href={`/package/${ele._id}`}><li className="py-2 px-2 text-sm font-medium hover:bg-sky-100 cursor-pointer bg-white">{ele.title}</li></Link>)
                        }
                    </ul>
                </div>}
            </div>
        </div>
    );
}

export default Searchbox;