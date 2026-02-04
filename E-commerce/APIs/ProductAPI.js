import exp from 'express'
import { ProductModel } from '../Models/ProductModel.js'

//create mini server
export const productApp = exp.Router()

//get all products
productApp.get('/products', async(req,res) => {
    //get product from DB
    let product = await ProductModel.find()
    //send res
    res.status(200).json({message:"All Products",payload:product})
})
//route to create new product
productApp.post('/products',async(req,res) => {
    //get new product
    let productObj = req.body
    //create new productdoc
    let productDoc = new ProductModel(productObj);
    //save the productDoc into DB
    await productDoc.save();
    //send res
    res.status(200).json({message:"Product Created"})
})