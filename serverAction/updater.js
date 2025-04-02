"use server";
import Listing from "@/models/Listing";
import connetDb from "@/lib/connetDb";

export const updateAll = async()=>{
   try {
      let db = await connetDb();
      let random= Math.floor(Math.random()*10)+1;
      let res=await Listing.updateMany({totalPerson:{$exists:false}},{$set : {totalPerson : random}});
      console.log('res->',res);
      return {success:true,msg:"updation has done!"};
   }catch(er){
     return {success:false,msg:"error occured!"};
   }
}