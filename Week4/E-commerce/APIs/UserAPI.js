import exp from 'express'
import { UserModel } from '../Models/UserModel.js'
import jwt from 'jsonwebtoken'
import {hash,compare} from 'bcryptjs'
import { ProductModel } from '../Models/ProductModel.js'

//create mini server
export const userApp = exp.Router()

//get user
userApp.get('/users',async (req,res) => {
    //get the user from DB
    let users = await UserModel.find();
    //send res
    res.status(200).json({message:"All Users",payload:users})

})

//create user
userApp.post('/user',async (req,res) => {
        //get newUser 
        let newUser = req.body
        //run validator 
        await new UserModel(newUser).validate()
        //create new user document
        //hash the password hash() returns the promise then we need to use the await 
        let hashedPassword = await hash(newUser.password,12)
        //replace plain password with the hashed password
        newUser.password = hashedPassword;
        let newuserDoc = new UserModel(newUser);
        //save in db
        await newuserDoc.save({validateBeforeSave:false})
        //instead of doing the above 3 steps we can use the UserModel.create(req.body) directly 
        /*  await UserModel.create(req.body) */
        //send res
        res.status(201).json({message:"User Created"})
    })
    
//Auth user
userApp.post('/users',async(req,res) => {
    //get new user cred
    let userCred = req.body
    //get the user from DB
    let userOfDB = await UserModel.findOne({username:userCred.username})
    //if username not found
    if(userOfDB === null) {
        return res.status(400).json({message:"Invalid User"})
    }
    //compare passwords
    let status = await compare(userCred.password,userOfDB.password)
    //if password not matched
    if(status === false) {
        return res.status(400).json({message:"Invalid Password"})
    }
    //create signed token
    let signedToken = jwt.sign({username:userCred.username},'123455',{expiresIn:"5s"})
    //save token as HttpOnly Cookie
    res.cookie('token',signedToken, {
        httpOnly:true,
        secure:false,
        sameSite:"lax"
    })
    //send res
    res.status(200).json({message:"Login Success"})
})

//add the item into the cart
userApp.put('/user-cart/user-id/:uid/product-id/:pid',async(req,res)=>{
    //read uid and pid 
    let { uid,pid }=req.params
    //chech user
    let user=await UserModel.findById(uid)
    if(!user){
        return res.status(401).json({message:"User not found or Invalid user"})
    }
    //check product
    let product=await ProductModel.findById(pid)
    if(!product){
        return res.status(401).json({message:"Product not found or Invalid Product"})
    }
    //add new product to product
    let modifiedUser=await UserModel.findByIdAndUpdate(
            uid,
            {$push:{cart:{product:pid,quantity:1}}},
            {new:true}
        ).populate('cart.product cart.quantity')
    return res.status(200).json({message:"Product Added to cart",payload:modifiedUser})
})


//increment product in user's cart
userApp.put('/user-cart/updated/user-id/:uid/product-id/:pid', async (req, res) => {
    const { uid, pid } = req.params;
    // 1. check the user
    const user = await UserModel.findById(uid);
    if (!user) {
        return res.status(404).json({ message: "User Not Found" });
    }
    // 2. check product exists
    const product = await ProductModel.findById(pid);
    if (!product){
         return res.status(404).json({ message: "Product Not Found" });
    }
    // helper to extract id 
    const getProductId = (p) => {
        if (!p) return null;
        if (p._id) return p._id.toString();
        return p.toString();
    }
    // 3. Find index 
    const index = user.cart.findIndex(item => getProductId(item.product) === pid);
    if (index > -1) {
        // 4. Increment quantity (ensure numeric value)
        if (typeof user.cart[index].quantity !== 'number') user.cart[index].quantity = 0;
        user.cart[index].quantity += 1;
        user.markModified('cart');
    } else {
        // 5. Add new item
        user.cart.push({ product: pid, quantity: 1 });
    }
    // 6. Save and return populated user
    await user.save();
    await user.populate("cart.product");
    res.status(200).json({ message: "Cart updated successfully", payload: user });
}); 



userApp.get('/users/:uid',async(req,res) => {
    //get the user
    let userId = req.params.uid
    //find user from DB
    let userObj = await UserModel.findById(userId).populate("cart.product","productName price") //populate is used to get the nested object all details
    //send res
    if (!userObj) return res.status(404).json({ message: "User Not Found" });
    res.status(200).json({message:"User Details",payload:userObj})
})

