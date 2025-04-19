"use server";
import connetDb from "@/lib/connetDb";
import User from "@/models/User";
import Adminchecklist from "@/models/Adminchecklist";

export const getAlluser = async()=>{
    try {
       const db = await connetDb();
       let allUsers = await User.find();
       return {success:true , arr : JSON.parse(JSON.stringify(allUsers))};
    }catch(err){
        return {success:false,msg:err.message};
    }
}

export const addAdmintoChecklist=async(userID)=>{
    try {
        const db = await connetDb();
        let res = await Adminchecklist.findOne({role:'default'});
        if(!res) {
           let newRes= await Adminchecklist.create();
           newRes.admin.push(userID);
           await newRes.save();
        }else {
            res.admin.push(userID);
            await res.save();
        }
    }catch(err){
        return {success:false,msg:err.message}; 
    }
}