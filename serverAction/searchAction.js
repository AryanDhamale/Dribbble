"use server";
import connetDb from "@/DataBase/connetDb";
import Listing from "@/models/Listing";

export const searchOptions=async()=>{
    try {
      const db = await connetDb();
      let responce = await Listing.find().lean();
      return JSON.parse(JSON.stringify(responce));
      
    }catch(err){
        console.log({msg:"search options error",err});
        return ;
    }
}