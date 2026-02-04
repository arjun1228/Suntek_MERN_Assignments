import exp from 'express'
//create min - express (Seperate Route) app
export const userApp = exp.Router();
//Create User API (req handlers - route)
    let users = [];

        //get request handling route (Read users)
        userApp.get('/users',(req,res) => {
            //send users data in res
            res.status(200).json({message:"all users",payload:users})
           
        });

        //post request handling route (Create users)
        userApp.post('/users',(req,res) => {
            //get user resource from req
            //resources are available in the body property of the request object
            let newUser = req.body
            //insert the newUser into the array
            users.push(newUser)
            res.status(201).json({message:"newUser Created"})
          
        });

        //put request handling route (update users)
        userApp.put('/users',(req,res) => {
            //get modified user from req
            let modifiedUser = req.body
            //find the user with id exists  in the array
            let userIndex = users.findIndex(userObj => userObj.id === modifiedUser.id)
            //if user found send res as "User found"
            if(userIndex === -1) {
                return res.status(404).json({message:"User not Found"});
            }
            //if user found then modify the user
            let deletedUser = users.splice(userIndex,1,modifiedUser);
            //send req as "user modified"
            res.status(201).json({message:"user modified"});
        });

        //read user by id
        userApp.get('/users/:id',(req,res) => {
            console.log(req.params)
            //read id from url parameter
            let userId = Number(req.params.id)
            //read by this id
            let user = users.find(userObj => userObj.id === userId)
            if(!user) {
                return res.status(404).json({message:"user not found"}) 
            }
            //send res
            res.status(200).json({message:"user",payload:user})
        })

        //delete request handling route (delete users)
        userApp.delete('/users/id',(req,res) => {
            //get the userId from res
            let deletedId = Number(req.params.id)
            let deletedUser = users.findIndex(userObj => userObj.id === deletedId.id)
            //Use splice for deleting 
            users.splice(deletedId,1);
            //send res
            res.status(200).json({message:"User Deleted"}); 
        });
