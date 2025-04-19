"use client";

// local dependancies // 
import PackageCard from "@/components/showAllListings/PackageCard";
import { getallListing } from "@/serverAction/action";
import { useEffect, useState } from "react";
import Loading from "@/components/loader/CustomeLoading";
import Message from "@/components/CommonCop/Message";

// meterial ui depenedancies /// 
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

//shadcn dependacies // 
import { Input } from "@/components/ui/input"



function All() {
  const [Listings, setListings] = useState([]);
  const [loader, setLoader] = useState(true);
  const [filters,setFilters]=useState({name:'',price:'default'});

  const filterOut = (wanttedFilter) => {
    if(!Listings.length) {
      return [];
    }
    let arr=[...Listings];
    if(wanttedFilter.name) {
      arr = arr.filter((ele,idx)=> (ele.title.toLowerCase()).includes(wanttedFilter.name.toLowerCase()));
    }

    switch(wanttedFilter.price) {
      case "high" : 
      return arr.sort((a,b)=>b.cost-a.cost);

      case "low" : 
      return arr.sort((a,b)=>a.cost-b.cost);

      default :
      return arr;
    }
  }

  async function fetchData() {
    try {
      let res = await getallListing();
      if (res.success) {
        setListings(res.arr);
      }
    } catch (err) {
      console.log("Error", err);
      return;
    }
    setLoader(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const sortTedarr = filterOut(filters);

  if (loader) {
    return <Loading />;
  }

  return (
    <div className="mt-20 pb-8 w-full mx-auto">
      <div className="border-b border-slate-200 drop-shadow-md bg-white z-[1] sticky top-0 w-full h-15 flex items-center justify-start gap-x-4 px-10">
      <FormControl className='w-30 bg-blue-100' size='small' >
                <InputLabel id="demo-simple-select-label">By Price</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={filters.price}
                    label="By Price"
                    onChange={(e)=>setFilters((oldVal)=>({...oldVal,price:e.target.value}))}
                >
                    <MenuItem value="default"><em>None</em></MenuItem>
                    <MenuItem value={"high"}>High to low</MenuItem>
                    <MenuItem value={"low"}>Low to High</MenuItem>
                </Select>
            </FormControl>
            <Input onChange={(e)=>setFilters((oldVal)=>({...oldVal,name:e.target.value}))} className='bg-blue-100 w-70 py-5' type="text" placeholder="search by name" />
      </div>

      <div className="w-full md:w-[90%] mx-auto px-6 py-6 flex justify-start items-center flex-wrap gap-y-6 gap-x-12">
        {
          sortTedarr.length ? sortTedarr.map((ele, idx) => <PackageCard key={idx} data={ele} />) : <Message />
        }
      </div>
    </div>
  );
}

export default All;