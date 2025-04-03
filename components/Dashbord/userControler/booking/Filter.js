"use client";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


function Filter() {
    const callme = (e)=>{
        console.log(e);
    }
    return (
        <div className="ms-4">
            <Select onValueChange={callme}>
                <SelectTrigger className="w-[180px] drop-shadow-lg">
                    <SelectValue placeholder="selection options" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="on">ongoing</SelectItem>
                    <SelectItem value="mis">missed</SelectItem>
                    <SelectItem value="pending">pending</SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
}

export default Filter