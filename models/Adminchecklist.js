import { Schema , model, models } from "mongoose";
import User from "./User";

const adminChecklischema=new Schema({
    role : {type:String , default : 'default'}, 
    admin : [ {type:Schema.Types.ObjectId,ref:'User'} ]
});

export default models.Adminchecklist || model('Adminchecklist',adminChecklischema);