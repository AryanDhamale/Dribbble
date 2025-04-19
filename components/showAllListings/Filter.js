"use client";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function Filter({price,setPrice}) {
    const handlePriceonchage=(e)=>{
        setPrice(e.target.value);
    }
    return (
        <div className="border-b border-slate-200 drop-shadow-md bg-white z-[1] sticky top-0 w-full h-15 flex items-center justify-start px-10">
            <FormControl className='w-30 bg-blue-100' size='small' >
                <InputLabel id="demo-simple-select-label">By Price</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={price}
                    label="By Price"
                    onChange={handlePriceonchage}
                >
                    <MenuItem value="default"><em>None</em></MenuItem>
                    <MenuItem value={"high"}>High to low</MenuItem>
                    <MenuItem value={"low"}>Low to High</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}

export default Filter;