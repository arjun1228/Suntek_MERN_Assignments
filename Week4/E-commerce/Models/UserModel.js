import {Schema, model} from 'mongoose'
import { ProductModel } from './ProductModel.js';
//create cart schema
const cartSchema = new Schema({
    product :{ 
        type : Schema.Types.ObjectId,
        ref : 'product' //name of the product model
    },
})
const cartSchema1 = new Schema({
    product :{ 
        type : Schema.Types.ObjectId,
        ref : 'product' //name of the product model
    },
    quantity : {
        type : Number,
        default : 1, //default qty is 1
        required : true
    }
})


//create user schema
const userSchema = new Schema({
    name : {
        type : String,
        required : [true,"Name is required"]
    },
    email : {
        type : String,
        required : [true,"Email required"],
        unique: true // add to index
    },
    password : {
        type : String,
        required : [true,"Password required"]
    },
    cart : {
        type : [cartSchema1]
    }
},{
    strict : 'throw',
    timestamps : true,
    versionKey : false
})

//create model for that schema
export const UserModel = model("user",userSchema);
