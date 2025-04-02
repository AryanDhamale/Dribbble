"use server";
import connetDb from "@/lib/connetDb";
import Listing from "@/models/Listing";

export const readCount= async(id)=>{
    try{
      if(!id) throw new Error("id required");
      await connetDb();
      let res = await Listing.findById(id);
      return {success:true,count : res.totalPerson};
    }catch(err){
       return {success:false,err};
    }
}