1. Generate package.json
    npm init
2. Create server.js

3. Install , import "express" and create HTTP server.Assign port

### Connect MongoDb database
        REST API       --------> mongodb native driver -------->           MongoDB Server
        REST API       --------> mongodb ODM tool(mongoose) ------>        MongoDB Server
    
    a. Install mongoose and connect to MongoDB Server
    b. Create Schema of Resource
    c. Create model of that Schema 
    d. Perform DB Operations on that model