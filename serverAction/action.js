"use server";
import connetDb from "@/lib/connetDb";
import Listing from "@/models/Listing";
import City from "@/models/City";

function filterOutAll(arr) {
    if(arr.length<0) return [];
    return JSON.parse(JSON.stringify(arr)); 
}

// LISTING FUNCTIONS // 

export const getallListing = async (n) => {
    try {
     const db=await connetDb();
     let arr = n>0 ? await Listing.find({}).lean().limit(n) : await Listing.find({}).lean();
     return {success:true , arr : filterOutAll(arr)} ; 

    }catch(err){
      return {success:false,msg:"Error in fetching all lisitings"};
    }
}

export const getoneListing = async (id) => {
    try {
        const db = await connetDb();
        const list = await Listing.findById(id);
        return {success:true , Package:list.toObject({ flattenObjectIds: true })}
    } catch (err) {
      return {success:false,err};
    }
}

export const getlistingbyCondition = async(condition)=>{
  try {
    if(!condition) return [];
    await connetDb();
    return {success:true , Package : filterOutAll(await Listing.find(condition))}
  }catch(err){
    return {success:false, err};
  }
}


// CITIES FUNCTION // 

export const getallCities=async(n)=>{
  try {
    const db=await connetDb();
    let arr = n>0 ? await City.find().lean().limit(n) : await City.find().lean();
    return {success:true, arr : filterOutAll(arr)};
  }catch(err){
    return {success:false,err};
  }
}

export const getcitybyCondition= async(condition)=>{
  try {
    if(!condition) return [];
  await connetDb();
  return {success:true , City : filterOutAll(await City.find(condition))};
  }catch(err){
    return {success:false,err};
  }
}