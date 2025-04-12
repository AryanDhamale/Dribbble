"use server";
import connetDb from "@/lib/connetDb";
import User from "@/models/User";
import Booking from "@/models/Booking";

function filterOutAll(arr) {
  if (arr.length < 0) return [];
  return JSON.parse(JSON.stringify(arr));
}


export const findUserWishlist = async (id) => {
  try {
    if (!id) throw new Error("id required");
    await connetDb();
    let user = await User.findById(id).populate('wishlist');

    return {
      success: true,
      arr: filterOutAll(user.wishlist)
    };
  } catch (err) {
    return { success: false, err };
  }
}


export const findAllbooking = async (id) => {
  try {
    if (!id) throw new Error("id required");
    await connetDb();
    let user = await User.findById(id).populate('booking');
    return {
      success: true,
      arr: filterOutAll(user.booking)
    };
  } catch (err) {
    return { success: false, err };
  }
}


// export const temp=async(userID,packageID)=>{
//   try {
//     if(!userID || !packageID){throw new Error("not found userid or packaegid")};
//     await connetDb();
//     const user = await User.findByIdAndUpdate(userID,
//       {$pull : {booking : packageID}} , 
//       {new : true}
//     );
//     return {success : true , message : "done!"};
//   }catch(err){
//       return {success : false , err};
//   }
// }

export const findUser = async (id) => {
  try {
    if (!id) throw new Error("id required");
    await connetDb();
    let user = await User.findById(id);
    return { success: true, user: user.toObject({ flattenObjectIds: true }) }
  } catch (err) {
    return { success: false, err };
  }
}


export const upDateExitinguser=async(id,data)=>{
  try {
    if(!id || !data.state) {
      throw new Error("id and data is required !");
    }
    let db = await connetDb();
    let res=await User.findByIdAndUpdate(id,{...data,mobile_verified:true},{new:true});
    return {success:true,msg:"account has updated!"};
  }catch(err){
   return {success:false,msg:err.message};
  }
}