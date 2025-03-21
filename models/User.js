import {models,model,Schema} from "mongoose";

const userSchema=new Schema({
    name : {
        type : String,
        required:true ,
    },
    email :  {
        type : String,
        required:true ,
    },
    dob :  {
        type : String,
        required:true ,
    },
    address :  {
        type : String,
    },
    mobileNo :  {
        type : String,
    },
    profilePic :  {
        type : String,
        required:true ,
    },
});


export default models.User || model("User",userSchema);