import exp from 'express'
import { ProductModel } from '../Models/ProductModel.js'
export const productApp = exp.Router()


//get request handler
productApp.get('/product',async (req,res) => {
    //read products from DB
    let products = await ProductModel.find()
    //send res
    res.status(200).json({message:"All Products",payload:products})
})

//Create Product
productApp.post('/product',async (req,res) => {
    //get new product
    let newProduct = req.body
    //create new product document
    let newProductDoc = new ProductModel(newProduct);
    //save in DB
    await newProductDoc.save();
    //send res
    res.status(200).json({message:"Product Created"})
})


//get product by id
productApp.get('/products/:id',async (req,res) => {
    let proId = req.params.id
    //find product in DB
    let proObj = await ProductModel.findById(proId)
    //send res
    res.status(200).json({message:"Product",payload:proObj})
})


//update product by Id
productApp.put('/products/:id',async (req,res) => {
    //get the product id by url params
    let proId = req.params.id
    //get modified product for req
    let modifiedProduct = req.body
    //make update
    let proObj = await ProductModel.findByIdAndUpdate(proId,{$set:{...modifiedProduct}},{new:true})
    //send res
    res.status(200).json({message:"Product Modified",payload:proObj});
})




