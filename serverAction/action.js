"use server";
import connetDb from "@/DataBase/connetDb";
import Listing from "@/models/Listing";

function filterOut(arr) {
    let newarr = arr.map((ele, idx) => ({
        ...ele,
        _id: ele._id.toString(),
        cities: [...ele.cities],
        highlight: [...ele.highlight],
    }))
    return newarr;
}

export const getallListing = async (n) => {
    await connetDb();
    let arroflist;
    if (n) {
        arroflist = await Listing.find().lean().limit(n);
        return filterOut(arroflist);
    }
    else {
        arroflist = await Listing.find().lean();
        return filterOut(arroflist);
    }
}

export const getoneListing = async (id) => {
    await connetDb();
    try {
        const list = await Listing.findById(id);
        return list.toObject({ flattenObjectIds: true });
    } catch (err) {
       console.log({line:"34",err});
       return "";
    }
}