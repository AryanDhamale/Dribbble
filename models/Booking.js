import { Schema, models, model } from "mongoose";

const bookingSchma=new Schema({
    oid : {type:String}, 
    location : {type:String,required:true} ,
    image : {type:String,required : true },
    cost : {type:Number,required:true},
    totalPerson : {type : Number,required : true} ,
    bookingDate : {type : Date , required : true} ,
    paymentStatus : {type:String , enum:['pending','completed'],default : "pending"},
    returned : {type:Boolean , default:false},
    tourStatus : {type:String,enum:['ongoing','missed','completed'],default:'ongoing'}
},{timestamps:true});

export default models.Booking || model('Booking',bookingSchma);