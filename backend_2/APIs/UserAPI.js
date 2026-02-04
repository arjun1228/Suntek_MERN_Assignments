//create a mini server
import exp from 'express'
import { UserModel } from '../Models/UserModel.js'
import {hash,compare} from 'bcryptjs'
import jwt from 'jsonwebtoken'
import {verifyToken} from '../MiddleWares/verifyToken.js'
export const userApp = exp.Router()


//get request handler
userApp.get('/user', async (req,res) => {
    //read users from DB
    let users = await UserModel.find()
    //find({},{username:1,_id:0,age:1}) it returns only the usernama,age feilds only
    //send res
    res.status(200).json({message:"All Users",payload:users})
})


//Create User
userApp.post('/user',async (req,res) => {
        //get newUser 
        let newUser = req.body
        //create new user document
        //hash the password hash() returns the promise then we need to use the await 
        let hashedPassword = await hash(newUser.password,12)
        //replace plain password with the hashed password
        newUser.password = hashedPassword;
        let newuserDoc = new UserModel(newUser);
        //save in db
        await newuserDoc.save()
        //instead of doing the above 3 steps we can use the UserModel.create(req.body) directly 
        /*  await UserModel.create(req.body) */
        //send res
        res.status(201).json({message:"User Created"})
    })


//User Authentication(Login) route
userApp.post('/auth',async(req,res) => {
    //get user cred obj
    let userCred = req.body
    //check for username
    let userOfDB = await UserModel.findOne({username:userCred.username})
    //if user not found
    if(userOfDB === null) {
        return res.status(404).json({message:"Invalid USername"})
    }
    //compare password
    let status = await compare(userCred.password,userOfDB.password)
    //if password not matched
    if(status === false) {
        return res.status(401).json({message:"Invalid password"})
    }
    //create signed token (expires in 5 sec)
    let signedToken = jwt.sign({username:userCred.username},'abcdef', {expiresIn:"5s"})
    //save the token as HttpOnly cookie
    res.cookie('token',signedToken,{
        httpOnly : true, // it is httpOnly Cookie
        secure : false,
        sameSite : "lax"
    })
    //send token in res
    res.status(200).json({message:"Login Success"})
})    

//get user by ID
userApp.get('/user/:id',async(req,res) => {
    //get objectOID from url param
    let objId = req.params.id;
    //find user in DB
    let userObj = await UserModel.findById(objId)
    //send res
    res.status(200).json({message:"User",payload:userObj})
})


//Update user by objId
userApp.put('/users/:id',async(req,res) => {
    //get objectId from url params
    let objId = req.params.id
    //get modified user from req
    let modifiedUser = req.body
    //make update
    let latestUser = await UserModel.findByIdAndUpdate(objId,{$set:{...modifiedUser}},{new:true})
    //the use of {new:true} is we are telling Mongoose: "Hey, don't give me the old data. Wait until the update is finished, and then give me the fresh, updated version of the document."

    //send res
    res.status(200).json({message:"user updated",payload:latestUser})
})


//Delete User
userApp.delete('/users/:id',async(req,res) => {
    //get objectId from the url params
    let objId = req.params.id
    //make update
    let deletedUser = await UserModel.findByIdAndDelete(objId);
    //sen res
    res.status(200).json({message:"User Removed",payload:deletedUser})
})


//test route
userApp.get('/test',verifyToken,async(req,res) => {
    res.status(200).json({message:"Test route"})
})
