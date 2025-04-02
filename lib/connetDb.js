"use server";
import mongoose from "mongoose";

const connetDb=async()=>{
  const dbUrl = process.env.NODE_ENV=='development' ? process.env.LOCAL_DB_URL : process.env.ATLAS_DB_URL ;
  if (mongoose.connection.readyState >= 1) return;
  try {
   const con = await mongoose.connect(dbUrl);
   console.log('connected DB!');
   return con;
  }catch(err){
    console.log({msg:"failed to connet Db,bt this error",err});
    process.exit(1);
  }
}

export default connetDb;