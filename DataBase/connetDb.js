"use server";
import mongoose from "mongoose";

const connetDb=async()=>{
  try {
   const con = await mongoose.connect(process.env.ATLAS_DB_URL);
   return con;
  }catch(err){
    console.log({msg:"failed to connet Db,bt this error",err});
    process.exit(1);
  }
}

export default connetDb;