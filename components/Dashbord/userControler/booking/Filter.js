"use client";
// shadcn dependancies // 
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

// local dependancies // 


function Filter({controls}) {
    return (
        <div className="w-full bg-white drop-shadow-lg h-15 mb-3 flex items-center gap-x-3 ps-3">
            <Select onValueChange={(val)=>controls((oldVal)=>({...oldVal,status:val}))}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Tour Status" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">none</SelectItem>
                    <SelectItem value="ongoing">Ongoing</SelectItem>
                    <SelectItem value="missed">Missed</SelectItem>
                </SelectContent>
            </Select>

            <Select onValueChange={(val)=>controls((oldVal)=>({...oldVal,payment:val}))}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Payment Status" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">none</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                </SelectContent>
            </Select>

        </div>
    );
}

export default Filter;