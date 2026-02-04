import { Schema,model } from "mongoose";

//create produc schema (productid,name,price)
const productSchema = new Schema( {
    productId :{
        type:Number,
        required:[true,"Product id is required"],
    },
    name : {
        type:String,
        required:[true,"name is required"]
    },
    price : {
        type: Number,
        required: [true,"Price is required"],
        minPrice: [100,"min price is 100"],
        maxPrice: [1000000,"Max price exceeded"]
    }
},{
    strict:"throw",
    timestamps:true
});

//Create Product Model for that schema
export const ProductModel = model("products",productSchema);

