import { Schema, model, models } from "mongoose";

const listingSchema = new Schema({
    image: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true,
    },
    totalDay: {
        type: Number,
        required: true,
    },
    cities: {
        type: [String],
        required: true,
    },
    cost: {
        type: Number,
        required: true,
    },
    highlight: {
        type: [String],
        min : 3
    },
    // itinerary : {
    //     type  : [{
    //         date : Number , 
    //         city : String,
    //         activities : [{type:String}],
    //         accommodation : String ,
    //         meals : [String]
    //     }],
    //     default : []
    // }
});

export default models.Listing || model("Listing", listingSchema);