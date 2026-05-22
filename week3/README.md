# Week 3: Express Backend, MongoDB Integration, and Authentication

This folder contains the assignments and operations performed during Week 3 of the Suntek MERN stack training. The week's focus was on building backend APIs using Express.js, connecting to a MongoDB database using Mongoose, and implementing user authentication.

## Folder Structure & Operations

### 1. `backend_1`
This folder contains the initial setup for an Express.js backend application without database integration.
- **`server.js`**: Sets up the HTTP server using Express, configured to listen on port 3000. It includes basic routing to direct requests to user and product APIs and basic middleware examples.
- **`APIs/`**:
  - `UserAPI.js`: Defines routes and handlers for basic user-related operations.
  - `ProductAPI.js`: Defines routes and handlers for basic product-related operations.
- **`testing.http`**: Contains HTTP requests to test the API endpoints using the REST Client extension.

### 2. `backend_2`
This folder builds upon the first part by integrating a database and adding authentication mechanisms.
- **`server.js`**: An advanced server setup that connects to a local MongoDB instance (`anuragdb2`) using Mongoose. It listens on port 4000. It incorporates `cookie-parser` for handling JWT tokens in cookies and a global error-handling middleware.
- **`Models/`**: Contains the Mongoose schemas and models.
- **`MiddleWares/`**: Contains custom middleware logic.
- **`APIs/`**: Contains the route handlers utilizing the models.
- **`testing.http`**: Contains comprehensive HTTP requests to test the database-integrated API endpoints and authentication flows.

## Models (backend_2)

### 1. UserModel (`Models/UserModel.js`)
Defines the Mongoose schema and model for users in the database collection `users`.
- **`username`**: String, required, min length 4, max length 8.
- **`password`**: String, required (stored as a bcrypt hash).
- **`age`**: Number, required, min value 18, max value 25.
- The schema uses `{ strict: "throw", timestamps: true }` ensuring invalid fields throw an error and `createdAt`/`updatedAt` fields are auto-generated.

### 2. ProductModel (`Models/ProductModel.js`)
Defines the Mongoose schema and model for products in the database collection `products`.
- **`productId`**: Number, required.
- **`name`**: String, required.
- **`price`**: Number, required, minimum 100, maximum 1000000.
- The schema uses `{ strict: "throw", timestamps: true }`.

## Detailed API Routes (backend_2)

### User Routes (`/user-api`)
These routes manage everything related to users: registration, authentication, and CRUD (Create, Read, Update, Delete) operations.

- **`GET /user`**: Retrieves a list of all registered users from the database using `UserModel.find()`.
- **`POST /user` (User Registration)**: Registers a new user. It extracts user data from the request body, hashes the plain-text password using `bcryptjs` (`hash(newUser.password, 12)`), and saves the new document.
- **`POST /auth` (User Login & Authentication)**: Authenticates a user and issues a JSON Web Token (JWT). It checks if the user exists, compares the provided password with the hashed one using `bcryptjs.compare`, and if successful, generates a signed JWT (valid for 5s). This token is set in a secure, `httpOnly` cookie named `token` with `sameSite: "lax"`.
- **`GET /user/:id`**: Fetches a single user by their specific database object ID using `UserModel.findById(id)`.
- **`PUT /users/:id`**: Updates an existing user's information using `UserModel.findByIdAndUpdate(id, {$set: {...}}, {new: true})`, returning the freshly updated document.
- **`DELETE /users/:id`**: Deletes a user from the database using `UserModel.findByIdAndDelete()`.
- **`GET /test` (Protected Route)**: A test endpoint to verify if the user is authenticated. It uses the `verifyToken` middleware (from `MiddleWares/verifyToken.js`) before the main handler to check the `httpOnly` cookie for a valid JWT.

### Product Routes (`/product-api`)
These routes handle standard CRUD operations for products.

- **`GET /product`**: Retrieves all products from the database using `ProductModel.find()`.
- **`POST /product`**: Creates a new product. It takes the product details from the request body, creates a new Mongoose document (`new ProductModel()`), and saves it.
- **`GET /products/:id`**: Fetches a specific product by its database ID using `ProductModel.findById()`.
- **`PUT /products/:id`**: Updates the details of an existing product using `ProductModel.findByIdAndUpdate(id, {$set: {...}}, {new: true})`.

## Key Concepts Learned
- Setting up and configuring Express.js servers.
- Organizing routes using Express Router (`UserAPI.js`, `ProductAPI.js`).
- Connecting an Express backend to MongoDB using Mongoose.
- Defining Mongoose schemas and models with specific validation rules (`strict: "throw"`).
- Password hashing using `bcryptjs`.
- Implementing authentication using JSON Web Tokens (JWT).
- Handling `httpOnly` cookies with `cookie-parser`.
- Creating custom middlewares for token verification and global error handling.
