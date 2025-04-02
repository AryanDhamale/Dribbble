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
    totalPerson : {
        type : Number,
        min : 1,
        max : 10 ,
        required : true
    }
});

export default models.Listing || model("Listing", listingSchema);