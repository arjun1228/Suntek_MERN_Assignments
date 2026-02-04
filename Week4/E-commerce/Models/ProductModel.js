import { Schema,model } from "mongoose";

//create new Schema
const productSchema = new Schema({
    productName : {
        type:String,
        required : [true,"Product name required" ]
    },
    price : {
        type:Number,
        required : [true ,"Price is required"]
    },
    brand: {
        type:String,
        required : [true,"Produc brand required"]
    }}, {
        strict: "throw",
        timestamps: true,
        versionKey: false
    })

//Model for that schema
export const ProductModel = model("product",productSchema);
