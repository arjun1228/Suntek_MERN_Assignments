import exp from 'express'
import { userApp } from './APIs/UserAPI.js'
import { productApp } from './APIs/ProductAPI.js'
import {connect} from 'mongoose'
const app = exp()
const port = 3000
 

async function connectDB() {
    try {
        await connect('mongodb://localhost:27017/Ecomdb')
        console.log("DB connected Successfully");
        app.listen(port, () => console.log("server is listening to the port 3000"))
    } catch(err) {
        console.log("Error in DB connection",err)
    }
}
connectDB()

//body parser middleware
app.use(exp.json())
//if path starts with /user-api
app.use('/user-api',userApp);
//if path starts with /product-api
app.use('/product-api',productApp);

//error handling middleware
app.use((err,req,res,next) => {
    res.status(500).json({message:"Error",description:err.message})
})

