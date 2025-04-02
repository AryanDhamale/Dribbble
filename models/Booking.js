import { Schema, models, model } from "mongoose";

const bookingSchma=new Schema({
    oid : {type:String}, 
    location : {type:String,required:true} ,
    image : {type:String,required : true },
    cost : {type:Number,required:true},
    totalPerson : {type : Number,required : true} ,
    bookingDate : {type : Date , required : true} ,
    paymentStatus : {type:String , enum:['pending','completed'],default : "pending"}
},{timestamps:true});

export default models.Booking || model('Booking',bookingSchma);