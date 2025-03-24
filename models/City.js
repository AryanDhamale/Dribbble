import { Schema, model , models } from "mongoose";

const citySchema=new Schema({
    location : {
        type : String , 
        required : true, 
    },
    image : {
        type : String , 
        required : true 
    },
    avgCost : {
        type : Number , 
        required : true ,
    },
    totalTour : {
        type : Number ,
        required : true ,
    }
});

export default models.City || model("City",citySchema);
