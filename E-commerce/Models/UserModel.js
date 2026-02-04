import { Schema,model } from "mongoose";

//Create User schema (useranme,password,age)
const userSchema = new Schema({

    username:{
        type:String,
        required: [true,"Username is required"],//validation rule
        minLength: [4,"Min length should be 4"],//validation rule
        maxLength: [8,"Max length exceeded"]
    },
    password: {
        type:String,
        required: [true,"Password is required"],
    },
    age: {
        type:Number,
        required:[true,"Age is require"],
        min:[18,"Age should be above 18"],
        max:[25,"Age should be less than 25"]
    }
}, {
    strict:"throw",
    timestamps:true
});
//Create User Model with theat Schema
export const UserModel = model("users",userSchema) //here the name of the collection in the DB is depends on the first parameter of the model method.

