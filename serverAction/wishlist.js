"use server";
import connetDb from "@/lib/connetDb";
import User from "@/models/User";

export const addTowishlist=async(userID,packageID)=>{
    try {
      if(!userID || !packageID){throw new Error("not found userid or packaegid")};
      await connetDb();
      const user = await User.findById(userID);
    
      user.wishlist.push(packageID);
      await user.save();
      return {success : true , message : "done!"};
    }catch(err){
        return {success : false , err}
    }
}

export const removeWishlist=async(userID,packageID)=>{
    try {
      if(!userID || !packageID){throw new Error("not found userid or packaegid")};
      await connetDb();
      const user = await User.findByIdAndUpdate(userID,
        {$pull : {wishlist : packageID}} , 
        {new : true}
      );
      return {success : true , message : "done!"};
    }catch(err){
        return {success : false , err};
    }
}


export const checkWishlist=async(userID,packageID)=>{
    try {
      if(!userID || !packageID){throw new Error("not found userid or packaegid")};
      await connetDb();
      const user=await User.findById(userID);
      if(user.wishlist.includes(packageID)) {
        return {success : true , message : "found!"};
      }else {
        return {success : false , message : "not-found!"};
      }
    }catch(err){
      return {success: false , err}   
    }
}