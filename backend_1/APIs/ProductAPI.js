import exp from 'express'
//create min - express (Seperate Route) app
export const productApp = exp.Router();
let products = []
        //get request handling route (Read products)
        productApp.get('/products',(req,res) => {
            //send product data into res
            res.status(200).json({message:"Products",payload:products})
        })

        //get request handling route by id  
         productApp.get('/products-id/:id',(req,res) => {
            //send product data into res
            let productID = Number(req.params.id)
            let product = products.find(productObj => productObj.productid === productID);
              if(!product) {
                return res.status(404).json({message:"product not found"}) 
            }
            //send res
            res.status(200).json({message:"Product found",payload: product})
        })

        //get request handling route by brand
         productApp.get('/products-brand/:brand',(req,res) => {
            //send product data into res
            let productBrand = req.params.brand
            let product = products.filter(productObj => productObj.brand === productBrand);
            if(product.length === 0) {
                return res.status(404).json({message:"Product not found"})
            }
            res.status(200).json({message:"Product Found",payload:product})
        })

        //post request handling route (Create products)
        productApp.post('/products',(req,res) => {
            //get product resource for req
            let newProduct = req.body
            //insert the newProduct into the array
            products.push(newProduct)
            res.status(201).json({message:"Products Created"})
        })

        //put request handling route (Update products)
        productApp.put('/products/:id',(req,res) => {
            //get modified product from req
            let modifiedProduct = req.body
            //find the product with id exists  in the array
            let productIndex = products.findIndex(productObj => productObj.productid === modifiedProduct.productid)
            //if product found send res as "Product found"
            if(productIndex === -1) {
                return res.status(404).json({message:"Product not Found"});
            }
            //if user found then modify the user
            let deletedProduct = products.splice(productIndex,1,modifiedProduct);
            //send req as "user modified"
            res.status(201).json({message:"user modified"});
        })

        //delete request handling route (Delete products)
        productApp.delete('/products/id',(req,res) => {
            //get the product id form res
            let deleteIndex = Number(req.params.id)
            let deletedProduct = products.find(productObj => productObj.productid == deleteIndex);
            //Use Splice for deleting
            products.splice(deleteIndex,1)
            //send req as the "Product Deleted"
            res.status(200).json({message:"Product Deleted",payload:products})
        })


