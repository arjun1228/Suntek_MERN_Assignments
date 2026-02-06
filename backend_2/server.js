import exp from 'express'
import {userApp} from './APIs/UserAPI.js'
import { productApp } from './APIs/ProductAPI.js'
import {connect} from 'mongoose'
import cookieParser from 'cookie-parser'
const app=exp()
const port = 4000;

//connect to db server
// when the connect returns the promise, then we need to consume the promise we can consume the promise by using the then() and catch()
// .then(): Runs if the connection is successful.
// .catch(): Runs if the connection fails (e.g., wrong password, database is down). 
//first we need to check the DB connection after that only we will add the HTTP connection
async function connectDB() {
    try { 
    await connect('mongodb://localhost:27017/anuragdb2')
    console.log("DB Connection success")
    app.listen(port,() => console.log("server is listening on port 4000.."))
    }catch(err) {
        console.log("Error in DB connection: ",err)
    }
}
connectDB()

//body parser middleware
app.use(exp.json())
//add cookie parser middleware
app.use(cookieParser())
//if the path starts with /user-api 
app.use('/user-api',userApp) 
//if the path starts with /product-api
app.use('/product-api',productApp)



// //error handling middleware
app.use((err,req,res,next) => {
    res.status(500).json({message:"Error",description:err.message})
})
