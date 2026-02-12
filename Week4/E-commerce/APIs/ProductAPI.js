import exp from 'express'
import { ProductModel } from '../Models/ProductModel.js'

//create mini server 
export const productApp = exp.Router()

//get all products
productApp.get('/products', async (req, res) => {
    let products = await ProductModel.find()
    //send res
    res.status(200).json({message: "All Prouducts", payload: products})
})


//create a product
productApp.post('/products', async (req, res) => {
    let newProduct = req.body
    //create a document with the new product data
    let newProductDoc = new ProductModel(newProduct)
    //save in DB
    await newProductDoc.save()
    //send res
    res.status(200).json({message: "Product created"})
})


//get product by id
productApp.get('/products/:id', async (req,res) => {
    //get the product from req
    let objId = req.params.id
    //check for the product
    let productObj = await ProductModel.findById(objId);
    //if not found
    if(!productObj) {
        return res.status(400).json({message:"Product not found"})
    }
    //send res
    res.status(200).json({message:"Product",payload:productObj})
})


//update a product
productApp.put('/products/:id', async (req,res) => {
    //get the product from req
    let objId = req.params.id
    let modifiedProduct = req.body
    //make update
    let latestProduct  =await ProductModel.findByIdAndUpdate(objId,{$set:{...modifiedProduct}},{new:true})
    //send res
    res.status(200).json({message:"Product Updated",payload:latestProduct})
})


//delete product by id
productApp.delete('/products/:id', async (req,res) =>{
    //get the product from req
    let objId = req.params.id
    let deleteProduct = req.body
    //delete the product
    let productInDB = await ProductModel.findByIdAndDelete(objId,{new:true})
    //send res
    res.status(200).json({message:"Product Deleted"})

})

