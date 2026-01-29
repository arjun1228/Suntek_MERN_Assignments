//create HTTP server
    //import express module
    import exp from 'express'
    //create server
    const app=exp()
    //Assign port Number
    app.listen(3000,() => console.log('HTTP server listening on port 3000..'))


    //Create API (req handlers - route)

        //get request handling route (Read users)
        app.get('/users',(req,res) => {
            //response to client
            res.json({"message" : "This is res from GET req handler"});
        });

        //post request handling route (Create users)
        app.post('/user',(req,res) => {
            //response to client
            res.json({"message" : "res from POST req handler"})
        });

        //put request handling route (update users)
        app.put('/users/id',(req,res) => {
            //response to client
            res.json({"message" : "res from PUT req handler"})
        });

        //delete request handling route (delete users)
        app.delete('/users/id',(req,res) => {
            //response to client
            res.json({"message" : "res from DELETE req handler"})
        });
