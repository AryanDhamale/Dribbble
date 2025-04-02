import {models,model,Schema} from "mongoose";
import Listing from "./Listing";

const userSchema=new Schema({
    name : {
        type : String,
        required:true ,
    },
    email :  {
        type : String,
        required:true ,
    },
    mobileNo :  {
        type : String,
    },
    profilePic :  {
        type : String, 
    },
    password :{
        type : String ,
        default : ''
    },
    email_verified : {
        type : Boolean , 
        default : false, 
    },
    mobile_verified : {
        type : Boolean , 
        default : false, 
    },
    gender : {
        type: String,
        enum : ['male','female','other']
    },
    wishlist : [{type:Schema.Types.ObjectId,ref:"Listing"}],
    booking : [{type:Schema.Types.ObjectId,ref:"Booking"}]
    
});


export default models.User || model("User",userSchema);