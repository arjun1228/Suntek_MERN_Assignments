//create HTTP server
    //import express module
    import exp from 'express'
    import {userApp} from  './APIs/UserAPI.js'
    import { productApp } from './APIs/ProductAPI.js'
    //create server
    const app=exp()
    //Assign port Number
    app.listen(3000,() => console.log('HTTP server listening on port 3000..'))
    
    //body passing middleware
    app.use(exp.json())

    //forward req to userApp when path starts with '/user-api'
    //forward req to productApp when path starts with '/product-api'
    app.use('/user-api',userApp)
    app.use('/product-api',productApp)































    // //creating the custom middleware
    // function middleware1(req,res,next) {
    //     console.log("middleware-1 executed")
    //     //send res
    //     //res.json({message : "res from middleware"})
    //     //forward req to next middleware
    //     next()
    // }
    // function middleware2(req,res,next) {
    //     console.log("middleware-1 executed")
    //     //send res
    //     //res.json({message : "res from middleware"})
    //     //forward req to next middleware
    //     next()
    // }


    // //to execute for every incoming req
    // app.use(middleware1)
    // app.use(middleware2);



