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
    await connetDb();
    let arroflist;
    if (n) {
        arroflist = filterOutAll(await Listing.find().lean().limit(n));
    }
    else {
        arroflist = filterOutAll(await Listing.find().lean());
    }
    return arroflist;
}

export const getoneListing = async (id) => {
    await connetDb();
    try {
        const list = await Listing.findById(id);
        return list.toObject({ flattenObjectIds: true });
    } catch (err) {
       //console.log({line:"34"});
       return "";
    }
}

export const getlistingbyCondition = async(condition)=>{
  if(!condition) return [];
  await connetDb();
  return filterOutAll(await Listing.find(condition));
}


// CITIES FUNCTION // 

export const getallCities=async(n)=>{
  let cityarr;
  await connetDb();
  if(n)
  {
    cityarr=filterOutAll(await City.find().lean().limit(n));
  }else {
    cityarr=filterOutAll(await City.find().lean());
  }
  return cityarr;
}

export const getcitybyCondition= async(condition)=>{
  if(!condition) return [];
  await connetDb();
  return filterOutAll(await City.find(condition));
}