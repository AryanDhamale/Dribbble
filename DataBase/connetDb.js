"use server";
import mongoose from "mongoose";

const connetDb=async()=>{
  try {
   const con = await mongoose.connect('mongodb://127.0.0.1:27017/Dribbble');
   return con;
  }catch(err){
    console.log({msg:"failed to connet Db,bt this error",err});
    process.exit(1);
  }
}

export default connetDb;